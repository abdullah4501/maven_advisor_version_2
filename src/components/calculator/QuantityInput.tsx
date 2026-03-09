import { motion } from "framer-motion";
import { Clock, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KeyboardEvent } from "react";

interface QuantityInputProps {
  id: string;
  name: string;
  quantity: string;
  onQuantityChange: (id: string, value: string) => void;
  frequency?: string;
  onFrequencyChange?: (id: string, freq: string) => void;
  index: number;
  error?: string;
  frequencyError?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

const QuantityInput = ({
  id,
  name,
  quantity,
  onQuantityChange,
  frequency = "",
  onFrequencyChange,
  index,
  error,
  frequencyError,
  autoFocus,
  disabled,
  placeholder,
}: QuantityInputProps) => {
  // Convert service name to a more natural question format
  const getQuestion = (name: string) => {
    let cleanName = name.toLowerCase();

    // Remove prefixes to get the core action/item
    cleanName = cleanName.replace(/^number of\s+/i, '');
    cleanName = cleanName.replace(/^monthly\s+/i, '');
    cleanName = cleanName.replace(/\s+management$/i, '');

    // Transform specific words for better natural language questions
    if (cleanName === "bookkeeping") return "How many monthly transactions do you have?";
    if (cleanName.includes("profit and loss") || cleanName.includes("p&l")) return "How many monthly transactions do you have?";
    if (cleanName.includes("budgeting")) return "How many monthly transactions do you have?";
    if (cleanName.includes("cash flow")) return "How many monthly transactions do you have?";
    if (cleanName.includes("performance analysis")) return "How many monthly transactions do you have?";
    if (cleanName.includes("invoicing")) return "How many monthly invoices do you have?";
    if (cleanName.includes("billing")) return "How many monthly bills do you have?";
    if (cleanName.includes("receivable")) return "How many monthly invoices do you have?";
    if (cleanName.includes("payable")) return "How many monthly bills do you have?";
    if (cleanName.includes("payroll")) return "How many payroll runs do you have?";
    const lowerName = name.toLowerCase();
    if (lowerName.includes("strat") || lowerName.includes("advice") || String(id) === "8" || String(id) === "fp3") return "How many monthly strategic advice hours do you want?";

    return `What is the scale of your ${cleanName} requirements?`;
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      // Try to find a container - form, or a parent container with data attribute, or document
      const form = e.currentTarget.closest('form');
      const container = e.currentTarget.closest('[data-quantity-form]') || form || document;

      // Get all quantity inputs in the container
      const inputs = Array.from(container.querySelectorAll('input[inputmode="numeric"]:not(:disabled)')) as HTMLInputElement[];
      const currentIndex = inputs.indexOf(e.currentTarget);

      if (currentIndex < inputs.length - 1) {
        // Move to next input
        inputs[currentIndex + 1].focus();
      } else {
        // No more inputs, focus the Next/Submit button
        const buttonContainer = form || e.currentTarget.closest('[data-quantity-form]') || document;
        const nextButton = buttonContainer.querySelector(
          'button[type="submit"], button[data-next-button], button:last-of-type'
        ) as HTMLButtonElement;

        if (nextButton) {
          nextButton.focus();
        }
      }
    }
  };

  const question = getQuestion(name);
  const nameLower = name.toLowerCase();
  const isFrequencyService = nameLower.includes("payroll") || nameLower.includes("contractor");
  const hasQuantity = (parseFloat(quantity) || 0) > 0;
  const freqTitle = nameLower.includes("payroll") ? "Payroll Frequency" : "Payment Frequency";

  // Only show frequency section if it's a frequency service AND has quantity AND no frequency error
  const showFrequencySection = isFrequencyService && hasQuantity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group"
    >
      <div className={`flex flex-col gap-4 p-6 bg-card rounded-2xl border transition-all duration-300 ${disabled ? 'opacity-80 bg-muted/20' : ''} ${error ? 'border-destructive shadow-[0_0_15px_-5px_hsl(var(--destructive))]' : 'border-gray/60 hover:border-primary hover:shadow-md'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <label
            htmlFor={id}
            className={`font-display font-medium text-base transition-colors max-w-md leading-snug ${error ? 'text-destructive' : 'text-black/80 group-hover:text-black/90'} ${disabled ? 'text-muted-foreground' : ''}`}
          >
            {question}
            {disabled && <span className="block text-xs font-bold text-gold uppercase mt-1 tracking-wider">Synced with {placeholder}</span>}
          </label>

          <div className="relative w-full md:w-[20%]">
            <Input
              autoFocus={autoFocus}
              id={id}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={quantity}
              disabled={disabled}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, '');
                onQuantityChange(id, val);
              }}
              onKeyDown={handleKeyDown}
              className={`w-full h-12 text-center sm:text-right bg-muted/40 font-display font-bold text-lg px-4 rounded-xl transition-all border-2 ${disabled ? 'bg-muted/60 text-muted-foreground border-transparent cursor-not-allowed' : error ? 'border-destructive focus-visible:ring-destructive/20' : 'border-transparent focus-visible:ring-gold/20'}`}
              placeholder={disabled ? quantity : "-"}
            />
          </div>
        </div>

        {showFrequencySection && onFrequencyChange && (
          <div className={`flex flex-col gap-3 pt-2 ${frequencyError ? 'border-2 border-destructive/50 rounded-lg p-3 bg-destructive/5' : ''}`}>
            <p className={`text-xs font-medium uppercase tracking-wider ${frequencyError ? 'text-destructive' : 'text-muted-foreground'}`}>{freqTitle}</p>
            <div className="flex flex-wrap gap-2" id={`${id}_frequency`}>
              {["Weekly", "Bi-Monthly", "Monthly"].map((freq) => (
                <button
                  key={freq}
                  type="button"
                  id={`${id}_frequency_${freq.toLowerCase()}`}
                  onClick={() => onFrequencyChange(id, freq)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 border-2 ${frequency === freq
                    ? "bg-service-card  text-primary-foreground shadow-sm"
                    : "bg-muted/40 border-transparent text-muted-foreground hover:bg-muted/60"
                    } ${frequencyError ? "border-destructive/50" : ""}`}
                >
                  {freq}
                </button>
              ))}
            </div>
            {frequencyError && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="text-destructive text-xs font-bold uppercase tracking-wide bg-destructive/10 px-2 py-1 rounded"
              >
                ⚠️ {frequencyError}
              </motion.p>
            )}
          </div>
        )}

        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="text-destructive text-xs font-bold uppercase tracking-wide mt-1"
          >
            {error}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default QuantityInput;
