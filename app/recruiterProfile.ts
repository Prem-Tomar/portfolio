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
        { title: "AI/ML", meta: "Applied engineering", detail: "ML data processing and shipment decisioning at Swift; document-processing automation contributions at mavQ." },
        { title: "GenAI / RAG / LLM integration", meta: "TAPPP · Professional use", detail: "AWS Bedrock integration, retrieval-augmented generation and LLM-backed decision support within product platforms." },
        { title: "Agentic AI and tooling", meta: "Current skills", detail: "LangChain, LangGraph, Model Context Protocol (MCP), tool calling, agent orchestration, state management, human approvals and recovery workflows." },
        { title: "ML development", meta: "Current skills and applied experience", detail: "Python, NumPy, pandas, SciPy, scikit-learn, PyTorch, TensorFlow, Hugging Face and Jupyter; feature engineering, cross-validation, class imbalance, ensemble methods, calibration and fine-tuning." },
        { title: "Retrieval and vector search", meta: "Skills and prior tooling experience", detail: "Vector databases, document loading, chunking, embeddings and metadata filtering. Broader experience includes LlamaIndex, FAISS, Chroma, Qdrant, Pinecone, Weaviate and pgvector; hands-on recency varies by tool." },
        { title: "Evaluation and MLOps / LLMOps", meta: "Current skills and broader experience", detail: "MLflow and LangSmith for experiment tracking, model evaluation and LLM/agent tracing. Experience also covers RAGAS, retrieval precision, faithfulness, groundedness, tool-call accuracy, prompt versioning, uncertainty calibration and distribution-shift evaluation." },
        { title: "Inference and serving", meta: "Broader technical experience", detail: "vLLM, batching, streaming and prefix caching; assessing serving latency, throughput and resource cost." },
        { title: "AI safety and guardrails", meta: "Broader technical experience", detail: "NeMo Guardrails, input/output validation, tool-access controls and human approval boundaries in AI workflows." },
        { title: "Jev AI / TypeSafe", meta: "Recent tooling exposure", detail: "System One model for typed judgments with confidence estimates, applicable to classification, routing and controlled automation." },
        { title: "AI-assisted engineering", meta: "Current engineering workflow", detail: "Coding agents for bounded diff-set generation, refactoring analysis, test scaffolding and performance investigation, with human review, tests and profiling." },
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
        { title: "Systems performance and reliability", meta: "TAPPP · LINK · Swift", detail: "CPU/memory profiling, concurrent processing and runtime-overhead investigation; hands-on Go modernization, Rust processing paths and incident diagnosis informing architecture decisions." },
        { title: "Storage and HPC integrations", meta: "DDN · Current work", detail: "EXAScaler Management Framework and the Lustre HTTP interface for client integrations, with attention to I/O behavior, data integrity and reliability for AI/HPC workloads." },
        { title: "Architecture governance", meta: "Swift · mavQ · LINK · TAPPP · DDN", detail: "Service boundaries, data contracts, integration trade-offs and release impact, reviewed through RFCs, ADRs, HLD/LLD, sequence and process diagrams and implementation evidence." },
        { title: "Engineering and delivery leadership", detail: "Concurrent project leadership grounded in hands-on system design and implementation; stakeholder alignment, priorities, dependencies, delivery risks and release readiness across engineering initiatives." },
        { title: "Operational ownership and team development", detail: "Production diagnosis, observability and incident RCA carried into corrective engineering, runbooks and engineering-to-support handover; mentoring through design, code and production-readiness reviews." },
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
        { title: "Generative AI (GenAI), RAG and LLM integration", meta: "TAPPP · Professional engineering", detail: "Integrated AWS Bedrock and retrieval-augmented generation for large language model (LLM) decision support." },
        { title: "ML-driven shipment intelligence", meta: "Swift · Professional engineering", detail: "Built Rust data-processing paths feeding ML models and shipment-optimization logic." },
        { title: "Intelligent Document Processing", meta: "mavQ · Professional contribution", detail: "Contributed to automated document processing within the product platform." },
        { title: "ML experiments and research", meta: "Python / scikit-learn · Experimental work", detail: "Ensemble classification experiments and synthetic-media detection research, including calibrated uncertainty and distribution-shift evaluation. Separate from production delivery.", links: [{ label: "Weight prediction notebook", href: "https://github.com/Prem-Tomar/swift_weight_prediction_model", newTab: true }, { label: "Forensic modeling research", href: "https://github.com/Prem-Tomar/prob_forensic_modeling", newTab: true }] },
        { title: "Agentic AI and AI-assisted engineering", meta: "Current skills and workflow", detail: "LangChain, LangGraph and MCP for agent orchestration and tool integration; human review, tests and profiling for bounded coding-agent tasks, retaining architecture and code ownership." },
      ],
    },
    {
      command: "projects", label: "Project details", aliases: ["project"],
      items: [
        { title: "BYOC / BYOP Orchestration", meta: "Swift", detail: "Defined payment, courier and partner boundaries so orchestration could be configured through stable contracts; aligned integration dependencies and release plans across commerce and logistics work." },
        { title: "SenseEngine", meta: "Swift", detail: "Architected shipment intelligence supporting 300K+ monthly orders, combining Rust data-processing paths and ML-driven optimization to reduce cost per shipment while coordinating wider platform delivery." },
        { title: "Partner Integration Modernization", meta: "LINK", detail: "Designed migration and REST integration contracts for GoDaddy, Shopify, Clover, Square, Promenade and LightSpeed. Connected compatibility and data integrity with Go modernization, release controls and incident-driven reliability improvements." },
        { title: "Shared Runtime and Onboarding", meta: "TAPPP", detail: "Consolidated client-specific capabilities into shared modules, contracts and configurable onboarding across DTV, Globo, FIFA, Roku, BetPlay and Blackhawk ecosystems, aligning platform standards with concurrent client releases." },
        { title: "Customer Experience and Document Automation", meta: "mavQ", detail: "Shaped service boundaries and shared components for automation modules; led AWS Connect delivery and contributed document-processing capabilities with coordinated testing, release readiness and support handover." },
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
        { title: "Formalize and extend AI/ML expertise", meta: "Ongoing · M.Tech AI/ML · BITS Pilani", detail: "Build formal academic depth on existing AI/ML skills and applied engineering experience." },
        { title: "Explore Next-Concept Modeling (NCM)", meta: "Learning and research interest", detail: "Following Stanford Hazy Research's coarse-to-fine generation framework, with curiosity about parallel prediction and inference efficiency.", links: [{ label: "Stanford research overview", href: "https://hazyresearch.stanford.edu/blog/2026-10-12-ncm", newTab: true }] },
        { title: "Post-M.Tech: M.Tech in Robotics", meta: "Future academic goal", detail: "Explore a further M.Tech focused on Robotics after the current AI/ML programme." },
        { title: "Doctor of Business Administration (DBA)", meta: "Longer-term academic goal", detail: "Pursue doctoral study in business administration as part of the post-M.Tech academic path." },
        { title: "Advance systems and storage engineering", meta: "Independent study and planned labs", detail: "Deepen Rust, C and selected C++ for Linux, Lustre, parallel I/O, HPC and AI data paths. Investigate NUMA, RDMA, low-latency behaviour, failure recovery and reproducible performance evidence." },
        { title: "Extend agent reliability and evaluation", meta: "Continued development", detail: "Build on current LangChain, LangGraph, MCP, MLflow and LangSmith skills with deeper workflow evaluation, recovery testing and inference-serving practice." },
        { title: "Develop public engineering projects", meta: "Project roadmaps", detail: "Continue Paykit's Rust financial-domain and Go service work. Evaluate forensic-model generalization, calibration and provenance with explicit evidence before adopting stronger models." },
      ],
    },
    { command: "resume", label: "Resume", aliases: ["cv"], items: [{ title: "Full resume", links: [{ label: "Open resume (PDF)", href: resumeUrl, newTab: true }] }] },
    recruiterDetails,
  ];
}
