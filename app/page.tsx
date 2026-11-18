import Experience from "./Experience";
import ProfileConsole from "./ProfileConsole";
import CopyButton from "./CopyButton";
import { getRecruiterTopics } from "./recruiterProfile";

const metrics = [
  { value: "Architecture", label: "Hands-on system design and modernization, setting technical direction across concurrent projects and engineering teams." },
  { value: "Scale", label: "Cloud-native, distributed systems serving millions of daily users and transactions." },
  { value: "Domains", label: "Fintech, insurance, health, media, telecom, sports, commerce, logistics, transportation, social platforms, data storage, parallel file systems, HPC and AI infrastructure." },
  { value: "Reusable IP", label: "Shared platforms, integration contracts and reference implementations that give teams a stronger foundation to build on." },
];

const strengths = [
  "Rust, C++, C, Python / FastAPI, Go, Java / Spring Boot and Node.js",
  "Concurrent processing, CPU/memory profiling and production diagnosis",
  "Distributed systems, microservices, REST and gRPC contract concepts",
  "EXAScaler / Lustre, storage integrations and AI / HPC data paths",
  "BPMN, Camunda, Temporal and workflow orchestration",
  "Event-streaming patterns and analytics-ready data pipelines",
  "AWS, Kubernetes, Aurora / PostgreSQL, MongoDB and Redis / Valkey",
  "Observability, performance profiling and production RCA",
  "AI/ML, GenAI, AWS Bedrock and RAG / LLM integrations",
  "Agentic AI tooling, bounded coding tasks, tests and human review",
  "RFCs, ADRs, HLD/LLD, sequence diagrams and architecture reviews",
  "Multi-project delivery, stakeholder alignment and engineering mentorship",
  "Release readiness, runbooks and engineering-to-support handover",
];

const systems = [
  {
    name: "Runtime and Micro-App Platform",
    detail:
      "TAPPP: consolidated client-specific capabilities into shared runtime modules, service contracts and configurable onboarding, giving multiple client ecosystems a common platform foundation.",
    stack: "Go, Java, Spring Boot, AWS, Kubernetes, Aurora, AppSync, Valkey",
  },
  {
    name: "Workflow and Decisioning Platform",
    detail:
      "Defined execution flows and integration contracts for routing, approvals and case lifecycles, connecting workflow design with SLA visibility and audit-friendly operations.",
    stack: "BPMN, Camunda, Temporal, REST APIs, event-driven architecture",
  },
  {
    name: "Event and Insight Processing",
    detail:
      "TAPPP and Swift: hands-on Rust processing for event, insight and shipment workloads, connecting high-volume data paths with analytics and ML-driven decisions.",
    stack: "Rust, Go, event-streaming and distributed-processing patterns, observability",
  },
  {
    name: "Commerce and Logistics Platform",
    detail:
      "Swift: defined payment, courier and merchant service boundaries, backward-compatible partner contracts and configurable orchestration alongside SenseEngine shipment intelligence.",
    stack: "Go, Java, Python, Rust, Node.js, MySQL, MongoDB, AWS",
  },
];

const experience = [
  {
    role: "Staff Engineer",
    company: "DataDirect Networks India Private Limited",
    period: "Nov 2026 - Present",
    points: [
      "Working on EXAScaler within DDN's Global Engineering team: Lustre-based parallel storage for AI training, checkpointing and high-performance computing (HPC).",
      "I bring a background in Rust and distributed systems to my work on the EXAScaler Management Framework (EMF) and the Lustre HTTP interface for client integrations. My focus is I/O performance, data integrity and reliability.",
      "Contribute to product and integration design through RFCs, ADRs, sequence diagrams and design/release reviews, connecting client requirements with implementation and operational considerations.",
      "Security considerations for these integrations include workload identity, tenant isolation and least-privilege access. Reading training data or writing a checkpoint is distinct from viewing cluster health or changing storage configuration.",
      "Network guardrails limit where a client can send data. Audit trails make denied requests traceable to the caller and operation without disclosing credentials or payloads.",
      "Product context: SFA (Storage Fusion Architecture) provides the storage foundation for EXAScaler appliance deployments. DDN's broader portfolio includes Infinia, a software-defined platform for multi-tenant data management and AI workflows, including inference and retrieval.",
    ],
  },
  {
    role: "Senior Architect / Principal Solutions Architect",
    company: "SwissClear Services Private Limited",
    period: "Feb 2024 - Oct 2026",
    points: [
      "Set architecture direction for runtime, workflow and micro-app platforms serving 7M+ daily users. Consolidated client-specific capabilities into shared modules, service contracts and configurable onboarding across DTV, Globo, FIFA, Roku, BetPlay and Blackhawk ecosystems.",
      "Led profile-driven Java-to-Go modernization around CPU, memory and latency behavior; redesigned asynchronous execution, private AWS networking and Aurora/AppSync/Valkey data paths for workload needs. Built Rust event workers and designed BPMN/Camunda/Temporal orchestration.",
      "Integrated GenAI using AWS Bedrock and retrieval-augmented generation (RAG) for LLM-backed decision support; contributed sentiment analysis within the product platform.",
      "Led concurrent product and integration initiatives, aligning product, engineering, SRE, compliance and client stakeholders on platform trade-offs, dependencies and release priorities.",
      "Reviewed service boundaries, data contracts and integration behavior through RFCs, ADRs, high- and low-level designs and sequence diagrams, giving teams a shared basis for implementation and change-impact decisions.",
      "Connected observability and incident RCA to corrective engineering, API/schema governance and PCI/SOC2-aligned operations. Carried production requirements into release-readiness reviews, runbooks and support handover.",
      "Mentored senior and architect-level engineers through design and code reviews, helping teams apply shared standards while staying hands-on in implementation and performance diagnosis.",
    ],
  },
  {
    role: "Senior Software Engineer / Engineering Mentor",
    company: "Fermyon Technologies India Private Limited",
    formerBrand: "ShoppinPal",
    period: "May 2023 - Jan 2024",
    points: [
      "Designed REST integrations and migration workflows for GoDaddy, Shopify, Clover, Square, Promenade and LightSpeed, making data integrity and backward compatibility explicit service-contract requirements.",
      "Modernized selected Java and Node.js components to Go to address concurrency and runtime overhead in high-volume integration jobs, guided by CPU and memory behavior.",
      "Reviewed partner behavior, contract changes and migration dependencies with engineers and stakeholders through RFCs, ADRs and sequence diagrams, connecting technical decisions to release impact.",
      "Used incident RCA to identify reliability gaps and improve the diagnostic evidence needed to investigate integration failures. Connected observability with automated QA, release controls and operational runbooks, bridging engineering and support through corrective releases.",
      "Mentored engineers through design reviews and production debugging, coordinating integration and migration work without losing hands-on ownership of complex changes.",
    ],
  },
  {
    role: "Software Development Lead",
    company: "Maverick Quantum India Private Limited",
    period: "Aug 2022 - May 2023",
    points: [
      "Shaped no-code automation architecture through API-first service boundaries, workflow execution flows and shared database/platform components for reuse across product modules.",
      "Led design-to-release delivery of AWS Connect capabilities and contributed to Intelligent Document Processing. Reviewed implementation and tests against service designs and remained hands-on in complex modules.",
      "Resolved data-model and integration choices through HLD/LLD, process and sequence diagrams, RFCs and ADRs, aligning product requirements with platform reuse and release scope.",
      "Coordinated concurrent automation, customer-experience and document-processing work with product, engineering, operations and support, making delivery dependencies and release readiness visible across teams.",
      "Guided engineers on shared components and production readiness; connected release checks, runbooks and support handover with follow-up fixes and platform improvements.",
    ],
  },
  {
    role: "Platform Lead",
    company: "GoSprint Logistics Private Limited",
    period: "Apr 2021 - Aug 2022",
    points: [
      "Defined commerce and logistics platform boundaries across checkout, payments, couriers and merchant workflows. Built configurable BYOC/BYOP orchestration with backward-compatible partner contracts.",
      "Architected SenseEngine's ML-driven shipment intelligence across 300K+ monthly orders, combining Rust data-processing paths and optimization logic to reduce cost per shipment. Also contributed sentiment analysis.",
      "Designed Java/Go services and stayed hands-on in implementation, profiling and incident diagnosis, using production feedback to guide reliability and scalability decisions.",
      "Led architecture discussions using RFCs, ADRs, process flows and sequence diagrams to review payment/courier interactions, technical trade-offs and release impact with product and operations teams.",
      "Coordinated parallel commerce, logistics and shipment-intelligence initiatives, resolving delivery dependencies and connecting release readiness with operational support, runbooks and incident follow-up.",
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
    title: "System design and technical trade-offs",
    text: "I define service boundaries, data contracts and execution flows around workload behavior, compatibility and failure conditions. RFCs, ADRs and design diagrams make the alternatives and consequences explicit; implementation and production evidence keep those decisions grounded.",
  },
  {
    title: "Runtime performance and reliability",
    text: "I work directly with code, CPU/memory profiles and production traces to investigate latency, concurrency and runtime overhead. That diagnosis informs modernization and data-path decisions, with observability, incident RCA and runbooks connecting engineering changes to operational reliability.",
  },
  {
    title: "Technical direction across projects",
    text: "I lead concurrent initiatives while staying involved in their critical designs and implementation. I align product, engineering, QA, SRE and client stakeholders on priorities, dependencies and risks, carrying technical decisions through release readiness and engineering-to-support handover.",
  },
  {
    title: "Engineering standards and team development",
    text: "I build shared components and reference implementations, then help engineers apply them through design reviews, code review and production debugging. Mentoring includes the reasoning behind a design, its tests and its operating limits, so teams can make sound decisions independently.",
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
const profileSummary = "I am a hands-on systems engineer and architect. I design service boundaries and data paths, modernize runtimes and investigate performance in production. Across concurrent projects, I set technical direction, guide engineers and align stakeholders on trade-offs, dependencies and releases, balancing reliability and security with cost and delivery pace.";
const consultingNote = "Additional consulting exposure includes Millennial Group Inc., Cloud Digital Arts, Cargo 3 IVS / FindACargo and independent client delivery from 2014 to 2019.";

export default function Home() {
  const whatsappUrl = "https://wa.me/919606379003?text=Hi%20Prem%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.";
  const linkedinUrl = "https://www.linkedin.com/in/prem-tomar/";
  const resumeUrl = "/resume.pdf?v=20261118-r12";

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
            <p className="eyebrow">Systems Engineering &amp; Architecture / Engineering Leadership</p>
            <h1 id="hero-heading">Prem Tomar</h1>
            <p className="hero-lead">Systems engineering.<br />Technical leadership.</p>
            <p className="hero-copy">{profileSummary}</p>
            <div className="hero-actions" aria-label="Portfolio actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Contact me <span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href={resumeUrl} target="_blank" rel="noreferrer" aria-label="View resume PDF">Resume <span aria-hidden="true">↓</span></a>
              <span className="copyable-contact"><a className="text-link" href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><CopyButton text={linkedinUrl} label="LinkedIn profile URL" /></span>
            </div>
            <p className="hero-appointment"><strong>Staff Engineer at <a href="https://ddn.com" target="_blank" rel="noopener noreferrer">DDN</a></strong><span>· Global Engineering / EXAScaler</span></p>
          </div>
          <div className="hero-sculpture" aria-hidden="true">
            <div className="sculpture-plane plane-back" /><div className="sculpture-plane plane-middle" />
            <div className="sculpture-plane plane-front"><span /><span /><span /><span /><span /></div>
            <div className="sculpture-light" />
          </div>
          <div className="hero-bottom"><span>14+ years in architecture &amp; engineering</span><span>Rust · C++ · C · Python · AI/ML · GenAI · RAG · LLM · Agentic AI · Go · Java · Node.js</span></div>
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
          <div className="expertise-intro"><p>My architecture work is grounded in implementation: concurrent processing, service and data contracts, runtime behavior and production reliability. That foundation spans shared product platforms, partner integrations, workflow engines and current EXAScaler storage work.</p><p>I take the same depth into technical leadership, guiding engineers and coordinating concurrent initiatives without stepping away from complex code, performance diagnosis or the consequences of design decisions.</p></div>
          <ul className="strength-list">{strengths.map((strength) => <li key={strength}>{strength}</li>)}</ul>
        </div>
      </section>

      <section className="section practice-section" aria-labelledby="practice-heading">
        <div className="content-width">
          <div className="section-heading"><p className="eyebrow">Engineering practice</p><h2 id="practice-heading">System design, engineering<br />and technical leadership.</h2></div>
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
