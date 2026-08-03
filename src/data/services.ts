import image1 from "@/assets/service1.jpg"
import image2 from "@/assets/service2.jpg"
import image3 from "@/assets/service3.jpg"
import image4 from "@/assets/service4.jpg"
import image5 from "@/assets/service5.jpg"
import image6 from "@/assets/service6.jpg"
import image7 from "@/assets/features_main.jpg"
import image8 from "@/assets/feature_main2.jpg"

export type ServiceSection = {
  heading: string
  body?: string[]
  bullets?: string[]
}

export type ServicePageData = {
  title: string
  shortTitle: string
  eyebrow: string
  path: string
  summary: string
  value: string
  image: string
  metaTitle: string
  metaDescription: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel?: string
  secondaryTo?: string
  sections: ServiceSection[]
  finalHeading: string
  finalCopy?: string
}

export const canonicalServices = [
  { title: "Finance System Setup", path: "/virtual-cfo-services/finance-system-setup", value: "Build a reliable, reporting-ready and tax-ready financial foundation.", image: image1 },
  { title: "Finance Operations", path: "/virtual-cfo-services/finance-operations", value: "Keep recurring financial work current, controlled and clearly owned.", image: image2 },
  { title: "Financial Reporting and Forecasting", path: "/virtual-cfo-services/reporting-and-forecasting", value: "See profit, cash, margins and future pressure clearly enough to act.", image: image3 },
  { title: "UK Tax, HMRC and Companies House Compliance", path: "/virtual-cfo-services/uk-tax-and-compliance", value: "Stay tax-ready, coordinate filings and identify legitimate tax-efficiency opportunities.", image: image4 },
  { title: "US Tax, IRS and State Compliance", path: "/virtual-cfo-services/us-tax-and-compliance", value: "Coordinate federal and state filings using current records and professional review.", image: image5 },
  { title: "Strategic Financial Advisory", path: "/virtual-cfo-services/strategic-financial-advisory", value: "Use CFO-level analysis to improve cash, profitability and major decisions.", image: image6 },
  { title: "Virtual CFO", path: "/virtual-cfo-services", value: "Combine the finance capabilities required through one accountable team and predictable monthly fee.", image: image7 },
  { title: "Agentic AI Automation", path: "/agentic-ai-automation", value: "Reduce repetitive accounting, tax and compliance administration with controlled automation.", image: image8 },
]

export const servicePages: Record<string, ServicePageData> = {
  "finance-system-setup": {
    title: "Build the Finance System Correctly Before the Numbers Become a Problem",
    shortTitle: "Finance System Setup",
    eyebrow: "Finance System Setup",
    path: "/virtual-cfo-services/finance-system-setup",
    summary: "Create a dependable accounting foundation with the right chart of accounts, system structure, reporting dimensions, opening balances, workflows and controls for the way your business actually operates.",
    value: canonicalServices[0].value,
    image: image1,
    metaTitle: "Finance System Setup & Chart of Accounts | Mavens Advisor",
    metaDescription: "Build a reliable accounting foundation with chart-of-accounts design, system configuration, opening-balance review and reporting-ready workflows.",
    primaryLabel: "Build My Finance Foundation",
    primaryTo: "/get-a-quote",
    sections: [
      { heading: "Better Finance Outcomes Begin With Better Foundations", body: ["Poor system design creates recurring problems: inconsistent transaction coding, unreliable reports, slow month-end closes, avoidable manual work and records that are difficult to use for tax or decisions. Mavens Advisor designs or restructures the finance system so routine operations, reporting and compliance can work from one reliable foundation."] },
      { heading: "What the Setup May Include", bullets: ["Chart of accounts design, setup or restructuring", "Accounting software setup and configuration", "Opening-balance and data-integrity review", "Customer, supplier, item and other master-data structure", "Invoicing, billing, accounts payable and accounts receivable workflows", "Bank, payment and transaction-feed configuration", "Reporting dimensions, departments, classes, locations or cost centres", "Document, approval and record-retention controls", "Payroll and system-integration requirements where scoped", "Month-end close calendar and responsibility mapping"] },
      { heading: "What a Properly Designed Finance System Gives You", bullets: ["More reliable books and fewer recurring corrections", "A faster, more controlled month-end close", "Reporting structured around how management makes decisions", "Cleaner information for tax and compliance work", "Fewer manual workarounds and disconnected spreadsheets", "A foundation that can scale with new activity, teams or entities"] },
    ],
    finalHeading: "Build My Finance Foundation",
  },
  "finance-operations": {
    title: "Stop Chasing the Finance Work. Give It Clear Ownership.",
    shortTitle: "Finance Operations",
    eyebrow: "Finance Operations",
    path: "/virtual-cfo-services/finance-operations",
    summary: "Keep your books current, invoices moving, receivables followed up and financial obligations organised without spending founder time checking whether routine work was completed.",
    value: canonicalServices[1].value,
    image: image2,
    metaTitle: "Outsourced Finance Operations | Mavens Advisor",
    metaDescription: "Keep books current, improve billing and collection discipline, and give recurring finance work clear ownership.",
    primaryLabel: "Take Control of My Finance Operations",
    primaryTo: "/get-a-quote",
    sections: [
      { heading: "Reliable Operations Protect Cash, Time and Decision Quality", body: ["When bookkeeping, invoicing, payroll or follow-ups depend on spare time, cash collection slows, obligations become harder to plan and reports lose their value. We create a dependable operating rhythm so records remain current, responsibilities are clear and unresolved items are actively followed through."] },
      { heading: "Monthly Bookkeeping", body: ["Maintain accurate and current accounting records through consistent transaction processing, reconciliations, supporting-document review and issue resolution."] },
      { heading: "Payroll and Contractor Payments", body: ["Coordinate payroll and recurring contractor payments using the agreed schedule, source information and approval process."] },
      { heading: "Invoicing and Billing", body: ["Prepare and issue invoices or billing information according to the agreed commercial process, helping the business maintain a consistent revenue cycle."] },
      { heading: "Accounts Payable and Receivable", body: ["Organise supplier obligations, due dates, approvals and supporting records so payments can be planned and controlled.", "Monitor outstanding customer balances, maintain follow-up records and support a consistent collection process that protects working capital and client relationships."] },
      { heading: "What Better Finance Operations Give You", bullets: ["Books that are ready for reporting, tax work and important decisions", "Faster and more consistent invoicing and receivable follow-up", "Better visibility over supplier, payroll and contractor commitments", "Fewer unresolved transactions, missing records and deadline surprises", "Clear ownership across recurring finance activities", "More owner time for customers, strategy and growth"] },
    ],
    finalHeading: "Take Control of My Finance Operations",
  },
  "reporting-and-forecasting": {
    title: "Turn Up-to-Date Numbers Into Better Business Decisions",
    shortTitle: "Financial Reporting and Forecasting",
    eyebrow: "Financial Reporting and Forecasting",
    path: "/virtual-cfo-services/reporting-and-forecasting",
    summary: "Reliable management reporting should do more than describe the past. It should show what is making money, where cash is being consumed, where pressure is building and which decisions require attention.",
    value: canonicalServices[2].value,
    image: image3,
    metaTitle: "Financial Reporting and Forecasting | Mavens Advisor",
    metaDescription: "Understand profit, margins, costs and cash pressure through timely reporting, budgets, forecasts and financial analysis.",
    primaryLabel: "Improve My Financial Reporting",
    primaryTo: "/get-a-quote",
    sections: [
      { heading: "Reporting Designed for the Person Making the Decision", body: ["Mavens Advisor translates accounting data into clear management information. The reporting package is agreed around the business, allowing owners and leaders to focus on the numbers that influence cash, profitability and future plans."] },
      { heading: "Core Reporting", bullets: ["Monthly profit and loss reporting", "Balance sheet reporting", "Cash-flow reporting", "Budget versus actual analysis where applicable", "Financial performance commentary"] },
      { heading: "Budgeting and Forecasting", bullets: ["Monthly budgeting", "Rolling cash-flow forecasts", "Scenario planning", "Future funding and liquidity visibility", "Forecast updates when material assumptions change"] },
      { heading: "Performance Analysis", bullets: ["Revenue and margin trends", "Cost movement", "Working-capital pressure", "Cash conversion", "Performance against plan", "Issues requiring management attention"] },
      { heading: "What You Gain", bullets: ["Know which products, services or activities are supporting profit", "Understand cost and margin movement before it becomes embedded", "See future cash requirements and funding pressure earlier", "Compare performance with the plan and investigate material variances", "Make decisions about pricing, hiring, spending and growth with greater confidence"] },
    ],
    finalHeading: "Improve My Financial Reporting",
  },
  "uk-tax-and-compliance": {
    title: "Stay Compliant and Avoid Paying More Tax Than Legally Required",
    shortTitle: "UK Tax, HMRC and Companies House Compliance",
    eyebrow: "UK Tax and Compliance",
    path: "/virtual-cfo-services/uk-tax-and-compliance",
    summary: "Maintain tax-ready records, coordinate VAT, HMRC and Companies House requirements, and identify legitimate deductions, reliefs, credits or planning opportunities relevant to your business.",
    value: canonicalServices[3].value,
    image: image4,
    metaTitle: "UK Tax, HMRC & Companies House Compliance | Mavens Advisor",
    metaDescription: "Keep records tax-ready, identify legitimate tax-saving opportunities and coordinate UK filing requirements through one finance team.",
    primaryLabel: "Review My UK Tax and Finance Setup",
    primaryTo: "/get-a-quote",
    sections: [
      { heading: "Tax Efficiency Starts Before the Filing Deadline", body: ["A tax return can only reflect the information available when it is prepared. Mavens Advisor keeps the underlying books organised throughout the year so eligible costs and relevant transactions are less likely to be overlooked and potential issues can be identified before the deadline.", "The objective is to help the business pay what it legally owes, claim what it is legitimately entitled to and reduce avoidable penalties or tax leakage. Any tax-saving opportunity remains subject to eligibility, jurisdiction and professional review."] },
      { heading: "Service Coverage", bullets: ["VAT filing support", "HMRC filing support for companies within the agreed scope", "Companies House filing support", "Review of records for legitimate deductions, reliefs, credits or planning opportunities where applicable", "Preparation and coordination of supporting accounting records", "Deadline monitoring and information requests", "Alignment between bookkeeping records and filing requirements", "Support in resolving missing information before submission"] },
      { heading: "Why Businesses Use One Coordinated Team", bullets: ["Tax records remain current rather than being reconstructed at the deadline", "Eligible items and possible tax-planning questions can be raised earlier", "The bookkeeping and filing process use the same underlying records", "Responsibility is easier to understand and information requests are coordinated", "The finance team can identify issues before they become urgent or expensive"] },
    ],
    finalHeading: "Review My UK Tax and Finance Setup",
  },
  "us-tax-and-compliance": {
    title: "Keep Your Books Tax-Ready and Avoid Paying More Than Legally Required",
    shortTitle: "US Tax, IRS and State Compliance",
    eyebrow: "US Tax and Compliance",
    path: "/virtual-cfo-services/us-tax-and-compliance",
    summary: "Coordinate bookkeeping, management reporting, IRS filings and state tax filings while identifying eligible deductions, credits and planning opportunities relevant to your company.",
    value: canonicalServices[4].value,
    image: image5,
    metaTitle: "US Tax, IRS & State Compliance | Mavens Advisor",
    metaDescription: "Keep books tax-ready, identify legitimate tax-saving opportunities and coordinate IRS and state tax filings through one team.",
    primaryLabel: "Review My US Tax and Finance Setup",
    primaryTo: "/get-a-quote",
    sections: [
      { heading: "Tax Savings Should Not Depend on a Last-Minute Search for Records", body: ["Tax compliance and tax efficiency both improve when the underlying books remain current throughout the year. Our approach connects bookkeeping, financial review and filing preparation so eligible items are less likely to be missed and questions can be resolved before they become deadline problems.", "The objective is to help the company pay what it legally owes, claim what it is legitimately entitled to and avoid preventable penalties or tax leakage. Any tax-saving opportunity remains subject to eligibility, jurisdiction and professional review."] },
      { heading: "Service Coverage", bullets: ["Bookkeeping and account reconciliation", "Preparation of financial information required for business tax filings", "IRS filings for US-based companies", "State tax filings for US-based companies", "Review of records for eligible deductions, credits or planning opportunities where applicable", "Coordination of applicable filing calendars", "Support for multi-state requirements within the agreed scope", "Resolution of bookkeeping issues affecting the tax return", "Communication of required records and approvals"] },
      { heading: "Who This Service Is Designed For", bullets: ["US companies that want bookkeeping and tax filing coordinated by one team", "Companies operating across more than one state", "Businesses that want eligible deductions and credits considered using current records", "Businesses that need decision-ready books before lenders, investors or tax deadlines", "Founders who want clearer ownership and fewer last-minute filing surprises"] },
    ],
    finalHeading: "Review My US Tax and Finance Setup",
  },
  "strategic-financial-advisory": {
    title: "Know Which Decisions Will Protect Cash and Improve Profit",
    shortTitle: "Strategic Financial Advisory",
    eyebrow: "Strategic Financial Advisory",
    path: "/virtual-cfo-services/strategic-financial-advisory",
    summary: "Get CFO-level interpretation grounded in the same books, reporting process and commercial realities that shape your company every day.",
    value: canonicalServices[5].value,
    image: image6,
    metaTitle: "Strategic Financial Advisory for Growing Businesses | Mavens Advisor",
    metaDescription: "Protect cash, improve profitability and make better growth decisions through CFO-level financial guidance.",
    primaryLabel: "Speak With a Virtual CFO",
    primaryTo: "/contact",
    sections: [
      { heading: "From Reporting to Action", body: ["Mavens Advisor helps business owners interpret financial performance, test assumptions and understand the cash, tax and profitability implications of important decisions. The objective is not more reporting. It is better action supported by reliable numbers."], bullets: ["Budget development and review", "Cash-flow forecasting", "Scenario analysis", "Financial performance review", "Margin and cost analysis", "Funding and liquidity planning", "Financial information for lenders and investors", "Management-reporting structure refinement after the finance-system foundation is established", "Decision support for growth, hiring and investment"] },
    ],
    finalHeading: "Speak With a Virtual CFO",
  },
  "virtual-cfo": {
    title: "More Than Bookkeeping. A Complete Finance Function Built to Protect Your Profit.",
    shortTitle: "Virtual CFO",
    eyebrow: "Expert-led Virtual CFO Services",
    path: "/virtual-cfo-services",
    summary: "Get bookkeeping, reporting, tax compliance and CFO-level financial guidance through one accountable team for a fixed monthly fee, without the cost and complexity of building a complete finance department in-house.",
    value: canonicalServices[6].value,
    image: image7,
    metaTitle: "Virtual CFO Services for UK & US Businesses | Mavens Advisor",
    metaDescription: "Get bookkeeping, reporting, tax support and CFO guidance through one accountable team for a predictable fixed monthly fee.",
    primaryLabel: "Get My Tailored Quote",
    primaryTo: "/get-a-quote",
    secondaryLabel: "Speak With a Virtual CFO",
    secondaryTo: "/contact",
    sections: [
      { heading: "The Value Goes Far Beyond Recording Transactions", body: ["A bookkeeper records what happened. A complete Virtual CFO function also helps you understand what it means, what it may cost in tax, where cash is under pressure and which decisions could improve the financial position.", "Mavens Advisor connects day-to-day finance operations with tax-ready records, management reporting, forecasting and strategic interpretation. The scope is built around your business activity, with clear responsibilities and a fixed monthly quotation confirmed after review."] },
      { heading: "The Outcomes Your Finance Function Should Deliver", bullets: ["Reduce avoidable tax leakage and identify legitimate deductions, credits and planning opportunities", "Understand profit, cost, margin and cash movement", "Anticipate cash-flow pressure and upcoming obligations", "Make decisions using timely financial information", "Free the owner from recurring finance administration and follow-up", "Access CFO-level judgement without hiring a complete internal team", "Replace unpredictable hourly billing with an agreed monthly cost"] },
      { heading: "A Transparent Path to the Right Scope", bullets: ["Estimate the level of support through the quotation assessment", "Meet the team and discuss the business, systems and current challenges", "Allow Mavens Advisor to review the books, activities and software relevant to the service", "Receive the confirmed scope, responsibilities and fixed monthly quotation", "Complete onboarding and move recurring finance responsibilities into an organised delivery process"] },
      { heading: "One Predictable Monthly Fee Built Around Your Business", body: ["No two finance functions carry the same level of activity. Your quotation is based on transaction volume, entities, payroll, invoicing, reporting and filing requirements. Once the recurring scope is confirmed, you receive a fixed monthly subscription so you can plan the cost without open-ended hourly billing."] },
    ],
    finalHeading: "Do Not Settle for Books That Are Accurate but Commercially Silent",
    finalCopy: "Build a finance function that helps you retain more, see problems earlier and make better decisions.",
  },
  "agentic-ai-automation": {
    title: "Scale Finance Workflows Without Scaling Repetitive Administration",
    shortTitle: "Agentic AI Automation",
    eyebrow: "A Separate Mavens Advisor Service Line",
    path: "/agentic-ai-automation",
    summary: "Reduce manual handoffs, improve turnaround, surface exceptions and create stronger process evidence while keeping qualified people responsible for approvals and professional judgement.",
    value: canonicalServices[7].value,
    image: image8,
    metaTitle: "Agentic AI Automation for Accounting, Tax & Compliance | Mavens Advisor",
    metaDescription: "Reduce repetitive finance administration through controlled automation with human review and exception handling.",
    primaryLabel: "Assess My Workflow",
    primaryTo: "/automation-assessment",
    secondaryLabel: "Discuss an Automation",
    secondaryTo: "/contact",
    sections: [
      { heading: "The Outcome Matters More Than the Technology", body: ["The value of agentic AI is measured by less repetitive administration, faster processing, clearer accountability, stronger audit trails and more time for professional review. Mavens Advisor begins with the accounting, tax or compliance process itself, including its inputs, controls, approvals and exceptions."] },
      { heading: "What Controlled Automation Should Give You", bullets: ["Lower administrative workload", "Faster and more consistent processing", "Fewer avoidable manual errors and missed handoffs", "Clearer status and deadline visibility", "Earlier identification and escalation of exceptions", "Stronger audit trails and process evidence", "Greater capacity without proportionately increasing headcount"] },
      { heading: "Where We Focus", bullets: ["Accounting workflow automation", "Tax-process automation", "Compliance workflow automation", "Document and data collection", "Task routing and deadline management", "Review and approval workflows", "Exception identification and escalation", "System-to-system workflow coordination", "Audit trails and process evidence"] },
      { heading: "How an Engagement Works", bullets: ["Discover the current workflow, people, systems, controls and pain points", "Identify which steps are suitable for automation and which require professional judgement", "Design the future workflow, including approvals, exception routes and evidence requirements", "Build and integrate the automation within the agreed technical environment", "Test standard scenarios, edge cases, permissions and failure handling", "Release through controlled implementation and agreed user training", "Monitor performance and improve the workflow as requirements change"] },
      { heading: "Our Control Principles", bullets: ["Human approval remains where judgement or legal responsibility is involved", "Exceptions must be surfaced, not hidden", "Users should understand what the automation did and why a task was escalated", "Access is limited according to role and business need", "Sensitive financial and tax information is handled through approved systems", "Automations are tested before production use", "The process owner remains accountable for final decisions"] },
      { heading: "Who This Is For", bullets: ["Businesses with repetitive finance processes", "Accounting and tax teams with high document volumes", "Compliance functions managing recurring obligations", "Teams using several disconnected systems", "Leaders who want automation but require clear controls and review"] },
    ],
    finalHeading: "Assess My Workflow",
  },
  "automation-accounting": {
    title: "Reduce Repetitive Accounting Work Without Losing Control",
    shortTitle: "Accounting Automation",
    eyebrow: "Agentic AI Automation Focus Area",
    path: "/agentic-ai-automation/accounting",
    summary: "Map, redesign and automate suitable accounting workflows so your team can spend less time moving information and more time reviewing what matters.",
    value: "A focus area within Agentic AI Automation.",
    image: image2,
    metaTitle: "Agentic AI Accounting Automation | Mavens Advisor",
    metaDescription: "Reduce repetitive accounting work, improve processing consistency and surface exceptions without losing review and control.",
    primaryLabel: "Assess an Accounting Workflow",
    primaryTo: "/automation-assessment",
    sections: [
      { heading: "Potential Workflow Areas", bullets: ["Invoice and supporting-document intake", "Data extraction and validation", "Transaction-classification assistance", "Reconciliation preparation", "Accounts payable routing", "Accounts receivable follow-up workflows", "Month-end task coordination", "Management-report assembly", "Missing-information requests", "Exception alerts and review queues"] },
      { heading: "The Outcome", bullets: ["Fewer manual handoffs", "More consistent process execution", "Clearer status visibility", "Earlier identification of exceptions", "Better evidence of completed tasks", "More time for review and analysis"], body: ["The final automation scope depends on the client’s systems, data quality, control environment and approval requirements."] },
    ],
    finalHeading: "Assess an Accounting Workflow",
  },
  "automation-tax": {
    title: "Reduce Tax Administration Without Losing Professional Review",
    shortTitle: "Tax Workflow Automation",
    eyebrow: "Agentic AI Automation Focus Area",
    path: "/agentic-ai-automation/tax",
    summary: "Agentic automation can coordinate repetitive steps around tax work while qualified professionals retain responsibility for interpretation, review and submission.",
    value: "A focus area within Agentic AI Automation.",
    image: image4,
    metaTitle: "Agentic AI Tax Workflow Automation | Mavens Advisor",
    metaDescription: "Improve tax document collection, task routing, deadline tracking and review workflows with professional oversight.",
    primaryLabel: "Discuss Tax Workflow Automation",
    primaryTo: "/automation-assessment",
    sections: [
      { heading: "Potential Workflow Areas", bullets: ["Client document requests and reminders", "Document receipt and completeness tracking", "Data extraction and validation support", "Workpaper preparation workflows", "Deadline and task coordination", "Review routing and approval status", "Missing-information escalation", "Return-supporting schedule assembly", "Filing-status tracking", "Audit-trail and evidence retention"] },
      { heading: "Human Responsibility", body: ["Automation may organise, route, compare or prepare information. It must not be presented as replacing professional tax judgement, determining a filing position without review, or guaranteeing compliance."] },
    ],
    finalHeading: "Discuss Tax Workflow Automation",
  },
  "automation-compliance": {
    title: "Reduce Compliance Administration and Strengthen Deadline Control",
    shortTitle: "Compliance Automation",
    eyebrow: "Agentic AI Automation Focus Area",
    path: "/agentic-ai-automation/compliance",
    summary: "Build a more consistent process for obligations, evidence, approvals, deadlines and exceptions without removing accountable human oversight.",
    value: "A focus area within Agentic AI Automation.",
    image: image5,
    metaTitle: "Agentic AI Compliance Automation | Mavens Advisor",
    metaDescription: "Automate suitable compliance tracking, evidence collection, task routing and escalation with accountable human control.",
    primaryLabel: "Assess a Compliance Workflow",
    primaryTo: "/automation-assessment",
    sections: [
      { heading: "Potential Workflow Areas", bullets: ["Obligation and deadline registers", "Evidence-request workflows", "Recurring task generation", "Policy and control confirmations", "Approval routing", "Exception and overdue escalation", "Document retention and retrieval", "Status dashboards", "Audit-trail preparation"] },
    ],
    finalHeading: "Assess a Compliance Workflow",
  },
}
