# Portfolio and Resume Handoff

Last updated: 31 October 2026. Owner: Prem P S Tomar.

## Project

- Repository: git@github.com:Prem-Tomar/portfolio.git
- Website: https://premtomar.com
- React 19 + Vite 8 + TypeScript; static output in `dist/`.
- Main content: `app/page.tsx`; styles: `app/globals.css`; entry: `src/main.tsx`.
- Hero asset: `public/architecture-fabric.png`; provenance: `design/hero-image-prompt.txt`.
- Resume download: `public/resume.pdf`, linked with `?v=20261031-r7`.
- Editable resume and authoring tools: `resume/`.
- GitHub Actions: `.github/workflows/deploy.yml`, triggered by pushes to `main`.
- Pages repository setting is `build_type: workflow` (Source: GitHub Actions).
  On 31 October it was corrected from legacy branch publishing, which competed
  with the workflow and served raw `/src/main.tsx` with a missing `/resume.pdf`.
  Keep workflow publishing enabled; do not select "Deploy from a branch".
- Domain config: `public/CNAME`. Keep root `CNAME` consistent.
- No backend, visitor counter, account system or secret is needed to run this site.

## Latest Scope

The user requested Generative AI, agentic AI and tooling coverage in the resume,
website and Naukri profile, while preserving existing skills. The current site
adds practical AI-assisted engineering and explicit ongoing learning sections.
The latest three-page PDF and DOCX retain all corrected dates and D-SYS content.
The user explicitly authorized publication and asked for this portable handoff.

Local verification completed: production build, TypeScript, desktop and mobile
overflow checks; all PDF and Word-rendered pages visually inspected. The PDF is
searchable text with working contact links and no image-based resume content.
These are local parsing/layout checks, not external ATS certification.

Expected deployed PDF SHA256:
`39681dd4cb72fb6499ce92f16cfbe49500a209b07ba9e240b26675fbfdea3b76`.
Confirm the latest Pages workflow and live PDF after any deployment; a successful
git push alone does not prove the public website updated.

## Positioning and Presentation

- Architecture-first senior individual contributor, roughly 70% architecture and
  30% implementation emphasis, with hands-on ownership throughout the career.
- Role heading: Software Architect / Principal Engineer. Use 14+ years.
- Language priority: Rust, C++, C, Python, Go (Golang), Java/Spring Boot, Node.js.
- Preserve established backend, cloud, data, workflow, security and leadership skills.
- Cross-domain experience: fintech, insurance, health, media/broadcasting, telecom,
  sports, commerce/gift cards, logistics, transportation and social platforms.
- The top highlights summarize architecture, scale, domains and reusable IP.
  Keep company-specific metrics inside the corresponding experience or projects.
- Strong, professional, concise language; avoid slogans, repeated keywords and
  target-employer labels such as "Oracle-ready".
- Website uses restrained code-editor/terminal accents, monospaced labels, stacked
  section labels above headings, and an architecture illustration in the hero.
- Resume uses a linear, text-first layout with subtle code-style section labels.
  Do not turn it into a full IDE screen, dark panel layout or multi-column graphic.
- Visitor counter was removed at the user's request; do not restore it by default.

## Confirmed Employment

| Employer / brand | Dates | Role |
| --- | --- | --- |
| DDN | Starts 2 November 2026 | Incoming Staff Engineer |
| SwissClear Services Private Limited (TAPPP) | Feb 2024 - Oct 2026 | Senior Architect / Principal Solutions Architect |
| Fermyon Technologies India Private Limited (LINK, formerly ShoppinPal) | May 2023 - Jan 2024 | Senior Software Engineer / Engineering Mentor |
| Maverick Quantum India Private Limited (mavQ) | Aug 2022 - May 2023 | Software Development Lead |
| GoSprint Logistics Private Limited (Swift) | Apr 2021 - Aug 2022 | Platform Lead |
| D-SYS Data Solutions Private Limited | Dec 2014 - Nov 2020 | Full-Stack / Mobile Developer, then Senior Full-Stack Developer |
| Aadi Infotech Pvt. Ltd. | Feb 2010 - Feb 2014 | Software Intern, then Software Developer |

DDN is upcoming as of this handoff. Do not invent responsibilities or achievements
before the user supplies them. Confirm the actual start before changing to Present.

D-SYS: Full-Stack / Mobile Developer Dec 2014 - Feb 2018; Senior Full-Stack
Developer Mar 2018 - Nov 2020. User confirmed outsourced assignments on client
payrolls: Omega Healthcare (Nov 2019), Collasys Global Services (Dec 2019 - Feb 2020),
Technosoft Consulting (Feb - May 2020), Cooey Technologies (Jul - Nov 2020).
Keep the consolidated D-SYS structure and the clarified payroll note, not a claim
that all clients were direct uninterrupted D-SYS payroll. User-confirmed joining
dates take precedence over provident-fund deduction dates. Do not publish PF IDs.

Aadi internship 2010-2012, developer 2012-2014. Concurrent freelance/consulting
Dec 2014 - Nov 2019: Millennial Group Inc., Cloud Digital Arts, Cargo 3 IVS /
FindACargo and independent clients. Preserve the early-career company structure.

## Education and Learning

- BITS Pilani M.Tech AI/ML: Oct 2026 - Oct 2028 expected, in progress.
- University of Texas at Austin PGP AI/ML: facilitated by Great Learning.
  Do not invent a completion year.
- B.E. IT, RGPV: 2007 - 2012.
- Separate ongoing programme: Linux systems programming, storage, Lustre, HPC,
  Rust/C and selected C++, ultra-low-latency design and AI infrastructure.

Professional evidence already supplied includes Rust workers, AWS Bedrock,
RAG/LLM integration, multi-LLM gateways and ML-enabled decisioning. The user uses
AI for bounded diff-set generation, refactoring analysis, test scaffolding and
performance investigation, reviewing every step and retaining design ownership.

Agentic AI, tool calling, MCP, LangChain, LangGraph, state, approvals, recovery,
LLM evaluation, MLOps/LLMOps and inference optimization are explicit ongoing or
planned development topics. The academic and storage learning programmes have
not established independent production expertise or completed benchmark projects.
Do not convert roadmap coverage into claims of delivered production systems.

## Public Contact and Profile Notes

- Resume/site email: prem.tomar.blr@gmail.com
- Phone: +91 9606379003
- Location: Pune, India
- LinkedIn: https://www.linkedin.com/in/prem-tomar/
- Contact buttons open WhatsApp via the existing `wa.me` link.
- Naukri header tags were saved as #Rust #CPP #Python #GenAI #AgenticAI.
  C and Go remain in Key Skills. Account email was explicitly left unchanged.
- Naukri summary and Learning Roadmap were updated. Its uploaded PDF preceded
  the newest GenAI revision; do not claim that attachment has been refreshed.
  Browser upload was blocked by local file-access permissions. Any future upload
  must follow supported browser controls and user authorization.

## Continue and Verify

1. Clone the repository and inspect `git status` and recent commits.
2. Use Node >=22.13.0; run `npm ci`, then `npm run dev`.
3. Read `app/page.tsx`, `app/globals.css` and `resume/README.md` before editing.
4. Run `npm run build` and `npx tsc --noEmit --incremental false`.
5. Check desktop and narrow mobile screenshots, no horizontal overflow, readable
   terminal text, WhatsApp/contact links and the downloaded PDF.
6. Commit only intentional files. Keep generated builds, caches and QA images out
   of Git. Fetch upstream before pushing; never force-push over user changes.
7. When publication is authorized, push `main`, wait for the Pages workflow to
   succeed and verify both the live bundle and PDF hash on premtomar.com.

No external chat history is required to maintain this project. This file contains
the relevant editorial decisions; the source and editable document remain the
content of record. Resume generators currently use Windows Calibri/Consolas fonts;
another OS requires a licensed font directory and fresh visual verification.
