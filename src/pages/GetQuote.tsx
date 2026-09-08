import { useState, type FormEvent, type KeyboardEvent, type ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CalendarDays, Calculator } from "lucide-react"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import { usePageMeta } from "@/hooks/usePageMeta"
import heroImage from "@/assets/features_main.jpg"

const calendlyUrl = "https://calendly.com/adeelshaikh/quick-catch-up-with-your-virtual-cfo?hide_gdpr_banner=1&background_color=ffffff&text_color=161616&primary_color=0c7ffb"

const US_ENTITY_OPTIONS = [
  "Sole Proprietor",
  "Limited Liability Company (LLC)",
  "S Corporation",
  "C Corporation",
  "Partnership",
  "Limited Partnership (LP)",
  "Limited Liability Partnership (LLP)",
  "Nonprofit",
  "Other",
  "Not Sure",
]

const UK_ENTITY_OPTIONS = [
  "Sole Trader",
  "Private Limited Company (LTD)",
  "Limited Liability Partnership (LLP)",
  "Partnership",
  "Public Limited Company (PLC)",
  "Charity / Nonprofit",
  "Other",
  "Not Sure",
]

const ACCOUNTING_SOFTWARE = [
  "QuickBooks Online",
  "Xero",
  "Sage",
  "Zoho Books",
  "FreshBooks",
  "Wave",
  "NetSuite",
  "Odoo",
  "Other",
  "Not currently using accounting software",
]

const SERVICE_OPTIONS = [
  { key: "financeOperations", title: "Finance Operations", description: "Bookkeeping, payroll, billing, payables, receivables and recurring finance administration." },
  { key: "reporting", title: "Reporting & Forecasting", description: "Management reporting, budgets, cash flow forecasts and performance analysis." },
  { key: "ukTax", title: "UK Tax & Compliance", description: "VAT, HMRC and Companies House support." },
  { key: "usTax", title: "US Tax & Compliance", description: "Federal and state tax and compliance support." },
  { key: "advisory", title: "Financial Advisory", description: "Specific financial advice or ongoing CFO-level guidance and oversight." },
  { key: "setup", title: "Finance System Setup", description: "Accounting software, chart of accounts and finance workflow setup or restructuring." },
] as const

const FINANCE_RESPONSIBILITIES = [
  { key: "bookkeeping", label: "Monthly Bookkeeping" },
  { key: "payroll", label: "Payroll Management" },
  { key: "contractors", label: "Contractor Payments" },
  { key: "invoicing", label: "Customer Invoicing / Billing" },
  { key: "payables", label: "Accounts Payable" },
  { key: "receivables", label: "Accounts Receivable" },
] as const

const ADVISORY_SCOPES = [
  "Financial Modelling",
  "Business Planning",
  "Business Valuation",
  "Profitability / Margin Review",
  "Cash Flow Management & Analysis",
  "Budgeting & Forecasting",
  "Management Reporting",
  "Pricing / Commercial Analysis",
  "Strategic Decision Support",
  "Finance Function Oversight",
  "Investment / Funding Decisions",
  "Other",
]

const inputClass = "w-full rounded-[14px] border border-transparent bg-[#f3f5f4] px-5 py-4 text-[15px] text-black outline-none transition duration-300 placeholder:text-[#8a8a8a] focus:border-[#0C7FFB]/35 focus:bg-white focus:ring-4 focus:ring-[#0C7FFB]/10"
const formsApiBaseUrl = (
  (import.meta as ImportMeta & { env?: { VITE_FORMS_API_BASE_URL?: string } }).env?.VITE_FORMS_API_BASE_URL
).replace(/\/$/, "")

type QuoteTab = "calculate" | "cfo"
type ServiceKey = (typeof SERVICE_OPTIONS)[number]["key"]
type FinanceResponsibility = (typeof FINANCE_RESPONSIBILITIES)[number]["key"]

function collectFormValues(form: HTMLFormElement) {
  const submission: Record<string, string | string[]> = {}

  new FormData(form).forEach((value, key) => {
    if (typeof value !== "string") return
    const existingValue = submission[key]

    if (existingValue === undefined) submission[key] = value
    else if (Array.isArray(existingValue)) existingValue.push(value)
    else submission[key] = [existingValue, value]
  })

  return submission
}

export default function GetQuote() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingSubmitted, setBookingSubmitted] = useState(false)
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false)
  const [bookingError, setBookingError] = useState("")
  const [bookingContact, setBookingContact] = useState({ name: "", email: "" })
  const [activeTab, setActiveTab] = useState<QuoteTab>("calculate")
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)
  const [country, setCountry] = useState("")
  const [accountingSoftware, setAccountingSoftware] = useState("")
  const [entityType, setEntityType] = useState("")
  const [selectedServices, setSelectedServices] = useState<Set<ServiceKey>>(new Set())
  const [financeResponsibilities, setFinanceResponsibilities] = useState<Set<FinanceResponsibility>>(new Set())
  const [usTaxClassification, setUsTaxClassification] = useState("")
  const [advisoryScopes, setAdvisoryScopes] = useState<Set<string>>(new Set())
  const [formError, setFormError] = useState("")

  const entityOptions = country === "United States" ? US_ENTITY_OPTIONS : country === "United Kingdom" ? UK_ENTITY_OPTIONS : []

  const handleCountryChange = (value: string) => {
    setCountry(value)
    setEntityType("")
  }

  const toggleService = (key: ServiceKey, checked: boolean) => {
    setSelectedServices((current) => {
      const next = new Set(current)
      if (checked) next.add(key)
      else next.delete(key)
      return next
    })

    if (!checked && key === "financeOperations") setFinanceResponsibilities(new Set())
    if (!checked && key === "usTax") setUsTaxClassification("")
    if (!checked && key === "advisory") setAdvisoryScopes(new Set())
    if (checked) setFormError("")
  }

  const toggleFinanceResponsibility = (key: FinanceResponsibility, checked: boolean) => {
    setFinanceResponsibilities((current) => {
      const next = new Set(current)
      if (checked) next.add(key)
      else next.delete(key)
      return next
    })
  }

  const toggleAdvisoryScope = (scope: string, checked: boolean) => {
    setAdvisoryScopes((current) => {
      const next = new Set(current)
      if (checked) next.add(scope)
      else next.delete(scope)
      return next
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormError("")

    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity()
      return
    }

    if (selectedServices.size === 0) {
      setFormError("Please select at least one service so we can understand what support you need.")
      requestAnimationFrame(() => document.getElementById("quote-form-error")?.scrollIntoView({ behavior: "smooth", block: "center" }))
      return
    }

    const submission = collectFormValues(event.currentTarget)

    setIsSubmitting(true)

    try {
      const response = await fetch(`${formsApiBaseUrl}/api/quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      })

      if (!response.ok) throw new Error("Quote request could not be sent")

      setSubmitted(true)
    } catch {
      setFormError("We could not send your quotation request. Please try again.")
      requestAnimationFrame(() => document.getElementById("quote-form-error")?.scrollIntoView({ behavior: "smooth", block: "center" }))
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBookingSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setBookingError("")

    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const submission = collectFormValues(form)
    setIsBookingSubmitting(true)

    try {
      const response = await fetch(`${formsApiBaseUrl}/api/cfo-booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      })

      if (!response.ok) throw new Error("Booking request could not be sent")

      setBookingContact({
        name: String(submission.fullName || ""),
        email: String(submission.workEmail || ""),
      })
      setCalendlyLoaded(false)
      setBookingSubmitted(true)
    } catch {
      setBookingError("We could not submit your details. Please try again.")
    } finally {
      setIsBookingSubmitting(false)
    }
  }

  const bookingCalendlyUrl = bookingSubmitted
    ? `${calendlyUrl}&name=${encodeURIComponent(bookingContact.name)}&email=${encodeURIComponent(bookingContact.email)}`
    : calendlyUrl

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return

    event.preventDefault()
    const nextTab: QuoteTab = event.key === "Home"
      ? "calculate"
      : event.key === "End"
        ? "cfo"
        : activeTab === "calculate" ? "cfo" : "calculate"

    setActiveTab(nextTab)
    requestAnimationFrame(() => document.getElementById(`${nextTab}-quotation-tab`)?.focus())
  }

  usePageMeta(
    "Get a Virtual CFO Quote | Mavens Advisor",
    "Tell us about your UK or US business and receive a fixed monthly Virtual CFO quotation built around your activity and priorities."
  )

  return (
    <>
      <Header />
      <PageHero
        image={heroImage}
        eyebrow="Get My Tailored Quote"
        title="See What Your Finance Function Could Cost"
        description="Tell us what your business is managing today and what you want the finance function to improve. We will assess the activity, review the requirements and prepare a tailored fixed monthly quotation."
      />

      <main className="bg-[#f6f7f4] py-[80px] md:py-[120px]">
        <div className="container max-w-[1100px]">
          <section className="rounded-[28px] bg-black p-[30px] text-white md:p-[45px]">
            <h2 className="text-[30px] font-semibold">Before You Begin</h2>
            <p className="mt-4 leading-[1.7] text-white/70">The assessment usually takes a few minutes. Please provide operational information only. Do not upload bank statements, tax returns, Social Security numbers or confidential client records through this form.</p>
          </section>

          <section className="mt-7 rounded-[26px] bg-white p-2 shadow-[0_16px_50px_rgba(17,24,39,0.06)] md:p-3">
            <div role="tablist" aria-label="Choose how to get your quotation" className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <QuoteTabButton active={activeTab === "calculate"} controls="calculate-quotation-panel" id="calculate-quotation-tab" onClick={() => setActiveTab("calculate")} onKeyDown={handleTabKeyDown} icon={<Calculator size={20} />}>
                Get My Quote
              </QuoteTabButton>
              <QuoteTabButton active={activeTab === "cfo"} controls="cfo-quotation-panel" id="cfo-quotation-tab" onClick={() => setActiveTab("cfo")} onKeyDown={handleTabKeyDown} icon={<CalendarDays size={20} />}>
                Book a Call with a CFO
              </QuoteTabButton>
            </div>
          </section>

          <div id="calculate-quotation-panel" role="tabpanel" aria-labelledby="calculate-quotation-tab" hidden={activeTab !== "calculate"} className="mt-7">
            <motion.div initial={{ opacity: 0, y: -28 }} animate={{ opacity: activeTab === "calculate" ? 1 : 0, y: activeTab === "calculate" ? 0 : -28 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
              {submitted ? (
                <section className="rounded-[30px] bg-white p-[50px] text-center md:p-[75px]">
                  <h2 className="text-[38px] font-semibold">Thank You</h2>
                  <p className="mx-auto mt-5 max-w-[760px] text-[18px] leading-[1.7] text-[#6b6b6b]">Our team will review your activity, priorities and requirements, then contact you to discuss the appropriate scope and fixed monthly quotation.</p>
                </section>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7" noValidate aria-busy={isSubmitting}>
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <FormSection number="01" title="About You & Your Business" description="We only ask for information that helps us understand the likely scope of work.">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <TextField name="fullName" label="Full Name" required />
                      <TextField name="workEmail" label="Work Email" type="email" required />
                      <TextField name="companyName" label="Company Name" required />
                      <SelectField name="country" label="Country" groupLabel="Primary Markets" value={country} onChange={handleCountryChange} options={["United Kingdom", "United States", "Other"]} required />

                      {country === "Other" && (
                        <ConditionalField>
                          <TextField name="otherCountry" label="Please Specify Your Country" placeholder="Enter country" required />
                        </ConditionalField>
                      )}

                      <TextField name="industry" label="Industry" placeholder="e.g. Fitness, E-commerce, Construction, SaaS" required />
                      <SelectField name="accountingSoftware" label="Accounting Software" value={accountingSoftware} onChange={setAccountingSoftware} options={ACCOUNTING_SOFTWARE} required />

                      {accountingSoftware === "Other" && (
                        <ConditionalField>
                          <TextField name="otherSoftware" label="Please Specify the Accounting Software" placeholder="e.g. Google Sheets, Excel, or another system" required />
                        </ConditionalField>
                      )}

                      {entityOptions.length > 0 && (
                        <ConditionalField>
                          <SelectField name="entityType" label="Legal / Entity Type" value={entityType} onChange={setEntityType} options={entityOptions} required />
                        </ConditionalField>
                      )}

                      {entityType === "Other" && (
                        <ConditionalField>
                          <TextField name="otherEntity" label="Please Specify the Entity Type" placeholder="Enter legal structure or entity type" required />
                        </ConditionalField>
                      )}

                      <TextAreaField
                        name="businessNature"
                        label="Nature of the Business"
                        placeholder="For example: We operate three fitness studios and sell memberships and personal training packages; or we sell homeware products online through Shopify and Etsy."
                        helper="Briefly explain what the business does, how it operates, and what it sells or provides."
                        required
                        className="md:col-span-2"
                      />
                      <TextField
                        name="thirdPartySoftware"
                        label="Other Business Software / Platforms You Use"
                        placeholder="e.g. Shopify, Etsy, Amazon, Stripe, PayPal, Jobber, A2X, Gusto, Bill.com"
                        helper="Include relevant sales platforms, payment processors, payroll tools, operating systems or finance integrations."
                        className="md:col-span-2"
                      />
                    </div>
                  </FormSection>

                  <FormSection number="02" title="Engagement" description="Tell us whether you are looking for ongoing support or help with a specific project.">
                    <ChoicePills name="engagement" options={["Ongoing / Recurring", "One-Off Project", "Not Sure Yet"]} required />
                  </FormSection>

                  <FormSection number="03" title="What Support Are You Looking For?" description="Select all that apply. We will only show the questions relevant to your selections.">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {SERVICE_OPTIONS.map((service) => {
                        const selected = selectedServices.has(service.key)
                        return (
                          <label key={service.key} className={`cursor-pointer rounded-[18px] border p-5 transition-all duration-300 ${selected ? "border-[#0C7FFB]/50 bg-blue-50 shadow-[0_10px_25px_rgba(12,127,251,0.08)]" : "border-transparent bg-[#f3f5f4] hover:border-black/10 hover:bg-white"}`}>
                            <span className="flex items-start gap-3 text-[15px] font-semibold">
                              <input name="selectedServices" value={service.title} type="checkbox" checked={selected} onChange={(event) => toggleService(service.key, event.target.checked)} className="mt-1 accent-[#0C7FFB]" />
                              {service.title}
                            </span>
                            <span className="mt-2 block pl-6 text-[13px] leading-[1.55] text-[#6b6b6b]">{service.description}</span>
                          </label>
                        )
                      })}
                    </div>

                    {formError && <p id="quote-form-error" role="alert" className="mt-5 rounded-[14px] border border-red-200 bg-red-50 px-5 py-4 text-[14px] text-red-700">{formError}</p>}

                    <div className="space-y-4">
                      <AnimatePresence initial={false}>
                        {selectedServices.has("financeOperations") && (
                          <ConditionalPanel key="finance-operations" title="Finance Operations" description="Select the responsibilities you would like us to handle.">
                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                              {FINANCE_RESPONSIBILITIES.map((item) => (
                                <CheckOption key={item.key} name="financeResponsibilities" value={item.label} label={item.label} checked={financeResponsibilities.has(item.key)} onChange={(checked) => toggleFinanceResponsibility(item.key, checked)} />
                              ))}
                            </div>

                            <div className="mt-4 space-y-4">
                              <AnimatePresence initial={false}>
                                {financeResponsibilities.has("bookkeeping") && (
                                  <QuestionGroup key="bookkeeping-questions">
                                    <SelectField name="monthlyTransactions" label="Average Monthly Transactions" placeholder="Select approximate range" options={["Under 50", "50–100", "101–250", "251–500", "501–1,000", "1,000+", "Not Sure"]} />
                                    <SelectField name="bankAccounts" label="Bank & Credit Card Accounts" options={["1–2", "3–5", "6–10", "10+", "Not Sure"]} />
                                    <SelectField name="bookkeepingStatus" label="How Up to Date Are Your Books?" options={["Fully up to date", "1–3 months behind", "4–6 months behind", "7–12 months behind", "More than 12 months behind", "Books have not been set up yet"]} />
                                  </QuestionGroup>
                                )}
                              </AnimatePresence>

                              <AnimatePresence initial={false}>
                                {financeResponsibilities.has("payroll") && (
                                  <QuestionGroup key="payroll-questions">
                                    <SelectField name="payrollEmployees" label="Employees on Payroll" options={["1–5", "6–10", "11–25", "26–50", "51–100", "100+"]} />
                                    <SelectField name="payrollFrequency" label="Payroll Frequency" options={["Weekly", "Bi-weekly", "Monthly", "Other"]} />
                                  </QuestionGroup>
                                )}
                              </AnimatePresence>

                              <AnimatePresence initial={false}>
                                {financeResponsibilities.has("contractors") && (
                                  <QuestionGroup key="contractor-questions">
                                    <SelectField name="contractors" label="Regular Contractors" options={["1–5", "6–10", "11–25", "26–50", "50+"]} />
                                    <SelectField name="contractorFrequency" label="Payment Frequency" options={["Weekly", "Bi-weekly", "Monthly", "Other"]} />
                                  </QuestionGroup>
                                )}
                              </AnimatePresence>

                              <AnimatePresence initial={false}>
                                {financeResponsibilities.has("invoicing") && (
                                  <QuestionGroup key="invoice-questions">
                                    <SelectField name="customerInvoices" label="Average Customer Invoices Per Month" options={["Under 25", "25–50", "51–100", "101–250", "250+"]} />
                                  </QuestionGroup>
                                )}
                              </AnimatePresence>

                              <AnimatePresence initial={false}>
                                {financeResponsibilities.has("payables") && (
                                  <QuestionGroup key="payables-questions">
                                    <SelectField name="supplierBills" label="Average Supplier Bills Per Month" options={["Under 25", "25–50", "51–100", "101–250", "250+"]} />
                                  </QuestionGroup>
                                )}
                              </AnimatePresence>

                              <AnimatePresence initial={false}>
                                {financeResponsibilities.has("receivables") && (
                                  <QuestionGroup key="receivables-questions">
                                    <SelectField name="receivablesVolume" label="Average Outstanding Customer Accounts Each Month" options={["Under 25", "25–50", "51–100", "101–250", "250+", "Not Sure"]} />
                                  </QuestionGroup>
                                )}
                              </AnimatePresence>
                            </div>
                          </ConditionalPanel>
                        )}
                      </AnimatePresence>

                      <AnimatePresence initial={false}>
                        {selectedServices.has("reporting") && (
                          <ConditionalPanel key="reporting" title="Reporting & Forecasting" description="A few details help us understand the reporting complexity.">
                            <QuestionGrid>
                              <SelectField name="reportingFrequency" label="Preferred Reporting Frequency" options={["Monthly", "Quarterly", "Other"]} />
                              <SelectField name="reportingEntities" label="Number of Business Entities" options={["1", "2", "3–5", "6+"]} />
                              <SelectField name="existingForecast" label="Do You Currently Have a Budget or Forecast?" options={["Yes", "No", "Not Sure"]} />
                            </QuestionGrid>
                          </ConditionalPanel>
                        )}
                      </AnimatePresence>

                      <AnimatePresence initial={false}>
                        {selectedServices.has("ukTax") && (
                          <ConditionalPanel key="uk-tax" title="UK Tax & Compliance" description="These details help us understand the filing and compliance scope.">
                            <QuestionGrid>
                              <SelectField name="vatRegistered" label="Is the Business VAT Registered?" options={["Yes", "No", "Registration in progress"]} />
                              <SelectField name="vatFrequency" label="VAT Filing Frequency" options={["Monthly", "Quarterly", "Annual", "Not Sure"]} />
                              <SelectField name="ukEntities" label="UK Companies Requiring Support" options={["1", "2", "3–5", "6+"]} />
                            </QuestionGrid>
                          </ConditionalPanel>
                        )}
                      </AnimatePresence>

                      <AnimatePresence initial={false}>
                        {selectedServices.has("usTax") && (
                          <ConditionalPanel key="us-tax" title="US Tax & Compliance" description="These details help us understand the tax filing structure and compliance scope.">
                            <QuestionGrid>
                              <SelectField name="usTaxClassification" label="US Tax Classification" value={usTaxClassification} onChange={setUsTaxClassification} options={["Sole Proprietor", "Single-Member LLC / Disregarded Entity", "Multi-Member LLC / Partnership", "S Corporation", "C Corporation", "Partnership", "Nonprofit", "Not Sure", "Other"]} />
                              <SelectField name="usEntities" label="US Entities Requiring Support" options={["1", "2", "3–5", "6+"]} />
                              <SelectField name="stateCompliance" label="State Compliance" options={["One state", "2–5 states", "6+ states", "Not Sure"]} />
                              {usTaxClassification === "Other" && (
                                <ConditionalField>
                                  <TextField name="otherUsTax" label="Please Specify the US Tax Classification" placeholder="Enter tax classification" required />
                                </ConditionalField>
                              )}
                            </QuestionGrid>
                          </ConditionalPanel>
                        )}
                      </AnimatePresence>

                      <AnimatePresence initial={false}>
                        {selectedServices.has("advisory") && (
                          <ConditionalPanel key="advisory" title="Financial Advisory" description="Tell us whether you need support with a specific decision or ongoing CFO-level guidance.">
                            <p className="mb-3 text-[14px] font-semibold">Type of Advisory Support</p>
                            <ChoicePills name="advisoryType" options={["Specific / One-Off Advisory", "Ongoing CFO Support", "Not Sure Yet"]} />
                            <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                              {ADVISORY_SCOPES.map((scope) => (
                                <CheckOption key={scope} name="advisoryScope" value={scope} label={scope === "Other" ? "Other Financial Advisory" : scope} checked={advisoryScopes.has(scope)} onChange={(checked) => toggleAdvisoryScope(scope, checked)} />
                              ))}
                            </div>
                            {advisoryScopes.has("Other") && (
                              <motion.div className="mt-4" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                                <TextField name="otherAdvisory" label="Please Tell Us What You Need Help With" placeholder="Briefly describe the advisory support you need" required />
                              </motion.div>
                            )}
                          </ConditionalPanel>
                        )}
                      </AnimatePresence>

                      <AnimatePresence initial={false}>
                        {selectedServices.has("setup") && (
                          <ConditionalPanel key="setup" title="Finance System Setup" description="Tell us what stage your current finance setup is at.">
                            <SelectField name="setupStatus" label="What Best Describes Your Current Setup?" options={["Starting from scratch", "Accounting software exists but needs configuration", "Existing system needs restructuring", "Moving from another accounting system", "Not Sure"]} />
                          </ConditionalPanel>
                        )}
                      </AnimatePresence>
                    </div>
                  </FormSection>

                  <FormSection number="04" title="Anything Else We Should Know?" description="Share any additional context about your current finance setup, issues you are facing, or the support you expect from us.">
                    <TextAreaField name="additionalContext" label="Additional Context" placeholder="Tell us briefly about your requirements..." helper="Optional" />
                  </FormSection>

                  <div className="flex flex-col gap-5 rounded-[24px] bg-white p-[28px] md:flex-row md:items-center md:justify-between md:p-[35px]">
                    <p className="max-w-[650px] text-[13px] leading-[1.6] text-[#6b6b6b]">We use the information above to understand your likely scope and level of business activity. You do not need to upload bank statements or provide accounting-system access through this form.</p>
                    <button type="submit" disabled={isSubmitting} className="shrink-0 rounded-[14px] bg-primary-gradient px-9 py-5 text-[16px] font-semibold disabled:cursor-wait disabled:opacity-60">
                      {isSubmitting ? "Sending Request..." : "Get My Tailored Quote"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          <div id="cfo-quotation-panel" role="tabpanel" aria-labelledby="cfo-quotation-tab" hidden={activeTab !== "cfo"} className="mt-7">
            <motion.section initial={{ opacity: 0, y: -28 }} animate={{ opacity: activeTab === "cfo" ? 1 : 0, y: activeTab === "cfo" ? 0 : -28 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden rounded-[30px] bg-white shadow-[0_16px_50px_rgba(17,24,39,0.06)]">
              <AnimatePresence mode="wait" initial={false}>
                {!bookingSubmitted ? (
                  <motion.div key="booking-form" initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.35 }} className="p-[28px] md:p-[45px]">
                    <p className="wdt-heading mb-3">Speak Directly with Our CFO</p>
                    <h2 className="text-[30px] font-semibold leading-[1.2] md:text-[38px]">Speak with a CFO</h2>
                    <p className="mt-4 max-w-[780px] text-[16px] leading-[1.7] text-[#6b6b6b]">Share a few details first, then choose a convenient time from the booking calendar.</p>

                    <form onSubmit={handleBookingSubmit} noValidate aria-busy={isBookingSubmitting} className="mt-9">
                      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                      <div className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2">
                        <TextField name="fullName" label="Full Name" required />
                        <TextField name="workEmail" label="Work Email" type="email" required />
                        <TextField name="companyName" label="Company Name" required />
                        <TextField name="phoneNumber" label="Phone Number" type="tel" helper="Optional" />
                        <TextAreaField name="discussion" label="What Would You Like to Discuss?" placeholder="Briefly tell us what you need support with." required className="md:col-span-2" />
                      </div>

                      {bookingError && <p role="alert" className="mt-6 rounded-[14px] border border-red-200 bg-red-50 px-5 py-4 text-[14px] text-red-700">{bookingError}</p>}

                      <div className="mt-8 flex flex-col gap-5 border-t border-black/10 pt-7 md:flex-row md:items-center md:justify-between">
                        <p className="max-w-[650px] text-[13px] leading-[1.6] text-[#6b6b6b]">Submit your details first, then choose a suitable time from the booking calendar.</p>
                        <button type="submit" disabled={isBookingSubmitting} className="shrink-0 rounded-[14px] bg-primary-gradient px-9 py-5 text-[16px] font-semibold disabled:cursor-wait disabled:opacity-60">
                          {isBookingSubmitting ? "Submitting Details..." : "Continue to Booking"}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div key="booking-calendar" initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
                    <div className="border-b border-black/10 px-[28px] py-[26px] md:px-[45px] md:py-[32px]">
                      <p className="wdt-heading mb-3">Your Details Have Been Submitted</p>
                      <h2 className="text-[30px] font-semibold leading-[1.2] md:text-[38px]">Choose a Time That Works for You</h2>
                      <p className="mt-4 max-w-[780px] text-[16px] leading-[1.7] text-[#6b6b6b]">Select a convenient time below to complete your booking with our Virtual CFO.</p>
                    </div>
                    <div className="relative min-h-[760px] bg-white md:min-h-[800px]">
                      {!calendlyLoaded && <div className="absolute inset-0 z-20 flex items-start justify-center bg-white pt-16 text-[15px] text-[#777]">Loading available times…</div>}
                      <iframe
                        src={bookingCalendlyUrl}
                        title="Schedule a quotation call with Mavens Advisor's CFO"
                        onLoad={() => setCalendlyLoaded(true)}
                        className="relative z-10 h-[760px] w-full border-0 bg-white md:h-[800px]"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function QuoteTabButton({ active, children, controls, icon, id, onClick, onKeyDown }: { active: boolean; children: ReactNode; controls: string; icon: ReactNode; id: string; onClick: () => void; onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void }) {
  return (
    <button
      type="button"
      role="tab"
      id={id}
      aria-selected={active}
      aria-controls={controls}
      tabIndex={active ? 0 : -1}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={`flex min-h-[72px] items-center gap-3 rounded-[20px] px-5 py-4 text-left text-[15px] font-semibold transition-all duration-300 md:px-7 md:text-[16px] ${active ? "bg-gradient-to-r from-[#0C7FFB] to-black text-white shadow-[0_12px_30px_rgba(12,127,251,0.18)]" : "bg-[#f3f5f4] text-[#555] hover:bg-[#e9edef] hover:text-black"}`}
    >
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${active ? "bg-white/15 text-white" : "bg-white text-[#0C7FFB]"}`}>{icon}</span>
      <span>{children}</span>
    </button>
  )
}

function FormSection({ number, title, description, children }: { number: string; title: string; description?: string; children: ReactNode }) {
  return (
    <section className="rounded-[28px] bg-white p-[30px] md:p-[45px]">
      <div className="mb-7 flex items-start gap-4">
        <span className="shrink-0 rounded-[10px] bg-primary-gradient px-3 py-2 font-semibold">{number}</span>
        <div>
          <h2 className="text-[28px] font-semibold leading-[1.2]">{title}</h2>
          {description && <p className="mt-2 text-[14px] leading-[1.6] text-[#6b6b6b]">{description}</p>}
        </div>
      </div>
      {children}
    </section>
  )
}

function TextField({ name, label, type = "text", placeholder, helper, required, className = "" }: { name: string; label: string; type?: string; placeholder?: string; helper?: string; required?: boolean; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[14px] font-semibold">{label}</span>
      <input name={name} type={type} placeholder={placeholder} required={required} className={inputClass} />
      {helper && <span className="mt-2 block text-[12px] leading-[1.5] text-[#929292]">{helper}</span>}
    </label>
  )
}

function SelectField({ name, label, options, placeholder = "Select", groupLabel, value, onChange, required, className = "" }: { name: string; label: string; options: readonly string[]; placeholder?: string; groupLabel?: string; value?: string; onChange?: (value: string) => void; required?: boolean; className?: string }) {
  const controlledProps = value !== undefined ? { value, onChange: (event: React.ChangeEvent<HTMLSelectElement>) => onChange?.(event.target.value) } : {}
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[14px] font-semibold">{label}</span>
      <select name={name} required={required} defaultValue={value === undefined ? "" : undefined} className={inputClass} {...controlledProps}>
        <option value="">{placeholder}</option>
        {groupLabel ? (
          <optgroup label={groupLabel}>
            {options.map((option) => <option key={option} value={option}>{option}</option>)}
          </optgroup>
        ) : options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  )
}

function TextAreaField({ name, label, placeholder, helper, required, className = "" }: { name: string; label: string; placeholder?: string; helper?: string; required?: boolean; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[14px] font-semibold">{label}</span>
      <textarea name={name} placeholder={placeholder} required={required} className={`${inputClass} min-h-[130px] resize-y`} />
      {helper && <span className="mt-2 block text-[12px] leading-[1.5] text-[#929292]">{helper}</span>}
    </label>
  )
}

function ChoicePills({ name, options, required }: { name: string; options: readonly string[]; required?: boolean }) {
  const [selectedOption, setSelectedOption] = useState("")

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option, index) => (
        <label
          key={option}
          className={`relative inline-flex min-h-[46px] cursor-pointer items-center justify-center rounded-full border px-5 py-3 text-[14px] font-semibold transition-all duration-300 ${
            selectedOption === option
              ? "border-transparent bg-primary-gradient text-white"
              : "border-black/10 bg-[#f3f5f4] text-black hover:border-[#0C7FFB]/30"
          }`}
        >
          <input
            className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
            type="radio"
            name={name}
            value={option}
            checked={selectedOption === option}
            onChange={() => setSelectedOption(option)}
            required={required && index === 0}
          />
          <span className="pointer-events-none">{option}</span>
        </label>
      ))}
    </div>
  )
}

function CheckOption({ name, value, label, checked, onChange }: { name: string; value: string; label: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <label className={`flex cursor-pointer items-start gap-3 rounded-[14px] border px-4 py-3 text-[14px] transition-all duration-300 ${checked ? "border-[#0C7FFB]/40 bg-blue-50" : "border-black/5 bg-white"}`}>
      <input type="checkbox" name={name} value={value} checked={checked} onChange={(event) => onChange(event.target.checked)} className="mt-1 accent-[#0C7FFB]" />
      <span>{label}</span>
    </label>
  )
}

function ConditionalField({ children }: { children: ReactNode }) {
  return <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>{children}</motion.div>
}

function ConditionalPanel({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <motion.section initial={{ opacity: 0, y: -16, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} exit={{ opacity: 0, y: -10, height: 0 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
      <div className="rounded-[22px] border border-black/5 bg-[#f7f8f6] p-5 md:p-7 mt-5">
        <h3 className="text-[22px] font-semibold">{title}</h3>
        <p className="mt-2 mb-5 text-[14px] leading-[1.6] text-[#6b6b6b]">{description}</p>
        {children}
      </div>
    </motion.section>
  )
}

function QuestionGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{children}</div>
}

function QuestionGroup({ children }: { children: ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: -10, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} exit={{ opacity: 0, y: -8, height: 0 }} transition={{ duration: 0.28 }} className="overflow-hidden">
      <div className="grid grid-cols-1 gap-4 rounded-[18px] border border-black/5 bg-white p-4 md:grid-cols-2 md:p-5">{children}</div>
    </motion.div>
  )
}
