import { normaliseValue, quoteFields, sendFormEmail, validateContact } from "../lib/email.js"

export async function submitQuote(request, response) {
  const submission = request.body

  if (normaliseValue(submission?.website)) return response.status(200).json({ delivered: true })
  if (!validateContact(submission)) return response.status(400).json({ error: "Required contact information is missing" })
  if (!normaliseValue(submission.selectedServices)) return response.status(400).json({ error: "At least one service is required" })

  try {
    await sendFormEmail({ submission, title: "New Tailored Quote Request", fields: quoteFields })
    return response.status(200).json({ delivered: true })
  } catch (error) {
    console.error("Quotation submission failed", error)
    return response.status(error.statusCode || 500).json({ error: error.message || "Quotation request could not be sent" })
  }
}
