const DEFAULT_RECIPIENT = "adeelshaikh@mavensadvisor.com"

export const quoteFields = {
  fullName: "Full Name",
  workEmail: "Work Email",
  companyName: "Company Name",
  country: "Country",
  otherCountry: "Other Country",
  industry: "Industry",
  accountingSoftware: "Accounting Software",
  otherSoftware: "Other Accounting Software",
  entityType: "Legal / Entity Type",
  otherEntity: "Other Entity Type",
  businessNature: "Nature of the Business",
  thirdPartySoftware: "Other Business Software / Platforms",
  engagement: "Engagement",
  selectedServices: "Selected Services",
  financeResponsibilities: "Finance Responsibilities",
  monthlyTransactions: "Average Monthly Transactions",
  bankAccounts: "Bank & Credit Card Accounts",
  bookkeepingStatus: "Bookkeeping Status",
  payrollEmployees: "Employees on Payroll",
  payrollFrequency: "Payroll Frequency",
  contractors: "Regular Contractors",
  contractorFrequency: "Contractor Payment Frequency",
  customerInvoices: "Average Customer Invoices Per Month",
  supplierBills: "Average Supplier Bills Per Month",
  receivablesVolume: "Outstanding Customer Accounts",
  reportingFrequency: "Preferred Reporting Frequency",
  reportingEntities: "Number of Business Entities",
  existingForecast: "Existing Budget or Forecast",
  vatRegistered: "VAT Registered",
  vatFrequency: "VAT Filing Frequency",
  ukEntities: "UK Companies Requiring Support",
  usTaxClassification: "US Tax Classification",
  otherUsTax: "Other US Tax Classification",
  usEntities: "US Entities Requiring Support",
  stateCompliance: "State Compliance",
  advisoryType: "Type of Advisory Support",
  advisoryScope: "Financial Advisory Scope",
  otherAdvisory: "Other Financial Advisory Requirement",
  setupStatus: "Current Finance Setup",
  additionalContext: "Additional Context",
}

export const bookingFields = {
  fullName: "Full Name",
  workEmail: "Work Email",
  companyName: "Company Name",
  phoneNumber: "Phone Number",
  discussion: "What They Would Like to Discuss",
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export function normaliseValue(value) {
  if (Array.isArray(value)) return value.map(String).filter(Boolean).join(", ")
  return typeof value === "string" ? value.trim() : ""
}

export function validateContact(submission) {
  if (!submission || typeof submission !== "object" || Array.isArray(submission)) return null

  const fullName = normaliseValue(submission.fullName).slice(0, 160)
  const workEmail = normaliseValue(submission.workEmail).slice(0, 254)
  const companyName = normaliseValue(submission.companyName).slice(0, 200)

  if (!fullName || !companyName || !/^\S+@\S+\.\S+$/.test(workEmail)) return null
  return { fullName, workEmail, companyName }
}

export async function sendFormEmail({ submission, title, fields }) {
  if (!process.env.RESEND_API_KEY || !process.env.QUOTE_EMAIL_FROM) {
    const error = new Error("Email delivery is not configured")
    error.statusCode = 503
    throw error
  }

  const contact = validateContact(submission)
  if (!contact) {
    const error = new Error("Required contact information is missing")
    error.statusCode = 400
    throw error
  }

  const rows = Object.entries(fields)
    .map(([key, label]) => {
      const value = normaliseValue(submission[key])
      if (!value) return ""

      return `
        <tr>
          <th style="width:32%;padding:12px 16px;border-bottom:1px solid #e5e7eb;text-align:left;vertical-align:top;color:#111827;font-size:14px;">${escapeHtml(label)}</th>
          <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#4b5563;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`
    })
    .join("")

  let emailResponse
  try {
    emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        "User-Agent": "MavensAdvisor-Website/1.0",
      },
      body: JSON.stringify({
        from: process.env.QUOTE_EMAIL_FROM,
        to: [process.env.QUOTE_EMAIL_TO || DEFAULT_RECIPIENT],
        reply_to: contact.workEmail,
        subject: `${title} from ${contact.fullName} — ${contact.companyName}`,
        html: `
          <div style="margin:0;background:#f4f6f8;padding:32px;font-family:Arial,sans-serif;">
            <div style="margin:0 auto;max-width:760px;overflow:hidden;border-radius:18px;background:#ffffff;">
              <div style="background:#07121f;padding:28px 32px;color:#ffffff;">
                <p style="margin:0 0 8px;color:#65aefc;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">Mavens Advisor Website</p>
                <h1 style="margin:0;font-size:26px;line-height:1.25;">${title}</h1>
              </div>
              <table role="presentation" style="width:100%;border-collapse:collapse;">${rows}</table>
            </div>
          </div>`,
      }),
    })
  } catch (cause) {
    const error = new Error("Email provider could not be reached", { cause })
    error.statusCode = 502
    throw error
  }

  if (!emailResponse.ok) {
    const providerError = await emailResponse.text()
    console.error("Resend rejected an email", emailResponse.status, providerError)
    const error = new Error("Email could not be delivered")
    error.statusCode = 502
    throw error
  }
}
