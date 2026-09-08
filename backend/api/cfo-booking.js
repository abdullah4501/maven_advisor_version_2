import { bookingFields, normaliseValue, sendFormEmail, validateContact } from "../lib/email.js"

export async function submitCfoBooking(request, response) {
  const submission = request.body

  if (normaliseValue(submission?.website)) return response.status(200).json({ delivered: true })
  if (!validateContact(submission)) return response.status(400).json({ error: "Required contact information is missing" })
  if (!normaliseValue(submission.discussion)) return response.status(400).json({ error: "Discussion details are required" })

  try {
    await sendFormEmail({ submission, title: "New CFO Call Request", fields: bookingFields })
    return response.status(200).json({ delivered: true })
  } catch (error) {
    console.error("CFO booking submission failed", error)
    return response.status(error.statusCode || 500).json({ error: error.message || "Booking request could not be sent" })
  }
}
