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
  heroPoints?: string[]
  heroNote?: string
  sections: ServiceSection[]
  faqs?: { question: string; answer: string }[]
  finalHeading: string
  finalCopy?: string
  finalSecondaryLabel?: string
  finalSecondaryTo?: string
  finalMicrocopy?: string
}

export const canonicalServices = [
  { title: "Finance System Setup", path: "/virtual-cfo-services/finance-system-setup", value: "Build a reliable, reporting-ready and tax-ready financial foundation.", image: image1 },
  { title: "Finance Operations", path: "/virtual-cfo-services/finance-operations", value: "Keep recurring financial work current, controlled and clearly owned.", image: image2 },
  { title: "Financial Reporting and Forecasting", path: "/virtual-cfo-services/reporting-and-forecasting", value: "See profit, cash, margins and future pressure clearly enough to act.", image: image3 },
  { title: "UK Tax, HMRC and Companies House Compliance", path: "/virtual-cfo-services/uk-tax-and-compliance", value: "Stay tax-ready, coordinate filings and identify legitimate tax-efficiency opportunities.", image: image4 },
  { title: "US Tax, IRS and State Compliance", path: "/virtual-cfo-services/us-tax-and-compliance", value: "Coordinate federal and state filings using current records and professional review.", image: image5 },
  { title: "Strategic Financial Advisory", path: "/virtual-cfo-services/strategic-financial-advisory", value: "Use CFO-level analysis to improve cash, profitability and major decisions.", image: image6 },
  { title: "Virtual CFO", path: "/virtual-cfo-services", value: "Combine the finance capabilities required through one accountable team and predictable monthly fee.", image: image7 },
  { title: "Agentic AI Automation", path: "/agentic-ai-automation", value: "Potentially reduce suitable accounting, tax and compliance function costs by up to 30% through controlled automation with human oversight.", image: image8 },
]

export const servicePages: Record<string, ServicePageData> = {
  "finance-system-setup": {
    title: "Build Your Finance System Right From the Start",
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
    title: "Give Your Finance Work Clear Ownership",
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
    title: "Turn Your Numbers Into Better Decisions",
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
    title: "Stay Compliant. Pay No More Tax Than Required.",
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
    title: "Stay Tax-Ready. Pay No More Than Required.",
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
    title: "Protect Cash. Improve Profit. Make Better Decisions.",
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
    title: "More Than Bookkeeping. A Complete Finance Function.",
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
    title: "Scale Operations, Not Administration",
    shortTitle: "Agentic AI Automation",
    eyebrow: "Agentic AI Automation for Accounting, Tax and Compliance",
    path: "/agentic-ai-automation",
    summary: "Mavens Advisor designs and implements controlled agentic AI workflows that reduce manual work, accelerate processing and could lower the operating cost of suitable accounting, tax and compliance functions by up to 30%. Your people remain responsible for approvals, exceptions, professional judgement and final decisions.",
    value: "Put your people in control of exceptions, not repetitive tasks.",
    image: image8,
    metaTitle: "Agentic AI Automation for Accounting, Tax and Compliance | Mavens Advisor",
    metaDescription: "Potentially reduce suitable accounting, tax and compliance function costs by up to 30% through controlled agentic AI automation with human oversight.",
    primaryLabel: "Assess My Workflow",
    primaryTo: "/automation-assessment",
    secondaryLabel: "Discuss an Automation",
    secondaryTo: "/contact",
    heroPoints: ["Potentially reduce suitable function costs by up to 30%", "Reduce repetitive administrative work", "Improve processing speed and consistency", "Maintain human review and accountability"],
    heroNote: "Potential outcomes vary by workflow. Any cost-reduction estimate is confirmed only after assessing the current operating-cost baseline, systems, volume, controls and achievable level of automation.",
    sections: [
      { heading: "Put Your People in Control of Exceptions, Not Repetitive Tasks", body: ["Accounting, tax and compliance teams often spend valuable time collecting documents, entering information, checking statuses, sending reminders, routing work and following up on missing data.", "Agentic AI automation can complete suitable multi-step tasks across approved systems, follow defined rules, request human approval and escalate exceptions when professional attention is required.", "The result is a more efficient function with clearer accountability, faster turnaround and more time for work that requires human expertise."] },
      { heading: "What Controlled Automation Could Deliver", bullets: ["Lower administrative workload", "Faster and more consistent processing", "Fewer manual handoffs and duplicate entries", "Reduced risk of avoidable errors and missed tasks", "Earlier identification of exceptions", "Improved deadline and workflow visibility", "Stronger audit trails and process evidence", "Greater capacity without proportionately increasing headcount", "More time for analysis, review and professional judgement"] },
      { heading: "Where the Potential 30% Cost Reduction Comes From", body: ["We believe suitable accounting, tax and compliance functions could reduce their operating costs by up to 30% through carefully designed agentic AI automation.", "This potential saving comes from improving specific workflows, not from applying a percentage to the cost of the entire business.", "The achievable result depends on the function’s current cost, workflow volume, systems, process consistency, control requirements and the proportion of work that can be automated safely."], bullets: ["Reducing time spent on repetitive data collection and preparation", "Eliminating unnecessary manual handoffs", "Reducing duplicate data entry across systems", "Automating routine reminders and task allocation", "Identifying missing or inconsistent information earlier", "Reducing rework caused by incomplete processing", "Directing exceptions to the correct reviewer", "Increasing workflow capacity without matching increases in headcount"] },
      { heading: "Accounting Workflow Automation", body: ["We identify repetitive accounting activities that can be automated while maintaining appropriate review and control."], bullets: ["Invoice and receipt collection", "Document classification and data extraction", "Accounts payable workflow coordination", "Accounts receivable follow-ups", "Transaction review preparation", "Reconciliation preparation and exception flagging", "Payroll information collection", "Month-end checklist management", "Missing-information requests", "Management-reporting workflow coordination", "Task routing, reminders and approvals"] },
      { heading: "Tax Workflow Automation", body: ["We help streamline the administrative processes surrounding UK and US tax compliance while keeping qualified professionals responsible for tax positions, reviews and filing approvals.", "Agentic AI supports the tax process. It does not replace professional tax judgement or the required review and authorisation of filings."], bullets: ["Tax-document request lists", "Client information collection", "Document completeness checks", "Data extraction and preparation", "Deadline monitoring", "Automated reminders and follow-ups", "Workpaper workflow coordination", "Review-queue management", "Approval routing", "HMRC, IRS and state filing status tracking", "Supporting-evidence management", "Exception escalation"] },
      { heading: "Compliance Workflow Automation", body: ["Recurring compliance obligations can involve numerous deadlines, documents, approvals and follow-ups. Agentic AI can coordinate suitable parts of these processes and provide clearer visibility over what is complete, outstanding or at risk."], bullets: ["Compliance calendars", "Recurring obligation tracking", "Companies House workflow coordination", "HMRC compliance workflows", "IRS and state compliance workflows", "Document and evidence collection", "Deadline reminders", "Approval and review routing", "Missing-information follow-ups", "Exception identification", "Audit-trail creation", "Status reporting"] },
      { heading: "Our Approach", bullets: ["1. Assess the Current Workflow — Review the people, systems, tasks, volumes, costs, controls, approvals, delays and recurring problems.", "2. Identify Suitable Opportunities — Determine what is repetitive and rules-based, what requires professional judgement and where automation could create measurable value.", "3. Design the Controlled Workflow — Define system handoffs, approvals, exception handling and evidence-retention requirements.", "4. Build and Test — Implement the workflow and test standard scenarios, edge cases, permissions, integrations, failure handling and escalation routes.", "5. Launch and Improve — Release through controlled implementation, train relevant users and monitor the workflow for further improvements."] },
      { heading: "Human Oversight Is Built In", body: ["Agentic AI should strengthen financial control, not weaken it."], bullets: ["Human approval remains where judgement or legal responsibility is involved", "Exceptions are surfaced for review rather than hidden", "Access is limited according to role and business need", "Sensitive information is handled through approved systems", "Actions and approvals are recorded through appropriate audit trails", "Automations are tested before production use", "Failure and escalation routes are defined in advance", "The process owner remains accountable for final decisions"] },
      { heading: "Who This Service Is For", body: ["Not every process should be automated. We focus on workflows where automation can be introduced safely, responsibly and with a measurable business case."], bullets: ["Businesses with repetitive finance processes", "Accounting teams handling high transaction volumes", "Tax teams managing extensive document requests", "Compliance teams monitoring recurring obligations", "Organisations using several disconnected systems", "Growing businesses that need more capacity", "Teams experiencing frequent manual handoffs", "Leaders seeking efficiency without losing visibility or control"] },
      { heading: "Scope and Pricing", body: ["Every engagement begins with an assessment of the selected workflow, its current operating-cost baseline, systems, controls, approvals and exceptions.", "The final scope, implementation plan, expected benefits and pricing are confirmed after this assessment."] },
    ],
    faqs: [
      { question: "What is agentic AI automation?", answer: "Agentic AI automation uses software agents to complete defined multi-step tasks, coordinate actions across approved systems, follow established rules, request approvals and escalate exceptions. It is designed to support controlled business processes, not make unsupervised financial, tax or compliance decisions." },
      { question: "Is the 30% cost reduction guaranteed?", answer: "No. Up to 30% is a potential function-level cost reduction for suitable workflows, not a guaranteed result. Any estimate depends on the current operating-cost baseline, workflow volume, systems, controls, process consistency and the amount of work that can be automated safely." },
      { question: "Will agentic AI replace our employees?", answer: "The objective is to reduce repetitive administration and increase operational capacity. Employees remain essential for professional judgement, approvals, relationship management, exception handling and final accountability." },
      { question: "Can agentic AI submit tax filings automatically?", answer: "Automation may support document collection, data preparation, deadline tracking, review routing and filing-status management. Tax positions and filings requiring professional judgement or authorisation remain subject to appropriate human review and approval." },
      { question: "Do we need to replace our existing software?", answer: "Not necessarily. We begin by assessing your current systems and identifying whether suitable workflows can be improved within your existing technical environment." },
      { question: "How is sensitive information protected?", answer: "Access, permissions, approved systems, audit trails and human approvals are considered during workflow design. The specific security and data-handling requirements are agreed before implementation." },
      { question: "How long does implementation take?", answer: "The timeline depends on the workflow’s complexity, existing systems, integration requirements, control environment and testing needs. The proposed timeline is confirmed after the initial assessment." },
    ],
    finalHeading: "Reduce Repetitive Work, Process Friction and Avoidable Operating Cost",
    finalCopy: "Show us the accounting, tax or compliance workflow that is consuming too much time. We will assess its current cost, systems, controls, approvals and exceptions, then identify what could be automated safely and where measurable improvement may be achievable.",
    finalSecondaryLabel: "Speak to an Automation Advisor",
    finalSecondaryTo: "/contact",
    finalMicrocopy: "Begin with one workflow. No commitment to implementation is required.",
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
