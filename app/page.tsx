const metrics = [
  { value: "14+ years", label: "in product engineering, platform architecture and technical leadership" },
  { value: "7M+ users", label: "served daily across high-scale media, fintech and engagement ecosystems" },
  { value: "300K+ orders", label: "optimized monthly through shipment intelligence and ML-driven decisioning" },
  { value: "End to end", label: "from platform roadmap and architecture governance to production RCA" },
];

const strengths = [
  "Go, Java / Spring Boot, Python / FastAPI, Rust and Node.js",
  "Distributed systems, microservices, REST and gRPC-style contracts",
  "BPMN, Camunda, Temporal and workflow orchestration",
  "Kafka-style event streams and analytics-ready data pipelines",
  "AWS, Kubernetes, Aurora / PostgreSQL, MongoDB and Redis / Valkey",
  "Observability, performance profiling and production RCA",
  "AWS Bedrock, RAG / LLM integrations and ML-driven decisioning",
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
    role: "Principal Solutions Architect",
    company: "SwissClear Services Global Pvt. Ltd. (TAPPP)",
    period: "Feb 2024 - Present",
    points: [
      "Direct product architecture and platform engineering for distributed backend, runtime, workflow and micro-app systems serving 7M+ daily users.",
      "Drive platform consolidation through reusable modules, shared contracts, API standards, configurable workflows and common onboarding patterns.",
      "Lead Java-to-Go modernization, workflow orchestration, AI/ML integrations, architecture governance, release planning and production RCA.",
    ],
  },
  {
    role: "Engineering Mentor and Senior Software Engineer",
    company: "Link to Any",
    period: "May 2023 - Feb 2024",
    points: [
      "Built distributed backend systems and internal tools for data migrations, partner integrations, workflow automation, QA traceability and operations.",
      "Designed reliable REST integrations for GoDaddy, Shopify, Clover, Square, Promenade and LightSpeed.",
      "Modernized selected Java and Node.js components to Go and strengthened observability, CI/CD governance and RCA-led fixes.",
    ],
  },
  {
    role: "Software Development Lead",
    company: "MavQ",
    period: "Aug 2021 - May 2023",
    points: [
      "Led product delivery for no-code automation and workflow-oriented platform capabilities using API-first architecture and reusable abstractions.",
      "Owned complex modules from service design and data modeling through testing, release planning and production support.",
      "Delivered AWS Connect customer-experience capabilities and contributed to Intelligent Document Processing automation.",
    ],
  },
  {
    role: "Platform Lead / Senior Software Engineer",
    company: "Swift",
    period: "Nov 2019 - Aug 2021",
    points: [
      "Led checkout, payment and courier orchestration, merchant workflows, partner integrations and shipment-intelligence capabilities.",
      "Designed resilient Java and Go microservices and Rust-backed processing paths for large-scale logistics datasets.",
      "Created SenseEngine, supporting ML-driven shipment optimization across 300K+ monthly orders.",
    ],
  },
  {
    role: "Senior Full-Stack Developer / Full-Stack & Mobile Developer",
    company: "D-SYS Data Solutions, Gwalior",
    period: "Dec 2014 - Nov 2019",
    points: [
      "Delivered transportation and e-way billing, safety/security, mobile, marketplace, database and production-server systems.",
      "Expanded Python, Go and Rust work into data analysis, ML data collection, sentiment signals, recommendation logic and multi-model experiments.",
      "Owned backend and application features from design through implementation, deployment support and client-facing resolution.",
    ],
  },
  {
    role: "Software Developer",
    company: "Aadi Infotech Pvt. Ltd., Gwalior",
    period: "Feb 2010 - Nov 2014",
    points: [
      "Progressed from intern/associate to software developer across transportation, education, social/image-editing, mobile and enterprise products.",
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
];

export default function Home() {
  const whatsappUrl =
    "https://wa.me/919606379003?text=Hi%20Prem%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.";
  const linkedinUrl = "https://www.linkedin.com/in/ppst89/";

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-background" aria-hidden="true">
          <div className="signal-grid">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="system-map">
            <div className="node node-primary">Java Services</div>
            <div className="node">Go Runtime</div>
            <div className="node">Rust Workers</div>
            <div className="node">AWS / Kubernetes</div>
            <div className="node">Data Pipelines</div>
          </div>
        </div>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#top" className="brand">
            Prem P S Tomar
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Senior Architect &amp; Engineering Leader</p>
          <h1>Building platforms, teams and delivery systems that perform at scale.</h1>
          <p className="hero-copy">
            I bring 14+ years of hands-on product engineering and platform architecture experience
            across distributed systems, workflow platforms, cloud-native backends and integration-heavy
            products - translating complex stakeholder needs into reliable technology and execution.
          </p>
          <div className="hero-actions" aria-label="Portfolio actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Contact me
            </a>
            <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
              Download resume
            </a>
            <a className="button button-linkedin" href={linkedinUrl} target="_blank" rel="noreferrer">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M5.2 7.9H1.4V20h3.8V7.9ZM3.3 2A2.2 2.2 0 1 0 3.3 6.4 2.2 2.2 0 0 0 3.3 2ZM20.8 13.1c0-3.7-2-5.5-4.7-5.5-2.2 0-3.1 1.2-3.7 2v-1.7H8.6V20h3.8v-6c0-1.6.3-3.2 2.3-3.2 2 0 2 1.8 2 3.3V20h3.8l.3-6.9Z" />
              </svg>
              LinkedIn
            </a>
          </div>
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
                    <span className="syntax-keyword">private final String</span>[] runtimes = {"{"}
                    <span className="syntax-string">"Java"</span>, <span className="syntax-string">"Go"</span>,{" "}
                    <span className="syntax-string">"Rust"</span>, <span className="syntax-string">"Node.js"</span>
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
                profile --experience=14+ --stack=java,go,rust,node --mode=production
              </p>
              <div className="terminal-output">
                <code>    Updating production profile index</code>
                <code>      Adding distributed platform architecture</code>
                <code>      Adding workflow and decision orchestration</code>
                <code>      Adding AI / ML-enabled engineering</code>
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
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
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
            <span>Postgraduate Program</span>
            <h3>Data Science and AI/ML</h3>
            <p>Great Learning</p>
          </article>
          <article>
            <span>Bachelor of Engineering</span>
            <h3>Information Technology</h3>
            <p>Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)</p>
          </article>
        </div>
        <p className="consulting-note">
          Additional consulting exposure includes Millennial Group Inc., Cloud Digital Arts,
          Cargo 3 IVS / FindACargo and independent client delivery from 2014 to 2019.
        </p>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build dependable platforms and high-performing engineering teams.</h2>
          <p>
            Based in Pune, India. Connect with me about senior architecture, platform engineering
            and product engineering leadership opportunities.
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
