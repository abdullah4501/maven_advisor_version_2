import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSettings } from "@/context/SettingsContext";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Calculator as CalcIcon,
  Settings,
  ChevronLeft,
  ArrowRight,
  Layers,
  Hash,
  Mail,
  Receipt,
  Home,
} from "lucide-react";
import StepIndicator from "@/components/calculator/StepIndicator";
import ServiceCard from "@/components/calculator/ServiceCard";
import QuantityInput from "@/components/calculator/QuantityInput";
import EmailStep from "@/components/calculator/EmailStep";
import EstimateSummary from "@/components/calculator/EstimateSummary";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const STEPS = [
  { label: "Advisory", icon: <Layers className="w-5 h-5" /> },
  { label: "Details", icon: <Hash className="w-5 h-5" /> },
  { label: "Account", icon: <Mail className="w-5 h-5" /> },
  { label: "Analysis", icon: <Receipt className="w-5 h-5" /> },
];

const Calculator = ({ breadcrumb }) => {
  const { settings } = useSettings();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedServices, setSelectedServices] = useState<
    Record<string, boolean>
  >({});
  const [quantities, setQuantities] = useState<Record<string, string>>({});
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [serviceFrequencies, setServiceFrequencies] = useState<Record<string, string>>({});
  const [accountingSoftware, setAccountingSoftware] = useState<string>("");
  const [otherSoftware, setOtherSoftware] = useState<string>("");

  // Get initial step from URL or default to 1
  const initialStep = parseInt(searchParams.get("step") || "1");
  const [step, setStepState] = useState(initialStep);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync state with URL search parameters
  const setStep = (newStep: number, options?: { replace?: boolean }) => {
    setStepState(newStep);
    setSearchParams({ step: newStep.toString() }, { replace: options?.replace });

    // Save state to localStorage for steps 2, 3, and 4 (not step 1)
    if (newStep !== 1) {
      const stateToSave = {
        selectedServices,
        quantities,
        serviceFrequencies,
        accountingSoftware,
        otherSoftware,
        userName,
        email,
        country,
        step: newStep
      };
      localStorage.setItem('calculatorState', JSON.stringify(stateToSave));
    }

    // Scroll to top when changing steps
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const urlStep = parseInt(searchParams.get("step") || "1");
    if (urlStep !== step) {
      setStepState(urlStep);
    }
  }, [searchParams]);

  // Restore state from localStorage when not on step 1
  useEffect(() => {
    if (step !== 1) {
      try {
        const savedState = localStorage.getItem('calculatorState');
        if (savedState) {
          const parsedState = JSON.parse(savedState);

          // Only restore if we're moving to the same step that was saved
          if (parsedState.step === step) {
            setSelectedServices(parsedState.selectedServices || {});
            setQuantities(parsedState.quantities || {});
            setServiceFrequencies(parsedState.serviceFrequencies || {});
            setAccountingSoftware(parsedState.accountingSoftware || "");
            setOtherSoftware(parsedState.otherSoftware || "");
            setUserName(parsedState.userName || "");
            setEmail(parsedState.email || "");
            setCountry(parsedState.country || "");
          }
        }
      } catch (error) {
        console.error('Failed to restore calculator state:', error);
      }
    }
  }, [step]);


  const calculations = useMemo(() => {
    let totalMinutes = 0;
    let fixedCosts = 0;
    const serviceCosts: Record<
      string,
      { minutes: number; cost: number; quantity: number }
    > = {};

    // Combine both service lists to find Strategic Advice and treat it correctly
    const allServices = [...settings.services, ...settings.fixedPriceServices];

    // First loop: Services that use quantity (hourly + Strategic)
    allServices.forEach((service) => {
      const nameLower = (service.name || "").toLowerCase();
      const isStrategic = nameLower.includes("strat") || nameLower.includes("advice") || String(service.id) === "8" || String(service.id) === "fp3";
      const isFixedCategory = settings.fixedPriceServices.some(fps => fps.id === service.id);

      // If it's a regular hourly service OR it's Strategic advice (treated as hourly)


      if (selectedServices[service.id] && (!isFixedCategory || isStrategic)) {
        const qty = parseFloat(quantities[service.id] || "0") || 0;

        // Frequency multiplier for payroll and contractor payments
        let frequencyMultiplier = 1;
        if (nameLower.includes("payroll") || nameLower.includes("contractor")) {
          const freq = serviceFrequencies[service.id] || "Monthly";
          if (freq === "Weekly") frequencyMultiplier = 4;
          else if (freq === "Bi-Monthly") frequencyMultiplier = 2;
        }

        // Hardcode 60 mins for Strategic Advice as requested
        const minutesPerJob = isStrategic ? 60 : ((service as any).minutesPerJob || 0);
        const serviceMinutes = qty * minutesPerJob * frequencyMultiplier;

        let serviceCost = (serviceMinutes / 60) * settings.hourlyRate;

        // Priority check for strategic advice rate
        if (isStrategic) {
          const rate = Number(settings.strategicAdviceRate || 0);
          serviceCost = (serviceMinutes / 60) * rate;
        }

        totalMinutes += serviceMinutes;
        serviceCosts[service.id] = {
          minutes: serviceMinutes,
          cost: serviceCost,
          quantity: qty,
        };
      }
    });

    // Special logic for P&L Reporting based on Bookkeeping cost
    const bookkeepingService = settings.services.find(s => s.name.toLowerCase().includes("bookkeeping"));
    const bookkeepingCost = (bookkeepingService && selectedServices[bookkeepingService.id])
      ? serviceCosts[bookkeepingService.id]?.cost || 0
      : 0;

    // Second loop: Fixed price services only (excluding Strategic)
    settings.fixedPriceServices.forEach((service) => {
      const nameLower = (service.name || "").toLowerCase();
      const isStrategic = /strat/i.test(nameLower) || service.id === "8" || service.id === "fp3";

      if (selectedServices[service.id] && !isStrategic) {
        let price = service.price;
        let mins = 0;
        const isPnL = nameLower.includes("profit and loss") || nameLower.includes("p&l");
        const isBudgeting = nameLower.includes("budgeting");
        const isCashFlow = nameLower.includes("cash flow");
        const isPerformance = nameLower.includes("performance analysis");
        const isReportingService = isPnL || isBudgeting || isCashFlow || isPerformance;

        if (isReportingService) {
          const bookkeepingService = settings.services.find(s => s.name.toLowerCase().includes("bookkeeping"));
          const isBookkeepingSelected = bookkeepingService && selectedServices[bookkeepingService.id];

          if (!isBookkeepingSelected) {
            // Standalone: calculate based on transactions (using bookkeeping rates)
            const qty = Number(quantities[service.id] || 0);
            const bookMinutesPerJob = (bookkeepingService as any)?.minutesPerJob || 0;
            mins = qty * bookMinutesPerJob;
            price = (mins / 60) * settings.hourlyRate;
            // Apply a minimum of $50 per reporting service
            price = Math.max(50, price);
          } else {
            // Bundled with Bookkeeping: use fixed price from DB
            price = service.price;
          }
        }

        const qty = Number(quantities[service.id] || 0);
        fixedCosts += price;
        totalMinutes += mins;
        serviceCosts[service.id] = {
          minutes: mins,
          cost: price,
          quantity: qty > 0 ? qty : 1,
        };
      }
    });

    const activeServices = allServices.filter((s) => {
      if (!selectedServices[s.id]) return false;
      const isStrategic = /(strat|advice)/i.test(s.name || "") || s.id === "8" || s.id === "fp3";
      const isFixed = settings.fixedPriceServices.some(fps => fps.id === s.id);

      if (isStrategic || !isFixed) {
        return (parseFloat(quantities[s.id]) || 0) > 0;
      }
      return true;
    });

    const totalHours = totalMinutes / 60;
    const sumCost = Object.values(serviceCosts).reduce((acc, curr) => acc + curr.cost, 0);
    const totalCost = Math.max(100, sumCost);

    return { totalMinutes, totalHours, totalCost, serviceCosts, activeServices, baseCalculatedCost: sumCost };
  }, [selectedServices, quantities, settings, serviceFrequencies]);

  const handleServiceToggle = (id: string, checked: boolean) => {
    setSelectedServices((p) => {
      const newState = { ...p, [id]: checked };

      // Cross-sync quantities for linked services when toggling
      const invoicingService = settings.services.find(s => s.name.toLowerCase().includes("invoic"));
      const receivablesService = settings.services.find(s => s.name.toLowerCase().includes("receivable"));
      const billingService = settings.services.find(s => s.name.toLowerCase().includes("bill"));
      const payablesService = settings.services.find(s => s.name.toLowerCase().includes("payable"));
      const bookkeepingService = settings.services.find(s => s.name.toLowerCase().includes("bookkeeping"));
      const pnlService = settings.fixedPriceServices.find(s => s.name.toLowerCase().includes("profit and loss") || s.name.toLowerCase().includes("p&l"));

      if (checked) {
        setQuantities(prev => {
          const next = { ...prev };
          if (invoicingService && id === invoicingService.id && receivablesService && prev[receivablesService.id]) {
            next[id] = prev[receivablesService.id];
          }
          if (receivablesService && id === receivablesService.id && invoicingService && prev[invoicingService.id]) {
            next[id] = prev[invoicingService.id];
          }
          if (billingService && id === billingService.id && payablesService && prev[payablesService.id]) {
            next[id] = prev[payablesService.id];
          }
          if (payablesService && id === payablesService.id && billingService && prev[billingService.id]) {
            next[id] = prev[billingService.id];
          }
          if (bookkeepingService && id === bookkeepingService.id && pnlService && prev[pnlService.id]) {
            next[id] = prev[pnlService.id];
          }
          if (pnlService && id === pnlService.id && bookkeepingService && prev[bookkeepingService.id]) {
            next[id] = prev[bookkeepingService.id];
          }
          return next;
        });
      }

      return newState;
    });

    if (checked) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.services;
        return newErrors;
      });
    }
  };

  const handleQuantityChange = (id: string, val: string) => {
    if (val === "" || /^\d*$/.test(val)) {
      setQuantities((p) => {
        const newQuantities = { ...p, [id]: val };

        const invoicingService = settings.services.find(s => s.name.toLowerCase().includes("invoic"));
        const receivablesService = settings.services.find(s => s.name.toLowerCase().includes("receivable"));
        const billingService = settings.services.find(s => s.name.toLowerCase().includes("bill"));
        const payablesService = settings.services.find(s => s.name.toLowerCase().includes("payable"));
        const bookkeepingService = settings.services.find(s => s.name.toLowerCase().includes("bookkeeping"));
        const pnlService = settings.fixedPriceServices.find(s => s.name.toLowerCase().includes("profit and loss") || s.name.toLowerCase().includes("p&l"));

        // Sync Receivables if Invoicing is changed
        if (invoicingService && id === invoicingService.id && receivablesService && selectedServices[receivablesService.id]) {
          newQuantities[receivablesService.id] = val;
        }
        // Sync Invoicing if Receivables is changed (if visible)
        if (receivablesService && id === receivablesService.id && invoicingService && selectedServices[invoicingService.id]) {
          newQuantities[invoicingService.id] = val;
        }

        // Sync Payables if Billing is changed
        if (billingService && id === billingService.id && payablesService && selectedServices[payablesService.id]) {
          newQuantities[payablesService.id] = val;
        }
        // Sync Billing if Payables is changed (if visible)
        if (payablesService && id === payablesService.id && billingService && selectedServices[billingService.id]) {
          newQuantities[billingService.id] = val;
        }

        // Sync PNL if Bookkeeping is changed
        if (bookkeepingService && id === bookkeepingService.id && pnlService && selectedServices[pnlService.id]) {
          newQuantities[pnlService.id] = val;
        }
        // Sync Bookkeeping if PNL is changed
        if (pnlService && id === pnlService.id && bookkeepingService && selectedServices[bookkeepingService.id]) {
          newQuantities[bookkeepingService.id] = val;
        }

        // Sync all selected reporting services together (they all share the same transaction count)
        const isReportingId = (sid: string) => settings.fixedPriceServices.some(fps => {
          const n = fps.name.toLowerCase();
          return fps.id === sid && (
            n.includes("profit and loss") || n.includes("p&l") ||
            n.includes("budgeting") || n.includes("cash flow") || n.includes("performance analysis")
          );
        });
        if (isReportingId(id)) {
          settings.fixedPriceServices.forEach(fps => {
            if (fps.id !== id && isReportingId(fps.id) && selectedServices[fps.id]) {
              newQuantities[fps.id] = val;
            }
          });
        }

        return newQuantities;
      });

      if (val !== "" && parseInt(val) > 0) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[id];
          // Also clear errors for synced services
          if (id === "4") delete newErrors["7"];
          if (id === "5") delete newErrors["6"];
          // Clear errors for all reporting services when any one of them is filled
          settings.fixedPriceServices.forEach(fps => {
            const n = fps.name.toLowerCase();
            if (n.includes("profit and loss") || n.includes("p&l") ||
              n.includes("budgeting") || n.includes("cash flow") || n.includes("performance analysis")) {
              delete newErrors[fps.id];
            }
          });
          return newErrors;
        });
      }
    }
  };

  const handleFrequencyChange = (id: string, freq: string) => {
    setServiceFrequencies((p) => ({ ...p, [id]: freq }));
    // Clear frequency error when frequency is selected
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[`${id}_frequency`];
      return newErrors;
    });
  };

  const totalSelectedServices = Object.values(selectedServices).filter(
    (v) => v,
  ).length;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = isEmailValid && userName.trim().length > 1 && country.trim().length > 0;

  const handleNext = async () => {
    const newErrors: Record<string, string> = {};
    let firstEmptyFieldId: string | null = null;

    if (step === 1) {
      if (totalSelectedServices > 0) {
        setErrors({});

        // Pre-sync quantities before moving to details step
        setQuantities(prev => {
          const next = { ...prev };
          const inv = settings.services.find(s => s.name.toLowerCase().includes("invoic"));
          const rec = settings.services.find(s => s.name.toLowerCase().includes("receivable"));
          const bill = settings.services.find(s => s.name.toLowerCase().includes("bill"));
          const pay = settings.services.find(s => s.name.toLowerCase().includes("payable"));

          if (inv && rec && selectedServices[inv.id] && selectedServices[rec.id]) next[rec.id] = next[inv.id] || "";
          if (bill && pay && selectedServices[bill.id] && selectedServices[pay.id]) next[pay.id] = next[bill.id] || "";
          return next;
        });

        const needsStep2 = [...settings.services, ...settings.fixedPriceServices].some(
          (s) => {
            if (!selectedServices[s.id]) return false;
            const nameLower = (s.name || "").toLowerCase();
            const isStrategic = nameLower.includes("strat") || nameLower.includes("advice") || String(s.id) === "8" || String(s.id) === "fp3";
            const isReporting = nameLower.includes("profit and loss") || nameLower.includes("p&l") ||
              nameLower.includes("budgeting") || nameLower.includes("cash flow") || nameLower.includes("performance analysis");
            const isFixed = settings.fixedPriceServices.some(fps => fps.id === s.id);
            if (isReporting && isFixed) {
              const book = settings.services.find(s2 => s2.name.toLowerCase().includes("bookkeeping"));
              return !(book && selectedServices[book.id]);
            }
            return isStrategic || !isFixed;
          }
        );

        if (needsStep2) {
          setStep(2);
        } else {
          setStep(3);
        }
      } else {
        setErrors({ services: "Please select at least one service to continue." });
      }
    } else if (step === 2) {
      const allServices = [...settings.services, ...settings.fixedPriceServices];
      const bookkeepingService = settings.services.find(s => s.name.toLowerCase().includes("bookkeeping"));
      const isBookkeepingSelected = bookkeepingService && selectedServices[bookkeepingService.id];

      // Validate accounting software
      if (!accountingSoftware) {
        newErrors.accountingSoftware = "required";
        firstEmptyFieldId = "software";
      } else if (accountingSoftware === "Others" && !otherSoftware.trim()) {
        newErrors.accountingSoftware = "Please specify your software";
        firstEmptyFieldId = "otherSoftware";
      }

      allServices.forEach((s) => {
        const nameLower = (s.name || "").toLowerCase();
        const isStrategic = nameLower.includes("strat") || nameLower.includes("advice") || String(s.id) === "8" || String(s.id) === "fp3";
        const isFixed = settings.fixedPriceServices.some(fps => fps.id === s.id);
        const isReporting = isFixed && (
          nameLower.includes("profit and loss") || nameLower.includes("p&l") ||
          nameLower.includes("budgeting") || nameLower.includes("cash flow") || nameLower.includes("performance analysis")
        );
        const needsQty = isStrategic || !isFixed || (isReporting && !isBookkeepingSelected);
        const needsFrequency = nameLower.includes("payroll") || nameLower.includes("contractor");

        if (selectedServices[s.id] && needsQty) {
          if ((parseFloat(quantities[s.id]) || 0) <= 0) {
            newErrors[s.id] = ` required`;
            if (!firstEmptyFieldId) firstEmptyFieldId = s.id;
          }
        }

        // Validate frequency for payroll and contractor services
        if (selectedServices[s.id] && needsFrequency) {
          if (!serviceFrequencies[s.id]) {
            newErrors[`${s.id}_frequency`] = "Frequency required";
            if (!firstEmptyFieldId) firstEmptyFieldId = `${s.id}_frequency`;
          }
        }
      });

      if (Object.keys(newErrors).length === 0) {
        setErrors({});
        setStep(3);
      } else {
        setErrors(newErrors);
        // Focus on first empty field
        setTimeout(() => {
          if (firstEmptyFieldId === "software") {
            document.getElementById("software")?.focus();
          } else if (firstEmptyFieldId === "otherSoftware") {
            document.getElementById("otherSoftware")?.focus();
          } else if (firstEmptyFieldId && firstEmptyFieldId.includes("_frequency")) {
            const serviceId = firstEmptyFieldId.replace("_frequency", "");
            document.getElementById(`${serviceId}_frequency`)?.focus();
          } else if (firstEmptyFieldId) {
            document.getElementById(firstEmptyFieldId)?.focus();
          }
        }, 100);
      }
    } else if (step === 3) {
      if (!userName.trim()) {
        newErrors.userName = "Name is required";
        firstEmptyFieldId = "userName";
      }
      if (!email.trim()) {
        newErrors.email = "Email is required";
        if (!firstEmptyFieldId) firstEmptyFieldId = "userEmail";
      } else if (!isEmailValid) {
        newErrors.email = "Invalid email address";
        if (!firstEmptyFieldId) firstEmptyFieldId = "userEmail";
      }
      if (!country.trim()) {
        newErrors.country = "Country is required";
        if (!firstEmptyFieldId) firstEmptyFieldId = "country";
      }

      if (Object.keys(newErrors).length === 0) {
        setErrors({});

        // Save to Database
        setIsSubmitting(true);
        const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/';
        const payload = {
          userName,
          email,
          country,
          accountingSoftware: accountingSoftware === "Others" ? otherSoftware : accountingSoftware,
          services: calculations.activeServices.map(s => ({
            id: s.id,
            name: s.name,
            quantity: calculations.serviceCosts[s.id]?.quantity || 1,
            frequency: serviceFrequencies[s.id] || undefined,
            cost: calculations.serviceCosts[s.id]?.cost || 0
          })),
          totalCost: calculations.totalCost,
          totalHours: calculations.totalHours,
          currency: settings.currency
        };

        try {
          const response = await fetch(`${baseUrl.replace(/\/$/, '')}/api/estimates/save`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });

          console.log('Response status:', response.status);
          console.log('Response ok:', response.ok);

          if (response.ok) {
            // Clear localStorage on successful submission
            localStorage.removeItem('calculatorState');
            toast.success("Estimate saved successfully!");
            console.log('Moving to Step 4...');
            setStep(4);
          } else {
            const errorData = await response.json().catch(() => ({}));
            console.error('Server error:', errorData);
            toast.error("Could not save estimate to the database, but you can still view it.");
            // Still proceed to results so user isn't stuck
            setStep(4);
          }
        } catch (error) {
          console.error('Network error:', error);
          toast.error("Could not save estimate to the database, but you can still view it.");
          // Still proceed to results so user isn't stuck
          setStep(4);
        } finally {
          setIsSubmitting(false);
        }
      } else {
        setErrors(newErrors);
        // Focus on first empty field
        setTimeout(() => {
          if (firstEmptyFieldId === "userName") {
            document.getElementById("userName")?.focus();
          } else if (firstEmptyFieldId === "userEmail") {
            document.getElementById("userEmail")?.focus();
          } else if (firstEmptyFieldId === "country") {
            document.getElementById("country")?.focus();
          }
        }, 100);
      }
    }
  };

  const handleBack = () => {
    if (step === 3) {
      const needsStep2 = [...settings.services, ...settings.fixedPriceServices].some(
        (s) => {
          if (!selectedServices[s.id]) return false;
          const nameLower = (s.name || "").toLowerCase();
          const isStrategic = nameLower.includes("strat") || nameLower.includes("advice") || String(s.id) === "8" || String(s.id) === "fp3";
          const isReporting = nameLower.includes("profit and loss") || nameLower.includes("p&l") ||
            nameLower.includes("budgeting") || nameLower.includes("cash flow") || nameLower.includes("performance analysis");
          const isFixed = settings.fixedPriceServices.some(fps => fps.id === s.id);
          if (isReporting && isFixed) {
            const book = settings.services.find(s2 => s2.name.toLowerCase().includes("bookkeeping"));
            return !(book && selectedServices[book.id]);
          }
          return isStrategic || !isFixed;
        }
      );
      if (!needsStep2) {
        setStep(1, { replace: true });
        return;
      }
    }
    if (step > 1) setStep(step - 1, { replace: true });
  };

  const handleReset = () => {
    setStep(1, { replace: true });
    setSelectedServices({});
    setQuantities({});
    setUserName("");
    setEmail("");
    setAccountingSoftware("");
    setOtherSoftware("");
  };

  return (
    <div>


      <div className="bg-background">
        {/* Background decoration */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1440px] min-h-[95vh] mx-auto px-4 sm:px-6 py-20">

          {/* Step Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-10 flex justify-center items-center flex-col sm:flex-row gap-5 sm:gap-0"
          >
            <Link to={'/'} className="mr-auto p-3 bg-[#e6e7e9] rounded-lg" title="Home">
              <Home className="w-6 h-6" />
            </Link>
            <StepIndicator currentStep={step} totalSteps={4} steps={STEPS} />
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                <div className="text-center mb-10">
                  <h2 className="font-display text-3xl font-bold mb-2">
                    Choose Your Services
                  </h2>
                  <p className="text-muted-foreground">
                    Select the specialized services tailored to your business needs
                  </p>

                  {errors.services && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive font-bold text-sm uppercase tracking-widest mt-4"
                    >
                      {errors.services}
                    </motion.p>
                  )}
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${errors.services ? 'p-4 rounded-3xl border-2 border-destructive/20 bg-destructive/5' : ''}`}>
                  {/* Category 1: Finance Operations */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-1 w-6 bg-primary-gradient rounded-full" />
                      <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Finance Operations</h3>
                    </div>
                    <div className="flex flex-col gap-3">
                      {[1, 2, 3, 4, 5, 6, 7].map(id => {
                        const s = [...settings.services, ...settings.fixedPriceServices].find(item => String(item.id) === String(id));
                        if (!s) return null;
                        return (
                          <ServiceCard
                            key={s.id}
                            id={s.id}
                            name={s.name}
                            minutesPerJob={(s as any).minutesPerJob || 0}
                            isSelected={selectedServices[s.id] || false}
                            onToggle={handleServiceToggle}
                            index={Number(id)}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Category 2: Reporting & Forecasting */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-1 w-6 bg-primary-gradient rounded-full" />
                      <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Reporting & Forecasting</h3>
                    </div>
                    <div className="flex flex-col gap-3">
                      {["fp7", "fp6", "fp5", "fp4"].map((id, idx) => {
                        const s = [...settings.services, ...settings.fixedPriceServices].find(item => item.id === id);
                        if (!s) return null;
                        return (
                          <ServiceCard
                            key={s.id}
                            id={s.id}
                            name={s.name}
                            minutesPerJob={(s as any).minutesPerJob || 0}
                            isSelected={selectedServices[s.id] || false}
                            onToggle={handleServiceToggle}
                            index={idx + 10}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Category 3: Compliance & Strategic Advisory */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-1 w-6 bg-primary-gradient rounded-full" />
                      <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Compliance & Strategic</h3>
                    </div>
                    <div className="flex flex-col gap-3">
                      {["fp8", "fp2", "8", "fp1"].map((id, idx) => {
                        const s = [...settings.services, ...settings.fixedPriceServices].find(item => item.id === id);
                        if (!s) return null;
                        return (
                          <ServiceCard
                            key={s.id}
                            id={s.id}
                            name={s.name}
                            minutesPerJob={(s as any).minutesPerJob || 0}
                            isSelected={selectedServices[s.id] || false}
                            onToggle={handleServiceToggle}
                            index={idx + 20}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Quantities */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                    Details
                  </h2>
                  <p className="text-muted-foreground">
                    Specify the quantity for each selected service
                  </p>
                </div>

                <div className={`group flex flex-col gap-4 p-6 bg-card rounded-2xl border transition-all duration-300 mb-4 ${errors.accountingSoftware ? 'border-destructive shadow-[0_0_15px_-5px_hsl(var(--destructive))]' : 'border-gray/60 hover:border-primary hover:shadow-md'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <label
                      htmlFor="software"
                      className={`font-display font-medium text-lg transition-colors max-w-md leading-snug ${errors.accountingSoftware ? 'text-destructive' : 'text-black/80 group-hover:text-black/90'}`}
                    >
                      Which accounting software are you currently using?
                    </label>

                    <div className="relative w-full md:w-[20%]">
                      <Select
                        value={accountingSoftware}
                        onValueChange={(val) => {
                          setAccountingSoftware(val);
                          setErrors(prev => { const e = { ...prev }; delete e.accountingSoftware; return e; });
                        }}
                      >
                        <SelectTrigger
                          id="software"
                          className={`w-full h-12 bg-muted/40 font-display font-bold text-base rounded-xl border-2 transition-all ${errors.accountingSoftware ? 'border-primary !focus-visible:ring-primary' : '!border-transparent focus-visible:ring-primary'}`}
                        >
                          <SelectValue placeholder="Select software" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="QuickBooks">QuickBooks</SelectItem>
                          <SelectItem value="Xero">Xero</SelectItem>
                          <SelectItem value="FreshBooks">FreshBooks</SelectItem>
                          <SelectItem value="Wave">Wave</SelectItem>
                          <SelectItem value="Sage">Sage</SelectItem>
                          <SelectItem value="Zoho Books">Zoho Books</SelectItem>
                          <SelectItem value="Others">Others</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {accountingSoftware === "Others" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2"
                    >
                      <label
                        htmlFor="otherSoftware"
                        className="font-display font-medium text-lg text-foreground/80 max-w-md leading-snug"
                      >
                        Please specify your software
                      </label>
                      <div className="relative w-full md:w-[20%]">
                        <Input
                          id="otherSoftware"
                          placeholder="Enter software name"
                          value={otherSoftware}
                          onChange={(e) => setOtherSoftware(e.target.value)}
                          className="w-full h-12 text-right bg-muted/40 font-display font-bold text-xl px-4 rounded-xl border-2 border-transparent focus-visible:ring-gold/20"
                        />
                      </div>
                    </motion.div>
                  )}

                  {errors.accountingSoftware && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-destructive text-xs font-bold uppercase tracking-wide mt-1"
                    >
                      {errors.accountingSoftware}
                    </motion.p>
                  )}
                </div>

                {totalSelectedServices === 0 ? (
                  <div className="text-center py-16 bg-card rounded-3xl border border-dashed border-gray">
                    <p className="text-muted-foreground mb-4">
                      No services selected.
                    </p>
                    <Button variant="link" onClick={() => setStep(1, { replace: true })}>
                      Go back to select services
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {(() => {
                      const book = settings.services.find(s => s.name.toLowerCase().includes("bookkeeping"));
                      const isBookkeepingSelected = book && selectedServices[book.id];

                      // Identify all selected reporting services (without bookkeeping)
                      const isReportingFixed = (s: any) => settings.fixedPriceServices.some(fps => {
                        const n = fps.name.toLowerCase();
                        return fps.id === s.id && (
                          n.includes("profit and loss") || n.includes("p&l") ||
                          n.includes("budgeting") || n.includes("cash flow") || n.includes("performance analysis")
                        );
                      });

                      // Find the first selected reporting service (to show just one input for all)
                      const selectedReportingServices = settings.fixedPriceServices.filter(
                        s => selectedServices[s.id] && isReportingFixed(s) && !isBookkeepingSelected
                      );
                      const representativeReportingId = selectedReportingServices.length > 0
                        ? selectedReportingServices[0].id
                        : null;

                      const allServices = [...settings.services, ...settings.fixedPriceServices];

                      const filtered = allServices.filter((s) => {
                        if (!selectedServices[s.id]) return false;

                        const nameLower = (s.name || "").toLowerCase();
                        const inv = settings.services.find(s => s.name.toLowerCase().includes("invoic"));
                        const rec = settings.services.find(s => s.name.toLowerCase().includes("receivable"));
                        const bill = settings.services.find(s => s.name.toLowerCase().includes("bill"));
                        const pay = settings.services.find(s => s.name.toLowerCase().includes("payable"));
                        const pnl = settings.fixedPriceServices.find(s => s.name.toLowerCase().includes("profit and loss") || s.name.toLowerCase().includes("p&l"));

                        // Hide if synced with a primary service that is also selected
                        if (rec && s.id === rec.id && inv && selectedServices[inv.id]) return false;
                        if (pay && s.id === pay.id && bill && selectedServices[bill.id]) return false;
                        if (pnl && s.id === pnl.id && book && selectedServices[book.id]) return false;

                        // Strategic advice is always treated as an hourly service in Step 2
                        if (nameLower.includes("strat") || nameLower.includes("advice") || String(s.id) === "8" || String(s.id) === "fp3") return true;

                        // For reporting services without bookkeeping: only show the representative one
                        if (isReportingFixed(s)) {
                          if (isBookkeepingSelected) return false;
                          // Only show the first selected reporting service as the single input
                          return s.id === representativeReportingId;
                        }

                        // Fixed price services don't go in Step 2 (except Strategic and reporting)
                        const isFixed = settings.fixedPriceServices.some(fps => fps.id === s.id);
                        if (isFixed) return false;

                        return true;
                      });

                      return filtered.map((service, idx) => {
                        // For the representative reporting service, show a combined label
                        const isRepReporting = service.id === representativeReportingId && selectedReportingServices.length > 1;
                        return (
                          <QuantityInput
                            key={service.id}
                            id={service.id}
                            name={isRepReporting ? "bookkeeping" : service.name}
                            quantity={quantities[service.id] || ""}
                            onQuantityChange={handleQuantityChange}
                            frequency={serviceFrequencies[service.id]}
                            onFrequencyChange={handleFrequencyChange}
                            index={idx}
                            error={errors[service.id]}
                            frequencyError={errors[`${service.id}_frequency`]}
                            autoFocus={idx === 0}
                          />
                        );
                      });
                    })()}
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 3: Email */}
            {step === 3 && (
              <EmailStep
                key="step3"
                name={userName}
                email={email}
                country={country}
                onNameChange={setUserName}
                onEmailChange={setEmail}
                onCountryChange={setCountry}
                onContinue={handleNext}
                onBack={handleBack}
                isValid={isFormValid}
                errors={errors}
                isSubmitting={isSubmitting}
              />
            )}

            {/* Step 4: Summary */}
            {step === 4 && (
              <EstimateSummary
                key="step4"
                activeServices={calculations.activeServices}
                serviceCosts={calculations.serviceCosts}
                totalCost={calculations.totalCost}
                totalHours={calculations.totalHours}
                currency={settings.currency}
                onReset={handleReset}
                onBack={handleBack}
                email={email}
                accountingSoftware={accountingSoftware === "Others" ? otherSoftware : accountingSoftware}
                baseCalculatedCost={calculations.baseCalculatedCost}
              />
            )}
          </AnimatePresence>

          {/* Navigation Bar - Only show for steps 1-3 */}
          {step < 4 && step !== 3 && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className="flex mt-5 justify-end bottom-6 left-1/2 -translate-x-1/2 z-50"
            >
              <div className="flex items-end gap-3 p-2 ">
                {step > 1 && (
                  <button
                    onClick={handleBack}
                    className="rounded-full w-12 h-12 border border-gray flex items-center justify-center hover:bg-primary hover:text-white duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}

                <button
                  className=" inline-flex items-center gap-3 rounded-[14px] bg-primary-gradient px-8 py-4 text-[15px] font-semibold"
                  onClick={handleNext}
                >
                  Next
                  <ArrowRight  />
                </button>
              </div>
            </motion.div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Calculator;
