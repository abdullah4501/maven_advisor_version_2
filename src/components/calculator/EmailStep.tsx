import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, ArrowRight, Shield, Bell, Sparkles, ChevronLeft, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EmailStepProps {
  name: string;
  email: string;
  country: string;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onCountryChange: (country: string) => void;
  onContinue: () => void;
  onBack: () => void;
  isValid: boolean;
  errors?: Record<string, string>;
  isSubmitting?: boolean;
}

const EmailStep = ({
  name,
  email,
  country,
  onNameChange,
  onEmailChange,
  onCountryChange,
  onContinue,
  onBack,
  isValid,
  errors,
  isSubmitting
}: EmailStepProps) => {
  const [isDetectingCountry, setIsDetectingCountry] = useState(false);

  // Country list with common countries first
  const countries = [
    { code: "US", name: "United States" },
    { code: "GB", name: "United Kingdom" },
    { code: "CA", name: "Canada" },
    { code: "AU", name: "Australia" },
    { code: "IN", name: "India" },
    { code: "DE", name: "Germany" },
    { code: "FR", name: "France" },
    { code: "IT", name: "Italy" },
    { code: "ES", name: "Spain" },
    { code: "NL", name: "Netherlands" },
    { code: "JP", name: "Japan" },
    { code: "SG", name: "Singapore" },
    { code: "AE", name: "United Arab Emirates" },
    { code: "SA", name: "Saudi Arabia" },
    { code: "BR", name: "Brazil" },
    { code: "MX", name: "Mexico" },
    { code: "CN", name: "China" },
    { code: "KR", name: "South Korea" },
    { code: "RU", name: "Russia" },
    { code: "ZA", name: "South Africa" },
    { code: "NG", name: "Nigeria" },
    { code: "KE", name: "Kenya" },
    { code: "EG", name: "Egypt" },
    { code: "TH", name: "Thailand" },
    { code: "MY", name: "Malaysia" },
    { code: "PH", name: "Philippines" },
    { code: "ID", name: "Indonesia" },
    { code: "VN", name: "Vietnam" },
    { code: "PK", name: "Pakistan" },
    { code: "BD", name: "Bangladesh" },
    { code: "LK", name: "Sri Lanka" },
    { code: "NP", name: "Nepal" },
    { code: "MM", name: "Myanmar" },
    { code: "KH", name: "Cambodia" },
    { code: "LA", name: "Laos" },
    { code: "AF", name: "Afghanistan" },
    { code: "IR", name: "Iran" },
    { code: "IQ", name: "Iraq" },
    { code: "IL", name: "Israel" },
    { code: "TR", name: "Turkey" },
    { code: "GR", name: "Greece" },
    { code: "PL", name: "Poland" },
    { code: "CZ", name: "Czech Republic" },
    { code: "HU", name: "Hungary" },
    { code: "RO", name: "Romania" },
    { code: "BG", name: "Bulgaria" },
    { code: "HR", name: "Croatia" },
    { code: "RS", name: "Serbia" },
    { code: "UA", name: "Ukraine" },
    { code: "BY", name: "Belarus" },
    { code: "FI", name: "Finland" },
    { code: "SE", name: "Sweden" },
    { code: "NO", name: "Norway" },
    { code: "DK", name: "Denmark" },
    { code: "IS", name: "Iceland" },
    { code: "IE", name: "Ireland" },
    { code: "PT", name: "Portugal" },
    { code: "BE", name: "Belgium" },
    { code: "AT", name: "Austria" },
    { code: "CH", name: "Switzerland" },
    { code: "LI", name: "Liechtenstein" },
    { code: "LU", name: "Luxembourg" },
    { code: "MC", name: "Monaco" },
    { code: "AD", name: "Andorra" },
    { code: "SM", name: "San Marino" },
    { code: "VA", name: "Vatican City" },
    { code: "MT", name: "Malta" },
    { code: "CY", name: "Cyprus" },
    { code: "SI", name: "Slovenia" },
    { code: "SK", name: "Slovakia" },
    { code: "EE", name: "Estonia" },
    { code: "LV", name: "Latvia" },
    { code: "LT", name: "Lithuania" },
    { code: "MD", name: "Moldova" },
    { code: "AL", name: "Albania" },
    { code: "MK", name: "North Macedonia" },
    { code: "ME", name: "Montenegro" },
    { code: "BA", name: "Bosnia and Herzegovina" },
    { code: "RS", name: "Serbia" },
    { code: "XK", name: "Kosovo" },
    { code: "AR", name: "Argentina" },
    { code: "CL", name: "Chile" },
    { code: "CO", name: "Colombia" },
    { code: "PE", name: "Peru" },
    { code: "VE", name: "Venezuela" },
    { code: "EC", name: "Ecuador" },
    { code: "BO", name: "Bolivia" },
    { code: "PY", name: "Paraguay" },
    { code: "UY", name: "Uruguay" },
    { code: "GY", name: "Guyana" },
    { code: "SR", name: "Suriname" },
    { code: "GF", name: "French Guiana" },
    { code: "NZ", name: "New Zealand" },
    { code: "FJ", name: "Fiji" },
    { code: "PG", name: "Papua New Guinea" },
    { code: "SB", name: "Solomon Islands" },
    { code: "VU", name: "Vanuatu" },
    { code: "NC", name: "New Caledonia" },
    { code: "PF", name: "French Polynesia" },
    { code: "WS", name: "Samoa" },
    { code: "TO", name: "Tonga" },
    { code: "KI", name: "Kiribati" },
    { code: "TV", name: "Tuvalu" },
    { code: "NR", name: "Nauru" },
    { code: "PW", name: "Palau" },
    { code: "FM", name: "Micronesia" },
    { code: "MH", name: "Marshall Islands" },
    { code: "MP", name: "Northern Mariana Islands" },
    { code: "GU", name: "Guam" },
    { code: "AS", name: "American Samoa" },
    { code: "UM", name: "U.S. Minor Outlying Islands" },
    { code: "VI", name: "U.S. Virgin Islands" },
    { code: "PR", name: "Puerto Rico" },
    { code: "GL", name: "Greenland" },
    { code: "BM", name: "Bermuda" },
    { code: "KY", name: "Cayman Islands" },
    { code: "TC", name: "Turks and Caicos Islands" },
    { code: "VG", name: "British Virgin Islands" },
    { code: "AI", name: "Anguilla" },
    { code: "MS", name: "Montserrat" },
    { code: "GD", name: "Grenada" },
    { code: "BB", name: "Barbados" },
    { code: "TT", name: "Trinidad and Tobago" },
    { code: "DO", name: "Dominican Republic" },
    { code: "HT", name: "Haiti" },
    { code: "JM", name: "Jamaica" },
    { code: "CU", name: "Cuba" },
    { code: "BS", name: "Bahamas" },
    { code: "BZ", name: "Belize" },
    { code: "GT", name: "Guatemala" },
    { code: "SV", name: "El Salvador" },
    { code: "HN", name: "Honduras" },
    { code: "NI", name: "Nicaragua" },
    { code: "CR", name: "Costa Rica" },
    { code: "PA", name: "Panama" },
    { code: "MQ", name: "Martinique" },
    { code: "GP", name: "Guadeloupe" },
    { code: "RE", name: "Réunion" },
    { code: "YT", name: "Mayotte" },
    { code: "TF", name: "French Southern Territories" },
    { code: "HM", name: "Heard Island and McDonald Islands" },
    { code: "NF", name: "Norfolk Island" },
    { code: "CX", name: "Christmas Island" },
    { code: "CC", name: "Cocos (Keeling) Islands" },
    { code: "CK", name: "Cook Islands" },
    { code: "NU", name: "Niue" },
    { code: "TK", name: "Tokelau" },
    { code: "PN", name: "Pitcairn Islands" },
    { code: "SH", name: "Saint Helena" },
    { code: "AC", name: "Ascension Island" },
    { code: "TA", name: "Tristan da Cunha" },
    { code: "IO", name: "British Indian Ocean Territory" },
    { code: "DG", name: "Diego Garcia" },
    { code: "FK", name: "Falkland Islands" },
    { code: "GS", name: "South Georgia and the South Sandwich Islands" },
    { code: "AQ", name: "Antarctica" },
    { code: "BV", name: "Bouvet Island" },
    { code: "SJ", name: "Svalbard and Jan Mayen" },
    { code: "AX", name: "Åland Islands" },
  ];

  // Auto-detect country on component mount
  useEffect(() => {
    const detectCountry = async () => {
      if (country) return; // Skip if country is already set

      setIsDetectingCountry(true);
      try {
        console.log('Detecting country...');

        // Try multiple IP detection services in order
        const services = [
          {
            name: 'ipapi.co',
            url: 'https://ipapi.co/json/',
            parser: (data: any) => ({ code: data.country_code, name: data.country_name })
          },
          {
            name: 'ip-api.com',
            url: 'http://ip-api.com/json/',
            parser: (data: any) => ({ code: data.countryCode, name: data.country })
          },
          {
            name: 'ipinfo.io',
            url: 'https://ipinfo.io/json',
            parser: (data: any) => ({ code: data.country, name: data.country })
          }
        ];

        for (const service of services) {
          try {
            console.log(`Trying ${service.name}...`);
            const response = await fetch(service.url);
            console.log(`${service.name} Response status:`, response.status);

            if (response.ok) {
              const data = await response.json();
              console.log(`${service.name} Response data:`, data);

              const result = service.parser(data);
              if (result && result.code) {
                console.log(`Detected country via ${service.name}:`, result.code, result.name);
                onCountryChange(result.code);
                return; // Success, stop trying other services
              }
            }
          } catch (error) {
            console.error(`${service.name} failed:`, error);
          }
        }

        // If all services fail, try to get country from browser timezone
        try {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          console.log('Browser timezone:', timezone);

          // Map common timezones to countries
          const timezoneToCountry: Record<string, string> = {
            'Asia/Karachi': 'PK',
            'Asia/Tashkent': 'TJ',
            'Asia/Kabul': 'AF',
            'Asia/Dhaka': 'BD',
            'Asia/Colombo': 'LK',
            'Asia/Kolkata': 'IN',
            'Asia/Dubai': 'AE',
            'Asia/Riyadh': 'SA',
          };

          const detectedCountry = timezoneToCountry[timezone];
          if (detectedCountry) {
            console.log('Detected country from timezone:', detectedCountry);
            onCountryChange(detectedCountry);
            return;
          }
        } catch (tzError) {
          console.error('Timezone detection failed:', tzError);
        }

        // Final fallback - try to detect from browser locale
        try {
          const locale = navigator.language || navigator.languages?.[0];
          console.log('Browser locale:', locale);

          if (locale.includes('PK') || locale.includes('Pakistan')) {
            console.log('Detected Pakistan from browser locale');
            onCountryChange('PK');
            return;
          }
        } catch (localeError) {
          console.error('Locale detection failed:', localeError);
        }

        // Ultimate fallback
        console.log('Using ultimate fallback: US');
        onCountryChange('US');

      } catch (error) {
        console.error('All country detection methods failed:', error);
        onCountryChange('US');
      } finally {
        setIsDetectingCountry(false);
      }
    };

    detectCountry();
  }, [country, onCountryChange]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="max-w-[1440px] mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl font-bold mb-3">
          Almost there!
        </h2>
        <p className="text-muted-foreground text-lg">
          Enter your email to receive your personalized estimate
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-3xl p-8 border border-gray/80/50 shadow-lg"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors ${errors?.userName ? 'text-destructive' : 'text-black/80'}`}>
                Your Name <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Input
                  name="userName"
                  autoComplete="name"
                  type="text"
                  value={name}
                  onChange={(e) => onNameChange(e.target.value)}
                  placeholder="John Doe"
                  className={`h-14 pl-5 pr-4 text-lg rounded-xl border-2 transition-colors ${errors?.userName ? 'border-destructive focus:border-destructive shadow-[0_0_15px_-5px_hsl(var(--destructive))]' : 'border-gray/80 focus:border-gold'}`}
                />
                {errors?.userName && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-xs font-bold mt-1.5 uppercase tracking-wide"
                  >
                    {errors.userName}
                  </motion.p>
                )}
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors ${errors?.email ? 'text-destructive' : 'text-black/80'}`}>
                Email Address <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Mail className={`absolute left-4 top-14 sm:top-1/2 sm:-translate-y-1/2 w-5 h-5 transition-colors ${errors?.email ? 'text-destructive/60' : 'text-muted-foreground'}`} style={{ top: '28px' }} />
                <Input
                  name="userEmail"
                  autoComplete="email"
                  type="email"
                  value={email}
                  onChange={(e) => onEmailChange(e.target.value)}
                  placeholder="your@email.com"
                  className={`h-14 pl-12 pr-4 text-lg rounded-xl border-2 transition-colors ${errors?.email ? 'border-destructive focus:border-destructive shadow-[0_0_15px_-5px_hsl(var(--destructive))]' : 'border-gray/80 focus:border-gold'}`}
                />
                {errors?.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-xs font-bold mt-1.5 uppercase tracking-wide"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors ${errors?.country ? 'text-destructive' : 'text-black/80'}`}>
                Country <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Globe className={`absolute left-4 top-14 sm:top-1/2 sm:-translate-y-1/2 w-5 h-5 transition-colors ${errors?.country ? 'text-destructive/60' : 'text-muted-foreground'}`} style={{ top: '28px' }} />
                <Select
                  value={country}
                  onValueChange={onCountryChange}
                  disabled={isDetectingCountry}
                >
                  <SelectTrigger
                    className={`h-14 pl-12 pr-4 text-base rounded-xl border-2 transition-colors ${errors?.country ? 'border-destructive focus:border-destructive shadow-[0_0_15px_-5px_hsl(var(--destructive))]' : 'border-gray/80 focus:border-gold'}`}
                  >
                    <SelectValue placeholder={isDetectingCountry ? "Detecting your country..." : "Select your country"} />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {countries.map((c) => (
                      <SelectItem key={c.code} value={c.code}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors?.country && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-xs font-bold mt-1.5 uppercase tracking-wide"
                  >
                    {errors.country}
                  </motion.p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center mt-5 gap-4 justify-end">
            <Button
              type="button"
              variant="ghost"
              onClick={onBack}
              className=" rounded-full w-12 h-12 border border-gray flex items-center justify-center hover:bg-primary hover:text-white duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <button
              disabled={isSubmitting}
              className="rounded-full inline-flex items-center gap-3 rounded-[14px] bg-primary-gradient px-8 py-4 text-[15px] font-semibold"
              style={{ boxShadow: "var(--shadow-button)" }}
            >
              {isSubmitting ? "Saving..." : "View My Estimate"}
              {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
            </button>

          </div>
        </motion.div>
      </form>

      {/* Trust badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground"
      >
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-accent" />
          <span>Secure & Encrypted</span>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-accent" />
          <span>No Spam, Ever</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Instant Delivery</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EmailStep;
