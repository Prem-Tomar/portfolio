const metrics = [
  { value: "Architecture", label: "Technical direction, service boundaries and platform modernization, with hands-on ownership through production." },
  { value: "Scale", label: "Cloud-native, distributed systems serving millions of daily users and transactions." },
  { value: "Domains", label: "Fintech, insurance, health, media, telecom, sports, commerce, logistics, transportation and social platforms." },
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
    company: "DDN",
    period: "Starting 2 November 2026",
    status: "Upcoming appointment.",
    points: [],
  },
  {
    role: "Senior Architect / Principal Solutions Architect",
    company: "SwissClear Services Private Limited (TAPPP)",
    period: "Feb 2024 - Oct 2026",
    points: [
      "Directed product architecture and platform engineering for distributed backend, runtime, workflow and micro-app systems serving 7M+ daily users.",
      "Drove platform consolidation through reusable modules, shared contracts, API standards, configurable workflows and common onboarding patterns.",
      "Built Rust event-processing workers and integrated AWS Bedrock with RAG/LLM decision support; led Java-to-Go modernization, workflow orchestration and production RCA.",
    ],
  },
  {
    role: "Senior Software Engineer / Engineering Mentor",
    company: "Fermyon Technologies India Private Limited (LINK, formerly ShoppinPal)",
    period: "May 2023 - Jan 2024",
    points: [
      "Built distributed backend systems and internal tools for data migrations, partner integrations, workflow automation, QA traceability and operations.",
      "Designed reliable REST integrations for GoDaddy, Shopify, Clover, Square, Promenade and LightSpeed.",
      "Modernized selected Java and Node.js components to Go and strengthened observability, CI/CD governance and RCA-led fixes.",
    ],
  },
  {
    role: "Software Development Lead",
    company: "Maverick Quantum India Private Limited (mavQ)",
    period: "Aug 2022 - May 2023",
    points: [
      "Led product delivery for no-code automation and workflow-oriented platform capabilities using API-first architecture and reusable abstractions.",
      "Owned complex modules from service design and data modeling through testing, release planning and production support.",
      "Delivered AWS Connect customer-experience capabilities and contributed to Intelligent Document Processing automation.",
    ],
  },
  {
    role: "Platform Lead",
    company: "GoSprint Logistics Private Limited (Swift)",
    period: "Apr 2021 - Aug 2022",
    points: [
      "Led checkout, payment and courier orchestration, merchant workflows, partner integrations and shipment-intelligence capabilities.",
      "Designed resilient Java and Go microservices and Rust-backed processing paths for large-scale logistics datasets.",
      "Created SenseEngine, supporting ML-driven shipment optimization across 300K+ monthly orders.",
    ],
  },
  {
    role: "Senior Full-Stack Developer / Full-Stack & Mobile Developer",
    company: "D-SYS Data Solutions Private Limited, Gwalior",
    period: "Dec 2014 - Nov 2020",
    points: [
      "Delivered transportation and e-way billing, safety/security, mobile, marketplace, database and production-server systems.",
      "Expanded Python, Go and Rust work into data analysis, ML data collection, sentiment signals, recommendation logic and multi-model experiments.",
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
    title: "Storage, HPC and infrastructure",
    text: "Pursuing a separate learning programme in Rust, C and selected C++ for Linux systems programming, storage, Lustre and high-performance computing (HPC). Planned work explores ultra-low-latency design, parallel I/O, NUMA, RDMA, reliability and recovery, including data feeding, checkpoint recovery and inference-cache placement for AI workloads.",
  },
];

export default function Home() {
  const whatsappUrl =
    "https://wa.me/919606379003?text=Hi%20Prem%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.";
  const linkedinUrl = "https://www.linkedin.com/in/prem-tomar/";

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-background" aria-hidden="true">
          <img src="/architecture-fabric.png" alt="" width="1792" height="896" fetchPriority="high" />
        </div>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#top" className="brand">
            Prem P S Tomar
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#learning">Learning</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">14+ years / Architecture &amp; engineering</p>
          <h1>Prem Tomar</h1>
          <p className="hero-role">Software architect.<br /><span>Principal engineer.</span></p>
          <p className="hero-copy">
            I set technical direction for distributed platforms and stay hands-on from system
            design and code to production. I balance scale, performance and reliability with
            cost, delivery speed and a lean, maintainable stack.
          </p>
          <div className="hero-actions" aria-label="Portfolio actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Contact me
            </a>
            <a className="button button-secondary" href="/resume.pdf?v=20261031-r7" target="_blank" rel="noreferrer" aria-label="Download resume (PDF)">
              Resume
            </a>
            <a className="button button-linkedin" href={linkedinUrl} target="_blank" rel="noreferrer">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M5.2 7.9H1.4V20h3.8V7.9ZM3.3 2A2.2 2.2 0 1 0 3.3 6.4 2.2 2.2 0 0 0 3.3 2ZM20.8 13.1c0-3.7-2-5.5-4.7-5.5-2.2 0-3.1 1.2-3.7 2v-1.7H8.6V20h3.8v-6c0-1.6.3-3.2 2.3-3.2 2 0 2 1.8 2 3.3V20h3.8l.3-6.9Z" />
              </svg>
              LinkedIn
            </a>
          </div>
          <p className="hero-appointment">
            <span className="hero-kicker">Next</span>
            <strong>Staff Engineer at DDN</strong>
            <span>Starting <time dateTime="2026-11-02">2 November 2026</time></span>
          </p>
          <a className="hero-direction" href="#learning">
            Ongoing study: AI/ML, storage &amp; HPC <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </section>

      <section className="metrics" aria-label="Architecture achievement highlights">
        {metrics.map((item) => (
          <div className="metric" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section intro-section">
        <div className="section-heading">
          <p className="eyebrow">Core Profile</p>
          <h2>Product engineering leadership with hands-on platform depth.</h2>
        </div>
        <div className="profile-workbench" aria-label="Core profile editor and terminal">
          <div className="workbench-top">
            <div className="workbench-tabs">
              <span className="workbench-tab active">BackendProfile.java</span>
              <span className="workbench-tab">profile.zsh</span>
            </div>
            <span className="workbench-status">zsh / production</span>
          </div>
          <div className="workbench-body">
            <article className="editor-pane" aria-label="Backend profile module">
              <div className="breadcrumbs">src &gt; platform &gt; BackendProfile.java</div>
              <div className="code-lines">
                <div className="code-row">
                  <span className="line-number">1</span>
                  <code><span className="syntax-comment">/**</span></code>
                </div>
                <div className="code-row">
                  <span className="line-number">2</span>
                  <code><span className="syntax-comment"> * My work sits where backend design, cloud infrastructure,</span></code>
                </div>
                <div className="code-row">
                  <span className="line-number">3</span>
                  <code><span className="syntax-comment"> * performance engineering and product delivery meet.</span></code>
                </div>
                <div className="code-row">
                  <span className="line-number">4</span>
                  <code><span className="syntax-comment"> *</span></code>
                </div>
                <div className="code-row">
                  <span className="line-number">5</span>
                  <code><span className="syntax-comment"> * I have led systems from architecture through implementation,</span></code>
                </div>
                <div className="code-row">
                  <span className="line-number">6</span>
                  <code><span className="syntax-comment"> * release, incident analysis and long-term reliability improvement.</span></code>
                </div>
                <div className="code-row">
                  <span className="line-number">7</span>
                  <code><span className="syntax-comment"> */</span></code>
                </div>
                <div className="code-row">
                  <span className="line-number">8</span>
                  <code>
                    <span className="syntax-keyword">public final class</span>{" "}
                    <span className="syntax-type">BackendProfile</span> {"{"}
                  </code>
                </div>
                <div className="code-row">
                  <span className="line-number">9</span>
                  <code>
                    {"  "}
                    <span className="syntax-keyword">private final String</span> ownership ={" "}
                    <span className="syntax-string">"production"</span>;
                  </code>
                </div>
                <div className="code-row">
                  <span className="line-number">10</span>
                  <code>
                    {"  "}
                    <span className="syntax-keyword">private final String</span> role ={" "}
                    <span className="syntax-string">"principal-solutions-architect"</span>;
                  </code>
                </div>
                <div className="code-row">
                  <span className="line-number">11</span>
                  <code>
                    {"  "}
                    <span className="syntax-keyword">private final String</span>[] languages = {"{"}
                    <span className="syntax-string">"Rust"</span>, <span className="syntax-string">"C++"</span>,{" "}
                    <span className="syntax-string">"C"</span>, <span className="syntax-string">"Python"</span>,{" "}
                    <span className="syntax-string">"Go"</span>, <span className="syntax-string">"Java"</span>,{" "}
                    <span className="syntax-string">"Node.js"</span>
                    {"}"};
                  </code>
                </div>
                <div className="code-row">
                  <span className="line-number">12</span>
                  <code>{"}"}</code>
                </div>
              </div>
            </article>
            <aside className="terminal-pane" aria-label="Profile command output">
              <div className="terminal-title">
                <strong>TERMINAL</strong>
                <span>zsh</span>
              </div>
              <p className="terminal-command">
                <span>prem@MacBook-Pro</span> ~/Documents/Projects/backend-platform % portfolio
                profile --experience=14+ --stack=rust,cpp,c,python,go,java,node --mode=production
              </p>
              <div className="terminal-output">
                <code>    Updating production profile index</code>
                <code>      Adding distributed platform architecture</code>
                <code>      Adding workflow and decision orchestration</code>
                <code>      Adding AI / ML and Generative AI integration</code>
                <code>      Adding architecture governance</code>
                <code>             Focus areas:</code>
                {strengths.map((strength) => (
                  <code key={strength}>             - {strength}</code>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected Systems</p>
          <h2>Platforms, workflows and intelligent systems.</h2>
        </div>
        <div className="system-grid">
          {systems.map((system) => (
            <article className="system-card" key={system.name}>
              <h3>{system.name}</h3>
              <p>{system.detail}</p>
              <span>{system.stack}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section practice-section">
        <div className="section-heading">
          <p className="eyebrow">Engineering Practice</p>
          <h2>Architecture that connects product strategy to production outcomes.</h2>
        </div>
        <div className="practice-list">
          {practices.map((practice) => (
            <article className="practice-item" key={practice.title}>
              <h3>{practice.title}</h3>
              <p>{practice.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>A progression from hands-on delivery to platform leadership.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <div>
                <p className="period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
              </div>
              {item.points.length > 0 ? (
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="role-note">{item.status}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>Technical foundations strengthened by data science and AI/ML.</h2>
        </div>
        <div className="education-grid">
          <article>
            <span>Master of Technology / In progress</span>
            <h3>Artificial Intelligence and Machine Learning</h3>
            <p>Birla Institute of Technology and Science, Pilani</p>
            <p>October 2026 - October 2028 (expected)</p>
          </article>
          <article>
            <span>Postgraduate Program</span>
            <h3>Artificial Intelligence and Machine Learning</h3>
            <p>The University of Texas at Austin</p>
            <p>Facilitated by Great Learning</p>
          </article>
          <article>
            <span>Bachelor of Engineering</span>
            <h3>Information Technology</h3>
            <p>Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)</p>
            <p>2007 - 2012</p>
          </article>
        </div>
        <p className="consulting-note">
          Additional consulting exposure includes Millennial Group Inc., Cloud Digital Arts,
          Cargo 3 IVS / FindACargo and independent client delivery from 2014 to 2019.
        </p>
      </section>

      <section className="section learning-section" id="learning" aria-labelledby="learning-heading">
        <div className="section-heading">
          <p className="eyebrow">Ongoing Learning</p>
          <h2 id="learning-heading">Extending systems architecture into AI and data infrastructure.</h2>
        </div>
        <p className="learning-intro">
          Alongside my hands-on architecture career, I am deepening my AI/ML understanding
          through M.Tech study and independent engineering practice. These are active
          learning directions, distinct from the production experience above.
        </p>
        <div className="learning-list">
          {learningAreas.map((area) => (
            <article className="learning-item" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
        <p className="learning-method">
          My approach: understand the mechanisms, implement and evaluate, investigate failures,
          and document reproducible evidence. Architecture first, grounded in hands-on code and
          experiments, with clear limits on what a lab or simulation demonstrates.
        </p>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s talk architecture, systems and engineering.</h2>
          <p>
            Based in Pune, India. Connect with me to exchange ideas on platform architecture,
            distributed systems and hands-on engineering.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
          <a className="button button-secondary" href="mailto:prem.tomar.blr@gmail.com">
            prem.tomar.blr@gmail.com
          </a>
          <a className="button button-quiet" href="tel:+919606379003">
            +91 9606379003
          </a>
          <a className="button button-linkedin-dark" href={linkedinUrl} target="_blank" rel="noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M5.2 7.9H1.4V20h3.8V7.9ZM3.3 2A2.2 2.2 0 1 0 3.3 6.4 2.2 2.2 0 0 0 3.3 2ZM20.8 13.1c0-3.7-2-5.5-4.7-5.5-2.2 0-3.1 1.2-3.7 2v-1.7H8.6V20h3.8v-6c0-1.6.3-3.2 2.3-3.2 2 0 2 1.8 2 3.3V20h3.8l.3-6.9Z" />
            </svg>
            LinkedIn profile
          </a>
        </div>
      </section>
    </main>
  );
}
