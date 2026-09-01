import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHero from "@/components/PageHero"
import { usePageMeta } from "@/hooks/usePageMeta"
import heroImage from "@/assets/service-flex-banner-img-01.jpg"

const policySections = [
  {
    title: "1. Who We Are",
    content: [
      "Mavens Advisor provides finance system setup, finance operations, reporting and forecasting, UK and US tax and compliance support, strategic financial advisory, Virtual CFO services, and controlled Agentic AI Automation for accounting, tax and compliance workflows.",
      "For the personal information described in this policy, Mavens Advisor is responsible for deciding why and how it is used unless we are processing information solely on a client’s documented instructions. In that situation, the client remains responsible for the information and we act as its service provider or processor.",
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      "We collect information that you provide when you contact us, request a quotation, complete an automation assessment, become a client, communicate with our team, or otherwise use our website and services.",
      "We may also receive relevant information from your colleagues or authorised representatives, professional advisers, service providers, accounting or workflow platforms you ask us to access, and public sources such as corporate or regulatory registers.",
      "Some information is required so we can respond to an enquiry, prepare an accurate quotation, meet legal or contractual requirements, or deliver an agreed service. If required information is not provided, we may be unable to proceed with the request or engagement.",
    ],
    bullets: [
      "Identity and contact details, such as your name, role, business email address, telephone number and preferred contact method",
      "Business details, including company name, website, location, industry, entity type, number of entities and operating requirements",
      "Service and quotation information, such as transaction volumes, current systems, finance responsibilities, deadlines, reporting needs and the outcomes you want to achieve",
      "Financial, accounting, payroll, tax and compliance information provided during an agreed engagement",
      "Automation-assessment information, including workflow steps, systems, users, approvals, exceptions, volumes, costs and control requirements",
      "Communications, meeting notes, instructions, feedback and records of decisions or approvals",
      "Basic technical information generated when you use the website, such as IP address, browser type, device information and page activity where collected by our hosting, security or analytics tools",
    ],
  },
  {
    title: "3. How We Use Personal Information",
    content: ["We use personal information only where it is relevant to operating our business, responding to you or delivering an agreed service."],
    bullets: [
      "Responding to enquiries and discussing your requirements",
      "Assessing quotation requests and preparing a tailored scope and fee",
      "Onboarding clients and managing our working relationship",
      "Delivering finance, tax, compliance, advisory and automation services",
      "Requesting information, coordinating reviews and maintaining records of instructions, approvals and completed work",
      "Operating, securing, maintaining and improving our website, systems and service processes",
      "Meeting legal, regulatory, tax, professional, insurance and record-keeping obligations",
      "Preventing fraud, misuse, security incidents and unauthorised access",
      "Sending relevant service communications and, where permitted, information about services that may be useful to you",
    ],
  },
  {
    title: "4. Our Legal Reasons for Using Information",
    content: [
      "Depending on the circumstances and the law that applies, we process information because it is necessary to take steps at your request before entering a contract, to perform our contract with you, to comply with a legal obligation, or for our legitimate interests in operating and protecting our business and providing professional services. Where consent is the appropriate basis, you may withdraw it at any time without affecting processing that already took place lawfully.",
    ],
  },
  {
    title: "5. Client Financial and Professional Information",
    content: [
      "The nature of our work may require access to confidential business, financial, employee, contractor, customer, supplier, tax or compliance information. We use that information only for the agreed engagement, related administration, quality control, security, and legal or professional obligations.",
      "Clients should provide personal information only where they are authorised to do so and should avoid sending information that is not required for the agreed purpose. The engagement scope and any applicable data-processing terms provide further detail about responsibilities for client-controlled information.",
    ],
  },
  {
    title: "6. Agentic AI Automation and Human Oversight",
    content: [
      "When assessing or implementing an automation workflow, we consider the information involved, permitted systems, user access, approvals, exception handling, audit trails and retention requirements. We aim to use the minimum information reasonably required for the workflow.",
      "Automation may help collect, classify, compare, route or prepare information. It is not intended to remove human responsibility for professional judgement, tax positions, legal obligations, filing approvals or other decisions that require accountable review. Specific data-handling and system arrangements are agreed before implementation.",
    ],
  },
  {
    title: "7. When We Share Information",
    content: ["We do not sell personal information. We may share it only when reasonably necessary with:"],
    bullets: [
      "Team members and approved contractors who need it to perform their responsibilities",
      "Cloud hosting, communications, document-management, accounting, security and other technology providers supporting our operations",
      "Professional advisers, insurers, auditors or specialist service providers",
      "Tax authorities, regulators, courts, law-enforcement bodies or other public authorities where disclosure is required or legally permitted",
      "A prospective buyer, investor or successor if our business is reorganised, provided appropriate confidentiality protections are used",
    ],
  },
  {
    title: "8. International Data Transfers",
    content: [
      "Mavens Advisor serves businesses in the United Kingdom and the United States and may use service providers operating in more than one country. As a result, information may be processed outside the country where it was collected. Where data-protection law requires it, we use an appropriate transfer mechanism or other safeguards designed to protect the information.",
    ],
  },
  {
    title: "9. How Long We Keep Information",
    content: [
      "We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, including providing services, responding to enquiries, maintaining business and professional records, resolving disputes, and meeting legal, tax, regulatory or insurance requirements. Retention periods vary according to the type of information, the engagement and the applicable jurisdiction. Information is securely deleted, anonymised or placed beyond routine use when it is no longer required.",
    ],
  },
  {
    title: "10. Security",
    content: [
      "We use administrative, technical and organisational measures intended to protect information against accidental loss, misuse, unauthorised access, alteration or disclosure. These measures may include access restrictions, approved systems, authentication controls, backups, audit records and team confidentiality requirements. No internet transmission or storage system can be guaranteed to be completely secure, so please contact us promptly if you believe information has been exposed or sent to us incorrectly.",
    ],
  },
  {
    title: "11. Cookies and Website Data",
    content: [
      "Our website and its hosting services may use cookies or similar technologies needed for security, performance and core functionality. If optional analytics or marketing technologies are introduced, we will provide any notice or consent choices required by applicable law. You can also manage cookies through your browser settings, although blocking necessary technologies may affect website operation.",
    ],
  },
  {
    title: "12. Your Privacy Rights",
    content: [
      "Depending on where you live and subject to legal exceptions, you may have rights to request access to personal information, correct inaccurate information, request deletion or restriction, object to certain processing, receive portable information, or withdraw consent. You may also have the right to complain to the relevant privacy or data-protection authority.",
      "Your right to object: where we rely on legitimate interests, you may object to that use based on your particular circumstances. You may object to direct marketing at any time.",
      "If the California Consumer Privacy Act applies to our handling of your information, applicable rights may include the right to know, correct or delete personal information, and to receive equal service when exercising those rights. Mavens Advisor does not sell personal information or share it for cross-context behavioural advertising.",
      "To make a request, email us using the address below. We may need to verify your identity and clarify the information involved before completing the request. We will not discriminate against you for exercising an applicable privacy right.",
    ],
  },
  {
    title: "13. Marketing Communications",
    content: [
      "You may ask us to stop sending marketing communications at any time by using the unsubscribe option provided or contacting us directly. We may still send essential messages about an enquiry, quotation, engagement, security matter or legal obligation.",
    ],
  },
  {
    title: "14. Children’s Information",
    content: [
      "Our website and services are intended for businesses and are not directed to children. We do not knowingly collect personal information directly from children through this website. If you believe a child has provided information to us, please contact us so we can review and delete it where appropriate.",
    ],
  },
  {
    title: "15. Changes to This Policy",
    content: [
      "We may update this policy when our services, systems or legal responsibilities change. The latest version will be published on this page with an updated effective date. Material changes may also be communicated directly where appropriate.",
    ],
  },
]

export default function PrivacyPolicy() {
  usePageMeta(
    "Privacy Policy | Mavens Advisor",
    "Learn how Mavens Advisor collects, uses, protects and shares personal information across its finance, Virtual CFO and Agentic AI Automation services.",
  )

  return (
    <>
      <Header />
      <PageHero
        image={heroImage}
        eyebrow="Privacy Policy"
        title="How We Handle and Protect Personal Information"
        description="This policy explains what information Mavens Advisor collects, why we use it, when it may be shared and the choices available to you."
      />

      <main className="bg-[#f6f7f4] py-[80px] md:py-[120px]">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-[280px_minmax(0,900px)] lg:justify-between">
          <aside className="lg:sticky lg:top-[110px] lg:self-start">
            <p className="wdt-heading">Policy Information</p>
            <div className="mt-5 border-l border-black/15 pl-5 text-[15px] leading-[1.8] text-[#6b6b6b]">
              <p><strong className="block text-black">Effective date</strong>19 August 2026</p>
              <p className="mt-5"><strong className="block text-black">Applies to</strong>Website visitors, prospects, clients and business contacts</p>
            </div>
          </aside>

          <div className="space-y-12">
            <section className="border-b border-black/15 pb-12">
              <p className="text-[18px] leading-[1.8] text-[#505050]">We understand that financial and operational information requires careful handling. This policy is written to explain our approach in straightforward language. It applies to information collected through this website and during our business relationships, but it does not replace any more specific confidentiality or data-processing terms agreed with a client.</p>
            </section>

            {policySections.map((section) => (
              <section key={section.title} className="border-b border-black/15 pb-12 last:border-0 last:pb-0">
                <h2 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.025em] md:text-[34px]">{section.title}</h2>
                <div className="mt-5 space-y-4 text-[17px] leading-[1.8] text-[#6b6b6b]">
                  {section.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && (
                    <ul className="space-y-3 pl-5">
                      {section.bullets.map((item) => <li key={item} className="list-disc pl-2 marker:text-[#0C7FFE]">{item}</li>)}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            <section className="rounded-[26px] bg-black p-[32px] text-white md:p-[48px]">
              <p className="wdt-heading text-[#78b5ff]">Privacy Questions</p>
              <h2 className="mt-4 text-[30px] font-semibold md:text-[38px]">Contact Mavens Advisor</h2>
              <p className="mt-4 max-w-[680px] text-[17px] leading-[1.75] text-white/70">For questions, privacy requests or concerns about how your information is handled, email us at <a href="mailto:adeelshaikh@mavensadvisor.com" className="font-semibold text-white underline decoration-[#0C7FFE] underline-offset-4">adeelshaikh@mavensadvisor.com</a>.</p>
              <p className="mt-4 max-w-[680px] text-[15px] leading-[1.75] text-white/60">If you are in the United Kingdom, you may also raise a concern with the <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer" className="font-semibold text-white underline decoration-[#0C7FFE] underline-offset-4">Information Commissioner’s Office</a>. People in other locations may contact their local privacy or data-protection authority.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
