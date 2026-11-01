import type { ProfileTopic } from "./ProfileConsole";

// Facts: user-confirmed recruiter details, the checked-in resume, and public READMEs.
// Provenance is recorded in design/recruiter-profile-sources.md.
export function getRecruiterTopics(resumeUrl: string): ProfileTopic[] {
  const recruiterDetails: ProfileTopic = {
    command: "status", label: "Recruiter details", aliases: ["about", "availability", "notice", "notice-period", "dob", "open-to-work"],
    items: [
      { title: "Open to work", detail: "No" },
      { title: "Notice period", detail: "30 days" },
      { title: "Professional experience", detail: "14+ years in architecture and engineering", links: [{ label: "Career timeline", href: "#experience" }] },
      { title: "Date of birth", detail: "14 February 1989" },
    ],
  };
  return [
    {
      command: "skills", label: "Skill experience", aliases: ["experience", "languages", "stack"],
      items: [
        { title: "Rust", meta: "Professional use", points: [
          "TAPPP: event and insight processing workers.",
          "Swift: high-volume shipment processing paths feeding ML models.",
        ] },
        { title: "C++", meta: "Core systems-programming skill / ongoing study", detail: "Systems programming, concurrent processing and performance investigation. Selected C++ is also part of the ongoing Linux and storage study programme." },
        { title: "C", meta: "Core systems-programming skill / ongoing study", detail: "Systems programming and performance investigation, with ongoing independent study in Linux systems programming, storage and low-latency data paths." },
        { title: "Python / FastAPI / Django", meta: "Professional use", points: [
          "LINK and mavQ: Python/FastAPI services.",
          "Swift: ML and shipment-data processing.",
          "D-SYS: Django-backed applications, analytics, structured data preparation and reporting.",
          "Aadi Infotech: Python/Django APIs and administrative tools.",
        ] },
        { title: "Go / Golang", meta: "Professional use", points: [
          "TAPPP: Java-to-Go modernization and asynchronous processing.",
          "LINK: modernization of selected Java and Node.js components to Go.",
          "Swift: resilient microservices and logistics API boundaries.",
        ] },
        { title: "Java / Spring Boot", meta: "Professional use", points: [
          "TAPPP, LINK, mavQ and Swift: distributed backend services.",
          "D-SYS and Aadi Infotech: Java-backed client, enterprise and web systems.",
        ] },
        { title: "Node.js", meta: "Professional use", points: [
          "LINK, mavQ and Swift: backend services and integrations.",
          "D-SYS: Node.js/Express foundations for safety and security workflows.",
        ] },
        { title: "AWS Bedrock / RAG / LLM integration", meta: "TAPPP · Professional use", detail: "Retrieval-augmented decision support and LLM integration." },
      ],
    },
    {
      command: "ai", label: "AI/ML exposure", aliases: ["ml", "ai/ml", "exposure"],
      items: [
        { title: "Sentiment analysis", meta: "Swift · TAPPP · Professional experience" },
        { title: "Other application exposure", points: [
          "Fraud detection",
          "Customer heat profiling",
          "Recommendation engines",
          "Live translation engines",
          "Event simulation",
        ] },
        { title: "Generative AI, RAG and LLM integration", meta: "TAPPP · Professional engineering", detail: "Integrated AWS Bedrock and retrieval-augmented generation for LLM decision support." },
        { title: "ML-driven shipment intelligence", meta: "Swift · Professional engineering", detail: "Built Rust data-processing paths feeding ML models and shipment-optimization logic." },
        { title: "Intelligent Document Processing", meta: "mavQ · Professional contribution", detail: "Contributed to automated document processing within the product platform." },
        { title: "ML experiments and research", meta: "Python / scikit-learn · Experimental work", detail: "Ensemble classification experiments and synthetic-media detection research, including calibrated uncertainty and distribution-shift evaluation. Separate from production delivery.", links: [{ label: "Weight prediction notebook", href: "https://github.com/Prem-Tomar/swift_weight_prediction_model", newTab: true }, { label: "Forensic modeling research", href: "https://github.com/Prem-Tomar/prob_forensic_modeling", newTab: true }] },
        { title: "AI-assisted engineering and agent tooling", meta: "Current workflow", detail: "Bounded coding-agent tasks with human review, tests and profiling. Agent orchestration, evaluation and MLOps/LLMOps remain ongoing or planned study.", links: [{ label: "Learning roadmap", href: "#learning" }] },
      ],
    },
    {
      command: "projects", label: "Project details", aliases: ["project"],
      items: [
        { title: "BYOC / BYOP Orchestration", meta: "Swift", detail: "Configurable payment, courier and partner service boundaries, with backward-compatible APIs." },
        { title: "SenseEngine", meta: "Swift", detail: "Shipment intelligence supporting 300K+ monthly orders, combining data processing and ML-driven optimization to reduce cost per shipment." },
        { title: "Partner Integration Modernization", meta: "LINK", detail: "REST integrations for GoDaddy, Shopify, Clover, Square, Promenade and LightSpeed, with compatibility and data-integrity controls across platform migrations." },
        { title: "Shared Runtime and Onboarding", meta: "TAPPP", detail: "Reusable modules, shared service contracts and configurable onboarding across ecosystems including DTV, Globo, FIFA, Roku, BetPlay and Blackhawk Network." },
        { title: "Customer Experience and Document Automation", meta: "mavQ", detail: "AWS Connect capabilities and document-processing automation, with ownership of service boundaries, testing and release quality." },
      ],
    },
    {
      command: "github", label: "Open Source", aliases: ["repos", "repositories", "code", "opensource", "open-source"],
      items: [
        { title: "Paykit Money", meta: "Rust · Library · Active development", detail: "Exact money and currency primitives using signed i128 minor units, checked arithmetic, explicit rounding, optional Serde support and payment-fee quotes.", links: [{ label: "Source and README", href: "https://github.com/Prem-Tomar/paykit-money", newTab: true }] },
        { title: "Paykit Domain", meta: "Rust · Domain library", detail: "Payment lifecycle types and checked authorization, capture, cancellation and void transitions, with amount, currency and payment-method policies.", links: [{ label: "Source and README", href: "https://github.com/Prem-Tomar/paykit-domain", newTab: true }] },
        { title: "Payment API", meta: "Go / Gin · Service foundation in progress", detail: "Paykit API boundary with lifecycle handling, health/readiness routes, request IDs, access logging, JSON helpers, body-size controls and runtime configuration.", links: [{ label: "Source and README", href: "https://github.com/Prem-Tomar/payment-api", newTab: true }] },
        { title: "Probabilistic Forensic Modeling", meta: "Python · Image/video research baselines", detail: "Synthetic-media detection research with image/video models, calibrated uncertainty, provenance evidence and distribution-shift evaluation. Research results do not establish production assurance.", links: [{ label: "Source and evaluation notes", href: "https://github.com/Prem-Tomar/prob_forensic_modeling", newTab: true }] },
        { title: "Swift Weight Prediction Model", meta: "Python / scikit-learn · Jupyter notebook", detail: "Weight-prediction experiment comparing tree and nearest-neighbour classifiers, with a soft-voting Random Forest and Gradient Boosting ensemble.", links: [{ label: "View notebook repository", href: "https://github.com/Prem-Tomar/swift_weight_prediction_model", newTab: true }] },
        { title: "Data Reliability Platform", meta: "Learning programme · Python and data-platform architecture", detail: "Project roadmap, coaching materials, architecture, delivery gates and a runnable introductory Python component. The production platform is a planned outcome.", links: [{ label: "Roadmap and source", href: "https://github.com/Prem-Tomar/data-reliability-platform", newTab: true }] },
        { title: "Production Data & AI Engineering", meta: "Learning curriculum · Python, data platforms and applied AI", detail: "A database-engineering-to-data/AI curriculum with project specifications, practical gates and evidence templates. The target application and cloud deployments are not yet implemented.", links: [{ label: "Curriculum and roadmap", href: "https://github.com/Prem-Tomar/production-data-ai-engineering", newTab: true }] },
        { title: "FieldOps Mastery", meta: "Learning curriculum · JavaScript / TypeScript full-stack track", detail: "A maintenance-operations learning project covering React, React Native, Node.js, PostgreSQL and offline synchronization. Current content comprises curriculum, assessment and contribution workflows.", links: [{ label: "Curriculum and architecture", href: "https://github.com/Prem-Tomar/fieldops-mastery", newTab: true }] },
      ],
    },
    {
      command: "plans", label: "Future plans", aliases: ["goals", "future", "roadmap"],
      note: "Ongoing and planned development; these are goals, not completed professional outcomes.",
      items: [
        { title: "Deepen AI/ML foundations", meta: "Ongoing · M.Tech AI/ML · BITS Pilani", detail: "Connect model development, training and evaluation to hands-on engineering practice." },
        { title: "Post-M.Tech: M.Tech in Robotics", meta: "Future academic goal", detail: "Explore a further M.Tech focused on Robotics after the current AI/ML programme." },
        { title: "Doctor of Business Administration (DBA)", meta: "Longer-term academic goal", detail: "Pursue doctoral study in business administration as part of the post-M.Tech academic path." },
        { title: "Advance systems and storage engineering", meta: "Independent study and planned labs", detail: "Deepen Rust, C and selected C++ for Linux, Lustre, parallel I/O, HPC and AI data paths. Investigate NUMA, RDMA, low-latency behaviour, failure recovery and reproducible performance evidence." },
        { title: "Build controlled agent workflows", meta: "Ongoing / planned", detail: "Explore tool calling, MCP, LangChain/LangGraph, explicit permissions, state, human approvals, recovery and evaluations; extend MLOps/LLMOps and inference-serving understanding." },
        { title: "Develop public engineering projects", meta: "Project roadmaps", detail: "Continue Paykit's Rust financial-domain and Go service work. Evaluate forensic-model generalization, calibration and provenance with explicit evidence before adopting stronger models." },
      ],
    },
    { command: "resume", label: "Resume", aliases: ["cv"], items: [{ title: "Full resume", links: [{ label: "Open resume (PDF)", href: resumeUrl, newTab: true }] }] },
    recruiterDetails,
  ];
}
