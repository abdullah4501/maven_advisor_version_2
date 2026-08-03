import { Quote } from "lucide-react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import { usePageMeta } from "@/hooks/usePageMeta"
import heroImage from "@/assets/service6.jpg"

const reviews = [
  { name: "Fabian Petrina", company: "Rapid Physique, LLC", text: "We have been working with the Mavens Advisor team for almost two years, and they have been a huge asset to our e-commerce brands. They are reliable, detail-oriented and consistently deliver everything on time without needing to be micromanaged. One of the things we appreciate most is how autonomously they work. They take full ownership of the bookkeeping process and make sure everything is accurate and up to date. It has been a massive weight off our shoulders knowing the financial side of the business is in good hands. We highly recommend them to anyone looking for a dependable and professional accounting team." },
  { name: "Jason Lopes", company: "Exact Exteriors LLC", text: "We have been working with the Mavens Advisor team since February, and their services have made a noticeable difference in how we track and understand our company’s financial health. Their consistent daily and weekly updates have been invaluable, especially for our profit and loss statements and balance sheet reports. Having such clear and timely insights has been a great benefit to our business, and we truly appreciate their professionalism and attention to detail." },
  { name: "Matthew B", company: "Gibraltar", text: "The Mavens Advisor team has been instrumental in structuring our company’s bookkeeping systems. Their reports are always delivered on time, meticulously accurate and easy to work with. They are professional, highly conscientious and consistently go the extra mile. They have become far more than accountants. They are a valued working partner we trust. We are very pleased to have their ongoing support." },
  { name: "Marwa", company: "Mojo Solutions and Services MSS LLC", text: "The Mavens Advisor team has supported us for over three years, and their service has been excellent. They manage payroll, taxes, contracts, audits and client follow-ups with professionalism and reliability. Their availability during US business hours makes communication easy and efficient. We are 100% satisfied and highly recommend them." },
  { name: "Seth Cooper", company: "Closets by Design", text: "Partnering with Mavens Advisor has been a game-changer for our business. Their consistent support, quick responsiveness and deep financial knowledge have been instrumental in helping us stay on top of our books and maintain excellent financial health. We highly recommend their services." },
]

export default function ClientReviews() {
  usePageMeta("Client Reviews | Mavens Advisor", "Read how businesses describe Mavens Advisor’s bookkeeping, reporting, tax support, responsiveness and ownership.")
  return (
    <>
      <Header />
      <PageHero image={heroImage} eyebrow="Client Proof" title="Trusted to Take Ownership of the Financial Work" description="Our clients value accurate work, consistent communication and the confidence that important financial responsibilities are being actively managed." primaryLabel="Get My Tailored Quote" primaryTo="/get-a-quote" />
      <main className="bg-[#f6f7f4] py-[80px] md:py-[120px]">
        <div className="container grid grid-cols-1 gap-7 md:grid-cols-2">
          {reviews.map((review, index) => (
            <article key={review.name} className={`rounded-[28px] p-[35px] md:p-[45px] ${index === 0 ? "bg-black text-white md:col-span-2" : "bg-white"}`}>
              <Quote className={index === 0 ? "text-white" : "text-[#0C7FFE]"} size={40} />
              <p className={`mt-6 text-[17px] leading-[1.8] ${index === 0 ? "text-white/80" : "text-[#606060]"}`}>{review.text}</p>
              <div className="mt-7">
                <h2 className="text-[21px] font-semibold">{review.name}</h2>
                <p className={index === 0 ? "text-white/55" : "text-[#929292]"}>{review.company}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
