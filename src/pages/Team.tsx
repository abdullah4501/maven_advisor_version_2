import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import { usePageMeta } from "@/hooks/usePageMeta"
import team1 from "@/assets/adeel-shaikh.jpg"
import team2 from "@/assets/nabeel-shaikh.jpg"
import team3 from "@/assets/zaryab-ul-hasan.jpg"
import team4 from "@/assets/rehan-kazmi.jpg"
import heroImage from "@/assets/team-banner.jpg"

const leaders = [
  { name: "Adeel Shaikh", title: "CEO and Founder", image: team1, bio: "Adeel is an ACCA-qualified finance professional with a BSc in Accounting and Finance and more than 10 years of experience across audit, financial management, consulting and Virtual CFO services. His background includes Grant Thornton UK and senior finance roles supporting businesses with reporting, compliance, forecasting and strategic financial decisions." },
  { name: "Nabeel Shaikh", title: "Strategic Director", image: team2, bio: "Nabeel contributes senior strategic finance, investment and entrepreneurial perspective to Mavens Advisor. His role focuses on long-term direction, commercial development, strategic relationships and the evolution of services around changing client needs." },
  { name: "Zaryab ul Hasan Khan", title: "Director of Operations", image: team3, bio: "Zaryab leads operational coordination and service delivery across the team. His focus is to turn client commitments into organised workflows, maintain communication, monitor responsibilities and support a consistent standard of execution." },
  { name: "Syed Rehan Kazim Kazmi", title: "Non-Executive Director", image: team4, bio: "Rehan is a Fellow Chartered Accountant of ICAP and an Associate Chartered Accountant of ICAEW. He brings senior finance leadership, governance, transformation and strategic oversight to the board, helping strengthen professional standards and long-term decision-making." },
]

export default function Team() {
  usePageMeta("Leadership Team | Mavens Advisor", "Meet the leadership team guiding Mavens Advisor’s Virtual CFO and Agentic AI Automation services.")
  return (
    <>
      <Header />
      <PageHero image={heroImage} eyebrow="Leadership Team" title="Leadership That Connects Strategy With Delivery" description="Our leadership team combines finance, operational management, strategic direction and governance to keep client service accountable and commercially relevant." primaryLabel="Connect With Mavens Advisor" primaryTo="/contact" />
      <main className="bg-[#f6f7f4] py-[80px] md:py-[120px]">
        <div className="container grid grid-cols-1 gap-7 md:grid-cols-2">
          {leaders.map((leader) => (
            <article key={leader.name} className="overflow-hidden rounded-[28px] bg-white lg:grid lg:grid-cols-[220px_1fr]">
              <img src={leader.image} alt={leader.name} className="h-[250px] w-full object-cover object-top lg:h-full" />
              <div className="p-[30px] md:p-[40px]">
                <p className="wdt-heading mb-3">{leader.title}</p>
                <h2 className="text-[30px] font-semibold">{leader.name}</h2>
                <p className="mt-5 text-[16px] leading-[1.75] text-[#6b6b6b]">{leader.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
