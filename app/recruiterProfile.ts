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
      note: "Dates identify the roles where a skill is documented; they do not represent continuous years of use.",
      items: [
        { title: "Rust", meta: "Professional use", points: [
          "TAPPP · Feb 2024 – Oct 2026: event and insight processing workers.",
          "Swift · Apr 2021 – Aug 2022: high-volume shipment processing paths feeding ML models.",
          "D-SYS · Senior role, Mar 2018 – Nov 2020: Rust-backed engineering for ML data collection and product experiments.",
        ] },
        { title: "C++", meta: "Core systems-programming skill / ongoing study", detail: "Systems programming, concurrent processing and performance investigation. Selected C++ is also part of the ongoing Linux and storage study programme." },
        { title: "C", meta: "Core systems-programming skill / ongoing study", detail: "Systems programming and performance investigation, with ongoing independent study in Linux systems programming, storage and low-latency data paths." },
        { title: "Python / FastAPI / Django", meta: "Professional use", points: [
          "LINK · May 2023 – Jan 2024 and mavQ · Aug 2022 – May 2023: Python/FastAPI backend environments.",
          "Swift · Apr 2021 – Aug 2022: ML and shipment-data processing environment.",
          "D-SYS · Dec 2014 – Nov 2020: Django-backed applications, data preparation, analysis and model experimentation.",
          "Aadi Infotech · Feb 2010 – Feb 2014: Python/Django APIs and administrative tools.",
        ] },
        { title: "Go / Golang", meta: "Professional use", points: [
          "TAPPP · Feb 2024 – Oct 2026: Java-to-Go modernization and asynchronous processing.",
          "LINK · May 2023 – Jan 2024: modernization of selected Java and Node.js components to Go.",
          "Swift · Apr 2021 – Aug 2022: resilient microservices and logistics API boundaries.",
          "D-SYS · Senior role, Mar 2018 – Nov 2020: Go-backed engineering in data and intelligent product work.",
        ] },
        { title: "Java / Spring Boot", meta: "Professional use", points: [
          "TAPPP · Feb 2024 – Oct 2026: distributed backend platforms and Java-to-Go modernization.",
          "LINK · May 2023 – Jan 2024, mavQ · Aug 2022 – May 2023 and Swift · Apr 2021 – Aug 2022: backend service environments.",
          "D-SYS · Dec 2014 – Feb 2018 and Aadi Infotech · Feb 2010 – Feb 2014: Java-backed client, enterprise and web systems.",
        ] },
        { title: "Node.js", meta: "Professional use", points: [
          "LINK · May 2023 – Jan 2024: selected Node.js components modernized to Go.",
          "mavQ · Aug 2022 – May 2023 and Swift · Apr 2021 – Aug 2022: Node.js in backend delivery environments.",
          "D-SYS · Senior role, Mar 2018 – Nov 2020: Node.js/Express foundations for safety and security workflows.",
        ] },
        { title: "AWS Bedrock / RAG / LLM integration", meta: "Professional use", detail: "TAPPP · Feb 2024 – Oct 2026: Bedrock integration and RAG/LLM decision support. Agentic orchestration and evaluation remain separate ongoing/planned study." },
      ],
    },
    {
      command: "projects", label: "Project details", aliases: ["project"],
      items: [
        { title: "BYOC / BYOP orchestration", meta: "Swift · Platform Lead · Apr 2021 – Aug 2022", detail: "Built configurable BYOC and BYOP platforms across payment, courier and partner service boundaries, with backward-compatible APIs." },
        { title: "SenseEngine", meta: "Swift · Platform Lead · Apr 2021 – Aug 2022", detail: "ML-driven shipment intelligence supporting 300K+ monthly orders. Rust data-processing paths fed ML workloads; optimization logic reduced cost per shipment." },
        { title: "Partner integration modernization", meta: "LINK · Senior Software Engineer / Engineering Mentor · May 2023 – Jan 2024", detail: "REST integrations for GoDaddy, Shopify, Clover, Square, Promenade and LightSpeed, including compatibility and data-integrity controls. Selected Java and Node.js jobs were modernized to Go." },
        { title: "Shared runtime and onboarding", meta: "TAPPP · Senior Architect / Principal Solutions Architect · Feb 2024 – Oct 2026", detail: "Reusable modules, shared service contracts and configurable onboarding across ecosystems including DTV, Globo, FIFA, Roku, BetPlay and Blackhawk Network." },
        { title: "Customer experience and document automation", meta: "mavQ · Software Development Lead · Aug 2022 – May 2023", detail: "Delivered AWS Connect capabilities and contributed to Intelligent Document Processing automation, owning modules through service design, testing, release and production support." },
      ],
    },
    {
      command: "github", label: "GitHub repos", aliases: ["repos", "repositories", "code"],
      note: "Public repository snapshots checked 31 October 2026. Research and curriculum work are labelled separately from delivered professional projects.",
      items: [
        { title: "paykit-money", meta: "Rust · Library · Active development", detail: "Exact money and currency primitives using signed i128 minor units, checked arithmetic, explicit rounding, optional Serde support and payment-fee quotes.", links: [{ label: "Source and README", href: "https://github.com/Prem-Tomar/paykit-money", newTab: true }] },
        { title: "paykit-domain", meta: "Rust · Domain library", detail: "Payment lifecycle types and checked authorization, capture, cancellation and void transitions, with amount, currency and payment-method policies.", links: [{ label: "Source and README", href: "https://github.com/Prem-Tomar/paykit-domain", newTab: true }] },
        { title: "payment-api", meta: "Go / Gin · Service foundation in progress", detail: "Paykit API boundary with lifecycle handling, health/readiness routes, request IDs, access logging, JSON helpers, body-size controls and runtime configuration.", links: [{ label: "Source and README", href: "https://github.com/Prem-Tomar/payment-api", newTab: true }] },
        { title: "prob_forensic_modeling", meta: "Python · Image/video research baselines", detail: "Synthetic-media detection research with image/video models, calibrated uncertainty, provenance evidence and distribution-shift evaluation. Research results do not establish production assurance.", links: [{ label: "Source and evaluation notes", href: "https://github.com/Prem-Tomar/prob_forensic_modeling", newTab: true }] },
        { title: "swift_weight_prediction_model", meta: "Python / scikit-learn · Jupyter notebook", detail: "Weight-prediction experiment comparing tree and nearest-neighbour classifiers, with a soft-voting Random Forest and Gradient Boosting ensemble.", links: [{ label: "View notebook repository", href: "https://github.com/Prem-Tomar/swift_weight_prediction_model", newTab: true }] },
        { title: "data-reliability-platform", meta: "Learning programme · Python and data-platform architecture", detail: "Project roadmap, coaching materials, architecture, delivery gates and a runnable introductory Python component. The production platform is a planned outcome.", links: [{ label: "Roadmap and source", href: "https://github.com/Prem-Tomar/data-reliability-platform", newTab: true }] },
        { title: "production-data-ai-engineering", meta: "Learning curriculum · Python, data platforms and applied AI", detail: "A database-engineering-to-data/AI curriculum with project specifications, practical gates and evidence templates. The target application and cloud deployments are not yet implemented.", links: [{ label: "Curriculum and roadmap", href: "https://github.com/Prem-Tomar/production-data-ai-engineering", newTab: true }] },
        { title: "fieldops-mastery", meta: "Learning curriculum · JavaScript / TypeScript full-stack track", detail: "A maintenance-operations learning project covering React, React Native, Node.js, PostgreSQL and offline synchronization. Current content comprises curriculum, assessment and contribution workflows.", links: [{ label: "Curriculum and architecture", href: "https://github.com/Prem-Tomar/fieldops-mastery", newTab: true }] },
        { title: "portfolio", meta: "TypeScript / React / Vite · Static GitHub Pages website", detail: "The source for this portfolio, including the scrolling career timeline, profile console and resume download.", links: [{ label: "View source", href: "https://github.com/Prem-Tomar/portfolio", newTab: true }] },
      ],
    },
    {
      command: "plans", label: "Future plans", aliases: ["goals", "future", "roadmap"],
      note: "Ongoing and planned development; these are goals, not completed professional outcomes.",
      items: [
        { title: "Deepen AI/ML foundations", meta: "Ongoing · M.Tech AI/ML · BITS Pilani", detail: "Continue the October 2026 – October 2028 (expected) programme and connect model development, training and evaluation to hands-on engineering practice." },
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
