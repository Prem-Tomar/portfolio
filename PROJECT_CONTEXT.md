# Portfolio and Resume Handoff

Last updated: 1 November 2026. Owner: Prem P S Tomar.

## Project

- Repository: git@github.com:Prem-Tomar/portfolio.git
- Website: https://premtomar.com
- React 19 + Vite 8 + TypeScript; static output in `dist/`.
- Main content: `app/page.tsx`; styles: `app/globals.css`; entry: `src/main.tsx`.
- Hero asset: `public/architecture-fabric.png`; provenance: `design/hero-image-prompt.txt`.
- Resume download: `public/resume.pdf`, linked with `?v=20261101-r8`.
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
`20a614bf82858d224a26a77f0014bf86e870d4a0af12703a54fec2e4aca9460e`.
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

Website display update requested on 1 November 2026: use "Staff Engineer" for DDN,
remove "Next", the displayed start date and "Upcoming appointment", and link DDN
to https://ddn.com in the hero. A later clarification removes links from chapter
headings, including DDN; keep those headings as plain text. This does not alter
the separately maintained resume or assert a different employment start date.
Do not invent responsibilities or achievements. Confirm the actual start before
adding a "Present" date range.

Contact copy controls were also requested for the mobile number, email and
LinkedIn URL. Keep their original links clickable, with adjacent small copy icons
and accessible success/failure feedback. Do not add copy buttons to every paragraph.

Keep CSS in external stylesheets and executable JavaScript in external bundles.
Do not add style attributes, inline scripts, HTML event-handler attributes or
JavaScript-written inline styles. The career carousel uses native scrolling,
stylesheet-defined spacer geometry and a native progress element. JSON-LD in the
static HTML is non-executable structured data, not inline JavaScript.

AI/ML visibility update requested on 1 November 2026: include AI/ML, GenAI, RAG
and LLM in the hero skills line after Python and before Go. Keep the detailed
coverage in Recruiter Essentials, not a new standalone section. Its AI/ML topic
covers sentiment analysis at Swift and TAPPP, Bedrock/RAG integration, SenseEngine,
document processing, public ML/research examples and bounded AI-assisted tooling.
Preserve the distinction between application exposure, professional work,
research and ongoing/planned study; do not invent production claims or metrics.

D-SYS: Full-Stack / Mobile Developer Dec 2014 - Feb 2018; Senior Full-Stack
Developer Mar 2018 - Nov 2020. User confirmed outsourced assignments on client
payrolls: Omega Healthcare (Nov 2019), Collasys Global Services (Dec 2019 - Feb 2020),
Technosoft Consulting (Feb - May 2020), Cooey Technologies (Jul - Nov 2020).
Keep the consolidated D-SYS structure and the clarified payroll note, not a claim
that all clients were direct uninterrupted D-SYS payroll. User-confirmed joining
dates take precedence over provident-fund deduction dates. Do not publish PF IDs.

Authoritative correction on 1 November 2026: sentiment analysis was at Swift
and TAPPP. D-SYS included analytics, structured data preparation and reporting,
not AI/ML, ML data collection, model experimentation, sentiment analysis or
recommendation logic. Earlier resume and website statements were incorrect.
Do not restore them or infer D-SYS Rust/Go experience from those withdrawn claims.
Preserve D-SYS enterprise, mobile, backend, database and operational work. Do not
reassign other AI/ML application areas to an employer without confirmation.

The user chose to retain GitHub Pages only. Do not add a file-backed visitor
counter: the static host cannot persist per-visit writes. A browser-local count
would not represent a shared website total.

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
   Run `npm run test:profile` to guard the confirmed AI/ML company attribution.
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
