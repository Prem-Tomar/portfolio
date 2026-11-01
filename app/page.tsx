import Experience from "./Experience";
import ProfileConsole from "./ProfileConsole";
import CopyButton from "./CopyButton";
import { getRecruiterTopics } from "./recruiterProfile";

const metrics = [
  { value: "Architecture", label: "Technical direction, service boundaries and platform modernization, with hands-on ownership through production." },
  { value: "Scale", label: "Cloud-native, distributed systems serving millions of daily users and transactions." },
  { value: "Domains", label: "Fintech, insurance, health, media, telecom, sports, commerce, logistics, transportation, social platforms, data storage, parallel file systems, HPC and AI infrastructure." },
  { value: "Reusable IP", label: "Shared platforms, integration contracts and reference implementations that give teams a stronger foundation to build on." },
];

const strengths = [
  "Rust, C++, C, Python / FastAPI, Go, Java / Spring Boot and Node.js",
  "Distributed systems, microservices, REST and gRPC-style contracts",
  "BPMN, Camunda, Temporal and workflow orchestration",
  "Kafka-style event streams and analytics-ready data pipelines",
  "AWS, Kubernetes, Aurora / PostgreSQL, MongoDB and Redis / Valkey",
  "Observability, performance profiling and production RCA",
  "Generative AI, AWS Bedrock, RAG / LLM integrations and ML decisioning",
  "AI-assisted tooling, scoped changes, tests and human review",
  "Architecture governance, technical standards and senior mentorship",
];

const systems = [
  {
    name: "Runtime and Micro-App Platform",
    detail:
      "Reusable plug-and-play modules, shared service contracts, common onboarding flows and configurable runtime capabilities for high-scale client ecosystems.",
    stack: "Go, Java, Spring Boot, AWS, Kubernetes, Aurora, AppSync, Valkey",
  },
  {
    name: "Workflow and Decisioning Platform",
    detail:
      "Stateful orchestration for intelligent routing, approvals, case lifecycles, SLA visibility and audit-friendly event-driven execution.",
    stack: "BPMN, Camunda, Temporal, REST APIs, event-driven architecture",
  },
  {
    name: "Event and Insight Processing",
    detail:
      "Rust workers and data paths that transform high-volume telemetry, engagement and shipment payloads into analytics-ready streams and feature-ready datasets.",
    stack: "Rust, Go, Kafka-style streams, Spark-style processing, observability",
  },
  {
    name: "Commerce and Logistics Platform",
    detail:
      "Checkout, payment and courier orchestration, merchant workflows, partner integrations and ML-driven shipment intelligence at production scale.",
    stack: "Go, Java, Python, Rust, Node.js, MySQL, MongoDB, AWS",
  },
];

const experience = [
  {
    role: "Staff Engineer",
    company: "DataDirect Networks India Private Limited",
    points: [],
  },
  {
    role: "Senior Architect / Principal Solutions Architect",
    company: "SwissClear Services Private Limited",
    period: "Feb 2024 - Oct 2026",
    points: [
      "Directed product architecture and platform engineering for distributed backend, runtime, workflow and micro-app systems serving 7M+ daily users.",
      "Drove platform consolidation through reusable modules, shared contracts, API standards, configurable workflows and common onboarding patterns.",
      "Built Rust event-processing workers and integrated AWS Bedrock with RAG/LLM decision support; led Java-to-Go modernization, workflow orchestration and production RCA.",
      "Worked on sentiment analysis as part of the platform's AI/ML capabilities.",
    ],
  },
  {
    role: "Senior Software Engineer / Engineering Mentor",
    company: "Fermyon Technologies India Private Limited",
    formerBrand: "ShoppinPal",
    period: "May 2023 - Jan 2024",
    points: [
      "Built distributed backend systems and internal tools for data migrations, partner integrations, workflow automation, QA traceability and operations.",
      "Designed reliable REST integrations for GoDaddy, Shopify, Clover, Square, Promenade and LightSpeed.",
      "Modernized selected Java and Node.js components to Go and strengthened observability, CI/CD governance and RCA-led fixes.",
    ],
  },
  {
    role: "Software Development Lead",
    company: "Maverick Quantum India Private Limited",
    period: "Aug 2022 - May 2023",
    points: [
      "Led product delivery for no-code automation and workflow-oriented platform capabilities using API-first architecture and reusable abstractions.",
      "Owned complex modules from service design and data modeling through testing, release planning and production support.",
      "Delivered AWS Connect customer-experience capabilities and contributed to Intelligent Document Processing automation.",
    ],
  },
  {
    role: "Platform Lead",
    company: "GoSprint Logistics Private Limited",
    period: "Apr 2021 - Aug 2022",
    points: [
      "Led checkout, payment and courier orchestration, merchant workflows, partner integrations and shipment-intelligence capabilities.",
      "Designed resilient Java and Go microservices and Rust-backed processing paths for large-scale logistics datasets.",
      "Created SenseEngine, supporting ML-driven shipment optimization across 300K+ monthly orders.",
      "Worked on sentiment analysis alongside shipment-intelligence capabilities.",
    ],
  },
  {
    role: "Senior Full-Stack Developer / Full-Stack & Mobile Developer",
    company: "D-SYS Data Solutions Private Limited, Gwalior",
    period: "Dec 2014 - Nov 2020",
    points: [
      "Delivered transportation and e-way billing, safety/security, mobile, marketplace, database and production-server systems.",
      "Used Python for analytics, structured data preparation and reporting.",
      "Owned backend and application features from design through implementation, deployment support and client-facing resolution.",
      "D-SYS outsourced assignments on client payrolls included Omega Healthcare Management Solutions (Nov 2019), Collasys Global Services (Dec 2019 - Feb 2020), Technosoft Consulting (Feb 2020 - May 2020) and Cooey Technologies (Jul 2020 - Nov 2020).",
    ],
  },
  {
    role: "Software Developer",
    company: "Aadi Infotech Pvt. Ltd., Gwalior",
    period: "Feb 2010 - Feb 2014",
    points: [
      "Progressed from Software Intern (2010-2012) to Software Developer (2012-2014), contributing to transportation, education, social/image-editing, mobile and enterprise products.",
      "Built primarily Java-backed web and enterprise systems with Python/Django support for APIs, admin workflows and internal tools.",
      "Helped redesign standalone applications into maintainable object-oriented and thin-client architectures.",
    ],
  },
];

const practices = [
  {
    title: "Platform architecture and governance",
    text: "I translate product, business, compliance and operational expectations into service boundaries, platform roadmaps, API standards, data contracts and secure production controls.",
  },
  {
    title: "Delivery and operational excellence",
    text: "I connect architecture decisions to release planning, observability, capacity, production readiness and RCA-led improvements in throughput, resilience and auditability.",
  },
  {
    title: "Cross-functional technical leadership",
    text: "I lead architecture and code reviews, mentor senior and architect-level engineers, and align product, QA, infrastructure, DevOps/SRE, compliance, operations and client stakeholders.",
  },
  {
    title: "AI-assisted engineering and tooling",
    text: "I use AI tools and coding agents for bounded tasks: diff-set generation, refactoring analysis, test scaffolding and performance investigation. I review each step and validate changes through tests, profiling and code review, retaining ownership of architecture and code integrity.",
  },
];

const learningAreas = [
  {
    title: "AI/ML foundations and applications",
    text: "Studying the foundations behind model development, training and evaluation, then working toward implementations that connect model behavior to application requirements.",
  },
  {
    title: "Generative AI and LLM systems",
    text: "Building on my professional Bedrock and RAG integration work, my study roadmap covers transformers, embeddings, hybrid retrieval, reranking, fine-tuning and LLM evaluation. Planned MLOps/LLMOps work connects model serving and observability with inference latency, cost, release controls and rollback.",
  },
  {
    title: "Agentic AI and tooling",
    text: "Planned hands-on work includes tool calling, Model Context Protocol (MCP), LangChain and LangGraph. The focus is controlled execution: explicit tool permissions, agent state, human approvals, recovery and evaluations that make multi-step workflows reviewable and reliable.",
  },
  {
    title: "Storage, HPC and AI infrastructure",
    text: "Pursuing a separate learning programme in Rust, C and selected C++ for Linux systems programming, high-performance data storage, distributed and parallel file systems including Lustre, and high-performance computing (HPC). Planned practice covers parallel I/O, NUMA, RDMA, ultra-low-latency design, reliability and recovery, plus data feeding, checkpoint recovery and inference-cache placement for AI training and inference workloads.",
  },
];

const education = [
  { type: "Master of Technology / In progress", subject: "Artificial Intelligence and Machine Learning", institute: "Birla Institute of Technology and Science, Pilani", period: "October 2026 - October 2028 (expected)" },
  { type: "Postgraduate Program", subject: "Artificial Intelligence and Machine Learning", institute: "The University of Texas at Austin", period: "Facilitated by Great Learning" },
  { type: "Bachelor of Engineering", subject: "Information Technology", institute: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)", period: "2007 - 2012" },
];
const profileSummary = "I set technical direction for distributed platforms and stay hands-on from system design and code to production. I balance scale, performance and reliability with cost, delivery speed and a lean, maintainable stack.";
const consultingNote = "Additional consulting exposure includes Millennial Group Inc., Cloud Digital Arts, Cargo 3 IVS / FindACargo and independent client delivery from 2014 to 2019.";

export default function Home() {
  const whatsappUrl = "https://wa.me/919606379003?text=Hi%20Prem%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.";
  const linkedinUrl = "https://www.linkedin.com/in/prem-tomar/";
  const resumeUrl = "/resume.pdf?v=20261101-r8";

  return (
    <main id="top">
      <a className="skip-link" href="#experience">Skip to career chapters</a>
      <header className="site-header">
        <nav className="nav content-width" aria-label="Primary navigation">
          <a href="#top" className="brand">Prem P S Tomar<span aria-hidden="true">.</span></a>
          <div className="nav-links">
            <a href="#experience">Chapters</a><a href="#work">Systems</a><a href="#education">Education</a><a href="#learning">Learning</a><a href="#contact">Contact</a><a href="#console">Recruiters</a>
            <a className="nav-resume" href={resumeUrl} target="_blank" rel="noreferrer" aria-label="Download resume (PDF)">Resume <span aria-hidden="true">↗</span></a>
          </div>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-inner content-width">
          <div className="hero-content">
            <p className="eyebrow">Software Architect / Principal Engineer</p>
            <h1 id="hero-heading">Prem Tomar</h1>
            <p className="hero-lead">Technical direction.<br />Hands-on engineering.</p>
            <p className="hero-copy">{profileSummary}</p>
            <div className="hero-actions" aria-label="Portfolio actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Contact me <span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href={resumeUrl} target="_blank" rel="noreferrer" aria-label="View resume PDF">Resume <span aria-hidden="true">↓</span></a>
              <span className="copyable-contact"><a className="text-link" href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><CopyButton text={linkedinUrl} label="LinkedIn profile URL" /></span>
            </div>
            <p className="hero-appointment"><strong>Staff Engineer at <a href="https://ddn.com" target="_blank" rel="noopener noreferrer">DDN</a></strong></p>
          </div>
          <div className="hero-sculpture" aria-hidden="true">
            <div className="sculpture-plane plane-back" /><div className="sculpture-plane plane-middle" />
            <div className="sculpture-plane plane-front"><span /><span /><span /><span /><span /></div>
            <div className="sculpture-light" />
          </div>
          <div className="hero-bottom"><span>14+ years in architecture &amp; engineering</span><span>Rust · C++ · C · Python · AI/ML · GenAI · RAG · LLM · Go · Java · Node.js</span></div>
        </div>
      </section>

      <Experience companies={experience} />

      <section className="metrics content-width" aria-label="Architecture achievement highlights">
        {metrics.map((item) => <article className="metric" key={item.value}><h2>{item.value}</h2><p>{item.label}</p></article>)}
      </section>

      <section className="section content-width" id="work" aria-labelledby="systems-heading">
        <div className="section-heading"><p className="eyebrow">Selected systems</p><h2 id="systems-heading">Platforms, workflows<br />and intelligent systems.</h2></div>
        <div className="system-grid">
          {systems.map((system, index) => <article className="system-card" key={system.name}>
            <span className="system-index" aria-hidden="true">0{index + 1} / SYSTEM</span><h3>{system.name}</h3><p>{system.detail}</p><p className="system-stack">{system.stack}</p>
          </article>)}
        </div>
      </section>

      <section className="section expertise-section content-width" aria-labelledby="expertise-heading">
        <div className="section-heading"><p className="eyebrow">Core profile</p><h2 id="expertise-heading">Architecture first.<br />Hands-on throughout.</h2></div>
        <div className="expertise-layout">
          <div className="expertise-intro"><p>My work sits where backend design, cloud infrastructure, performance engineering and product delivery meet.</p><p>I have led systems from architecture through implementation, release, incident analysis and long-term reliability improvement.</p></div>
          <ul className="strength-list">{strengths.map((strength) => <li key={strength}>{strength}</li>)}</ul>
        </div>
      </section>

      <section className="section practice-section" aria-labelledby="practice-heading">
        <div className="content-width">
          <div className="section-heading"><p className="eyebrow">Engineering practice</p><h2 id="practice-heading">From product strategy<br />to production outcomes.</h2></div>
          <div className="practice-list">{practices.map((practice, index) => <article className="practice-item" key={practice.title}><span className="row-index" aria-hidden="true">0{index + 1}</span><h3>{practice.title}</h3><p>{practice.text}</p></article>)}</div>
        </div>
      </section>

      <section className="section education-section content-width" id="education" aria-labelledby="education-heading">
        <div className="section-heading"><p className="eyebrow">Education</p><h2 id="education-heading">Technical foundations.<br />Continued development.</h2></div>
        <div className="education-grid">
          {education.map((item) => <article key={item.type}><span className="eyebrow">{item.type}</span><h3>{item.subject}</h3><p>{item.institute}</p><p className="education-period">{item.period}</p></article>)}
        </div>
        <p className="consulting-note">{consultingNote}</p>
      </section>

      <section className="section learning-section content-width" id="learning" aria-labelledby="learning-heading">
        <div className="section-heading"><p className="eyebrow">Ongoing learning</p><h2 id="learning-heading">AI and data<br />infrastructure.</h2></div>
        <p className="learning-intro">Alongside my hands-on architecture career, I am deepening my AI/ML understanding through M.Tech study and independent engineering practice. These are active learning directions, distinct from the production experience above.</p>
        <div className="learning-list">{learningAreas.map((area) => <article className="learning-item" key={area.title}><h3>{area.title}</h3><p>{area.text}</p></article>)}</div>
        <p className="learning-method">My approach: understand the mechanisms, implement and evaluate, investigate failures, and document reproducible evidence. Architecture first, grounded in hands-on code and experiments, with clear limits on what a lab or simulation demonstrates.</p>
      </section>

      <section className="contact-section content-width" id="contact" aria-labelledby="contact-heading">
        <div><p className="eyebrow">Contact / Pune, India</p><h2 id="contact-heading">Let's talk<br />architecture.</h2><p>Connect with me to exchange ideas on platform architecture, distributed systems and hands-on engineering.</p></div>
        <div className="contact-actions">
          <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Chat on WhatsApp <span aria-hidden="true">↗</span></a>
          <div className="copyable-contact"><a className="text-link" href="mailto:prem.tomar.blr@gmail.com">prem.tomar.blr@gmail.com</a><CopyButton text="prem.tomar.blr@gmail.com" label="email address" /></div>
          <div className="copyable-contact"><a className="text-link" href="tel:+919606379003">+91 9606379003</a><CopyButton text="+919606379003" label="mobile number" /></div>
          <div className="copyable-contact"><a className="text-link" href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn profile <span aria-hidden="true">↗</span></a><CopyButton text={linkedinUrl} label="LinkedIn profile URL" /></div>
        </div>
      </section>
      <ProfileConsole topics={getRecruiterTopics(resumeUrl)} />
      <footer className="site-footer content-width"><span>Prem P S Tomar</span><a href="#top">Back to top <span aria-hidden="true">↑</span></a></footer>
    </main>
  );
}
