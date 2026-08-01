const metrics = [
  { value: "14+", label: "years in software engineering" },
  { value: "7M+", label: "daily users served by recent platforms" },
  { value: "62%", label: "production issue reduction through RCA" },
  { value: "40%", label: "shipment cost reduction with SenseEngine" },
];

const strengths = [
  "Java / Spring Boot service architecture",
  "Go services and concurrency-focused modernization",
  "Rust workers for event and data processing",
  "Node.js APIs, integrations and internal tooling",
  "Distributed systems architecture",
  "Microservices and REST contracts",
  "Event-driven systems and data pipelines",
  "AWS, Kubernetes and CI/CD",
  "Performance profiling and observability",
  "Production RCA and reliability",
  "Mentoring and architecture reviews",
];

const systems = [
  {
    name: "Runtime and Micro-App Platform",
    detail:
      "Plug-and-play platform for client-specific modules, adaptive UI flows, rapid onboarding and low-change delivery across large customer ecosystems.",
    stack: "Java, Spring Boot, Go, AWS, Kubernetes, Redis, REST APIs",
  },
  {
    name: "Event and Insight Processing",
    detail:
      "Rust workers that process millions of event and insight payloads, normalize analytics-ready records and dispatch them into big-data pipelines.",
    stack: "Rust, Go, AWS, event streams, data pipelines, observability",
  },
  {
    name: "Commerce and Logistics Platform",
    detail:
      "Checkout, payments, courier orchestration, merchant workflows, shipment intelligence and nationwide address validation at production scale.",
    stack: "Java, Go, Node.js, Angular, MySQL, MongoDB, AWS",
  },
];

const experience = [
  {
    role: "Principal Solutions Architect",
    company: "SwissClear Services Global Pvt. Ltd. (TAPPP)",
    period: "Feb 2024 - Present",
    points: [
      "Architected backend platforms serving 7M+ daily users across media, sports, fintech, betting and engagement products.",
      "Reduced API latency and improved throughput through Java-to-Go modernization, async processing, private AWS paths and platform modernization.",
      "Led architecture reviews, code reviews, profiling, production diagnosis, RCA and reliability follow-through.",
    ],
  },
  {
    role: "Engineering Mentor and Senior Software Engineer",
    company: "Link to Any",
    period: "May 2023 - Feb 2024",
    points: [
      "Built backend services and internal tools for migrations, partner integrations, QA traceability and operations.",
      "Delivered REST integrations for GoDaddy, Shopify, Clover, Square, Promenade and LightSpeed.",
      "Improved system efficiency by 39% and reduced production issues by 62% through observability, automation and durable fixes.",
    ],
  },
  {
    role: "Software Development Lead",
    company: "MavQ",
    period: "Aug 2021 - May 2023",
    points: [
      "Led development of a no-code automation platform with API-first services and reusable abstractions.",
      "Created shared database and platform capabilities, reducing service rollout time by 34%.",
      "Delivered AWS Connect CXC work and contributed to Intelligent Document Processing automation systems.",
    ],
  },
  {
    role: "Platform Lead / Senior Software Engineer",
    company: "Swift",
    period: "Mar 2018 - Aug 2021",
    points: [
      "Built e-commerce platform capabilities covering checkout, payments, integrations, courier orchestration and shipment intelligence.",
      "Migrated selected Java components to Go-based services for performance gains, lower overhead and stronger concurrency control.",
      "Created SenseEngine, reducing shipment cost by 40% across 300K+ monthly orders through ML-driven shipment intelligence.",
    ],
  },
  {
    role: "Software Developer",
    company: "Aadi Infotech Pvt. Ltd., Gwalior",
    period: "Feb 2010 - Nov 2014",
    points: [
      "Built and supported transportation, education, MLM, social/image-editing, mobile and internal-tool products.",
      "Progressed from implementation support into full software development ownership across Java, MySQL, Apache/Linux and .NET/C# systems.",
      "Redesigned standalone applications into distributed/thin-client Java systems and supported domestic and international clients.",
    ],
  },
  {
    role: "Full-Stack / Mobile Developer",
    company: "Freelance Consulting Engagements",
    period: "Dec 2014 - Feb 2018",
    points: [
      "Delivered mobile, backend, database and marketplace capabilities for Millennial Group Inc., Cloud Digital Arts and Cargo 3 IVS / FindACargo.",
      "Covered requirements analysis, API/service implementation, production support, release coordination and server operations.",
      "Built Android/iOS applications, P2P/server components, .NET MVC marketplace features and operational workflows end to end.",
    ],
  },
];

const practices = [
  {
    title: "Architecture with operational accountability",
    text: "I define service boundaries, data flows and integration contracts with production support, scaling behavior and security controls in mind.",
  },
  {
    title: "Performance work grounded in evidence",
    text: "I use profiling, traces, logs and throughput data to guide latency reduction, CPU and memory tuning, async processing and platform modernization.",
  },
  {
    title: "AI as a controlled engineering accelerator",
    text: "I use AI tools for small, reviewable diff-set generation, refactoring analysis, unit-test scaffolding, static-analysis triage and performance investigation, while retaining ownership through review, tests and profiling.",
  },
];

export default function Home() {
  const whatsappUrl =
    "https://wa.me/919606379003?text=Hi%20Prem%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.";

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
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Principal Solutions Architect / Senior Backend Engineer</p>
          <h1>Building resilient backend platforms for high-scale product teams.</h1>
          <p className="hero-copy">
            I design and modernize Java/Spring Boot, Go, Rust and cloud-native systems with strong
            attention to architecture, performance, observability, secure delivery and production
            reliability.
          </p>
          <div className="hero-actions" aria-label="Portfolio actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Contact me
            </a>
            <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
              Download resume
            </a>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Impact metrics">
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
          <h2>Senior backend architecture, kept close to production reality.</h2>
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
                    <span className="syntax-string">"senior-backend-platform"</span>;
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
                <code>      Adding Java / Spring Boot service architecture</code>
                <code>      Adding Go runtime modernization</code>
                <code>      Adding Rust event workers</code>
                <code>      Adding Node.js APIs and tooling</code>
                <code>             Focus areas:</code>
                {strengths.slice(4).map((strength) => (
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
          <h2>Platforms, data flows and runtime systems.</h2>
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
          <h2>Architecture decisions that teams can operate.</h2>
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
          <h2>Company-wise engineering leadership.</h2>
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

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Open to senior backend, platform and architecture roles.</h2>
          <p>
            Based in Pune, India. Remote collaboration is preferred, with openness to relocate to
            Bengaluru, Hyderabad, NCR or international locations for the right senior engineering
            opportunity.
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
        </div>
      </section>
    </main>
  );
}
