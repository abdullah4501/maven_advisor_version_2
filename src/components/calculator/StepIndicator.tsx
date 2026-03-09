import { motion } from "framer-motion";
import { Check, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: { label: string; icon: React.ReactNode }[];
}

const StepIndicator = ({ currentStep, totalSteps, steps }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 mr-0 sm:mr-auto">

      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = currentStep > stepNumber;
        const isActive = currentStep === stepNumber;

        return (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <motion.div
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  backgroundColor: isCompleted
                    ? "hsl(var(--primary))"
                    : isActive
                      ? "hsl(var(--primary))"
                      : "hsl(var(--muted))",
                }}
                transition={{ duration: 0.3 }}
                className={`
                  relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center
                  ${isActive ? "shadow-glow" : ""}
                  ${isCompleted || isActive ? "text-white bg-service-card" : "text-muted-foreground"}
                `}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-medium">{step.icon}</span>
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeStep"
                    className="absolute inset-0 rounded-2xl bg-gold"
                    style={{ zIndex: -1 }}
                  />
                )}
              </motion.div>
              <span
                className={`mt-2 text-xs font-medium hidden sm:block ${isActive ? "text-black/90" : "text-muted-foreground"
                  }`}
              >
                {step.label}
              </span>
            </div>

            {index < totalSteps - 1 && (
              <div className="w-8 sm:w-16 h-0.5 mx-2 sm:mx-3 rounded-full overflow-hidden bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isCompleted ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full bg-gold"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
