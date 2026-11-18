from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK, WD_LINE_SPACING
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'resume' / 'generated'
OUT.mkdir(parents=True, exist_ok=True)
DEST = OUT / 'Prem_P_S_Tomar_Resume_2026-11-18_Systems_Leadership_AI.docx'
INK = RGBColor.from_string('202525')
MUTED = RGBColor.from_string('566260')
ACCENT = RGBColor.from_string('006B67')

doc = Document()
sec = doc.sections[0]
sec.page_width, sec.page_height = Inches(8.27), Inches(11.69)
sec.top_margin, sec.bottom_margin = Inches(0.5), Inches(0.5)
sec.left_margin = sec.right_margin = Inches(0.58)
sec.header_distance = sec.footer_distance = Inches(0.22)

normal = doc.styles['Normal']
normal.font.name, normal.font.size, normal.font.color.rgb = 'Calibri', Pt(10.5), INK
normal.paragraph_format.line_spacing_rule = WD_LINE_SPACING.EXACTLY
normal.paragraph_format.line_spacing = Pt(12.4)
normal.paragraph_format.space_after = Pt(3)
normal.paragraph_format.widow_control = True

for name in ['Title', 'Subtitle', 'Heading 1', 'Heading 2', 'Heading 3']:
    s = doc.styles[name]
    s.font.name = 'Calibri'
    s.font.color.rgb = INK
    s.paragraph_format.space_after = Pt(3)
    s.paragraph_format.keep_with_next = True
    s.paragraph_format.keep_together = True
    if s.element.pPr is not None:
        border = s.element.pPr.find(qn('w:pBdr'))
        if border is not None:
            s.element.pPr.remove(border)

doc.styles['Title'].font.size = Pt(24)
doc.styles['Title'].font.bold = True
doc.styles['Title'].paragraph_format.line_spacing = Pt(27)
doc.styles['Subtitle'].font.size = Pt(12)
doc.styles['Subtitle'].font.color.rgb = ACCENT
doc.styles['Subtitle'].paragraph_format.line_spacing = Pt(15)
doc.styles['Heading 1'].font.name = 'Consolas'
doc.styles['Heading 1'].font.size = Pt(10.5)
doc.styles['Heading 1'].font.bold = True
doc.styles['Heading 1'].font.color.rgb = ACCENT
doc.styles['Heading 1'].paragraph_format.space_before = Pt(9)
doc.styles['Heading 1'].paragraph_format.line_spacing = Pt(13)
doc.styles['Heading 2'].font.size = Pt(11)
doc.styles['Heading 2'].font.bold = True
doc.styles['Heading 2'].paragraph_format.space_before = Pt(7)
doc.styles['Heading 2'].paragraph_format.line_spacing = Pt(13)
doc.styles['Heading 3'].font.size = Pt(10.5)
doc.styles['Heading 3'].font.bold = True
doc.styles['Heading 3'].paragraph_format.space_before = Pt(3)
doc.styles['Heading 3'].paragraph_format.line_spacing = Pt(12.4)

# Simple paragraph lists preserve a linear reading order in both Word and PDF.
bullet_style = doc.styles['List Bullet']
bullet_style.font.name = 'Calibri'
bullet_style.font.size = Pt(10.5)
bullet_style.paragraph_format.left_indent = Inches(0.12)
bullet_style.paragraph_format.first_line_indent = Inches(-0.12)
bullet_style.paragraph_format.line_spacing = Pt(12.4)
bullet_style.paragraph_format.line_spacing_rule = WD_LINE_SPACING.EXACTLY
bullet_style.paragraph_format.space_after = Pt(3)
bullet_style.paragraph_format.keep_together = True


def p(text, style=None, size=None, muted=False, keep=False):
    para = doc.add_paragraph(text, style)
    para.paragraph_format.keep_together = True
    para.paragraph_format.keep_with_next = keep
    if size or muted:
        for r in para.runs:
            if size:
                r.font.size = Pt(size)
            if muted:
                r.font.color.rgb = MUTED
    return para


def section(title, new_page=False):
    para = p(title.upper(), 'Heading 1', keep=True)
    para.paragraph_format.page_break_before = new_page
    return para


def label(name, text, size=10.5):
    para = doc.add_paragraph()
    para.paragraph_format.keep_together = True
    para.add_run(name + ': ').bold = True
    para.add_run(text)
    for r in para.runs:
        r.font.size = Pt(size)
    return para


def role(company, title, dates, stack=None):
    p(company, 'Heading 2', keep=True)
    para = doc.add_paragraph()
    para.paragraph_format.keep_with_next = True
    para.paragraph_format.keep_together = True
    para.add_run(title).bold = True
    para.add_run(' | ' + dates).font.color.rgb = MUTED
    if stack:
        para = label('Environment', stack, 9.5)
        para.paragraph_format.line_spacing = Pt(11)
        para.paragraph_format.keep_with_next = True
        for run in para.runs:
            run.font.color.rgb = MUTED


def bullets(items):
    for text in items:
        p(text, 'List Bullet')


def link(para, label_text, url):
    rel = para.part.relate_to(
        url, 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink',
        is_external=True,
    )
    el = OxmlElement('w:hyperlink')
    el.set(qn('r:id'), rel)
    r = OxmlElement('w:r')
    pr = OxmlElement('w:rPr')
    color = OxmlElement('w:color')
    color.set(qn('w:val'), '006B67')
    pr.append(color)
    size = OxmlElement('w:sz')
    size.set(qn('w:val'), '19')
    pr.append(size)
    r.append(pr)
    t = OxmlElement('w:t')
    t.text = label_text
    r.append(t)
    el.append(r)
    para._p.append(el)


p('PREM P S TOMAR', 'Title', keep=True)
p('Systems Engineering and Architecture | Engineering Leadership', 'Subtitle', keep=True)
contact = p('+91 9606379003  |  ', size=9.5, keep=True)
link(contact, 'prem.tomar.blr@gmail.com', 'mailto:prem.tomar.blr@gmail.com')
contact.add_run('  |  Pune, India').font.size = Pt(9.5)
links = p('', size=9.5, keep=True)
link(links, 'premtomar.com', 'https://premtomar.com')
links.add_run('  |  ').font.size = Pt(9.5)
link(links, 'linkedin.com/in/prem-tomar', 'https://www.linkedin.com/in/prem-tomar/')

section('Professional Summary')
p('Hands-on systems engineer and architect with 14+ years building and modernizing distributed products; currently Staff Engineer at DDN in Global Engineering, working on EXAScaler. Combines service and data architecture with concurrent processing, CPU/memory profiling and production diagnosis. Leads multiple concurrent projects, guiding engineers and aligning stakeholders on technical trade-offs, dependencies, releases and support. Built shared platforms across fintech, insurance, healthcare, media, telecom, commerce and logistics, balancing performance, resilience and security with operating cost and delivery pace.')

label('Technical focus', 'Rust, C++, C, Python, Go, Java/Spring Boot, Node.js; distributed systems, storage/HPC, AI/ML, GenAI, RAG/LLM integration and agentic AI tooling.', 10)

section('Professional Experience')
role('DDN (DataDirect Networks India Private Limited)', 'Staff Engineer | Global Engineering', 'Nov 2026 - Present')
bullets([
    'Work on the EXAScaler Management Framework (EMF) and the Lustre HTTP interface for client integrations, within DDN\'s Global Engineering team.',
    'Address I/O performance, data integrity and reliability in product and integration design for AI training, checkpointing and HPC; contribute RFCs, ADRs, sequence diagrams and design/release reviews.',
    'Integration design considers workload identity, tenant isolation, least-privilege access, network egress guardrails and auditable client operations.',
])

role('SwissClear Services Private Limited (TAPPP)', 'Senior Architect / Principal Solutions Architect', 'Feb 2024 - Oct 2026')
bullets([
    'Set architecture direction for runtime, workflow and micro-app platforms serving 7M+ daily users across media, sports and fintech; consolidated client-specific capabilities into shared modules, service contracts and configurable onboarding.',
    'Led profile-driven Java-to-Go modernization, evaluating CPU, memory and latency behavior; redesigned asynchronous execution, private AWS networking and Aurora/AppSync/Valkey data paths around workload requirements.',
    'Defined workflow execution with BPMN, Camunda and Temporal; built Rust workers for high-volume event and insight processing, keeping architecture decisions grounded in implementation and production behavior.',
    'Integrated Generative AI (GenAI) using AWS Bedrock and retrieval-augmented generation (RAG) for LLM-backed decision support; contributed sentiment analysis within the product platform.',
    'Led concurrent initiatives across DTV, Globo, FIFA, Roku, BetPlay and Blackhawk; aligned product, engineering, SRE and compliance on platform trade-offs, dependencies and releases, using RFCs, ADRs, HLD/LLD and sequence diagrams to review integration decisions.',
    'Connected API/schema governance, observability and incident RCA to corrective engineering and PCI/SOC2-aligned delivery; mentored engineers through design/code reviews and established release readiness, runbooks and support handover.',
])

role('Fermyon Technologies India Private Limited (LINK, formerly ShoppinPal)', 'Senior Software Engineer / Engineering Mentor', 'May 2023 - Jan 2024', 'Python/FastAPI, Go, Java, Node.js, AWS, REST integrations, CI/CD, observability')
bullets([
    'Designed partner integrations and migration workflows for GoDaddy, Shopify, Clover, Square, Promenade and LightSpeed, making data integrity and backward compatibility explicit service-contract requirements.',
    'Modernized selected Java and Node.js components to Go to address concurrency and runtime overhead in high-volume integration jobs, guided by CPU and memory behavior.',
    'Reviewed partner behavior, contract changes and migration dependencies with engineers and stakeholders through RFCs, ADRs and integration sequence diagrams, connecting technical decisions to release impact.',
    'Connected incident RCA to observability, automated QA, release controls and runbooks; bridged engineering and support during diagnosis and corrective releases, mentoring engineers through design and code reviews.',
])

section('Professional Experience', new_page=True)
role('Maverick Quantum India Private Limited (mavQ)', 'Software Development Lead', 'Aug 2022 - May 2023', 'Python/FastAPI, Java, Node.js, AWS Connect, API-first architecture, workflow automation, CI/CD')
bullets([
    'Shaped the architecture of no-code automation and workflow capabilities, defining API-first service boundaries, execution flows and shared database/platform components for reuse across product modules.',
    'Led AWS Connect capabilities from design through release and contributed Intelligent Document Processing; remained hands-on in complex modules, reviewing implementation and tests against service designs.',
    'Resolved data-model and integration choices through HLD/LLD, process and sequence diagrams, RFCs and ADRs, aligning product requirements with platform reuse and release scope.',
    'Coordinated parallel automation initiatives across product, engineering, operations and support; guided engineers on shared components, delivery dependencies, production readiness, runbooks and support handover.',
])

role('GoSprint Logistics Private Limited (Swift)', 'Platform Lead', 'Apr 2021 - Aug 2022', 'Rust, Python, ML processing, Go, Java, Node.js, AWS, MySQL, MongoDB, checkout, payments and logistics')
bullets([
    'Defined commerce and logistics platform boundaries across checkout, payments, couriers and merchant workflows; built configurable BYOC/BYOP orchestration with backward-compatible partner contracts.',
    'Architected SenseEngine\'s ML-driven shipment intelligence across 300K+ monthly orders, combining Rust data-processing paths and optimization logic to reduce cost per shipment; also contributed sentiment analysis.',
    'Designed and implemented Java/Go services; used profiling and incident diagnosis to guide scalability and reliability decisions across payment, courier and shipment workflows.',
    'Led parallel platform initiatives with product and operations; used RFCs, ADRs, process flows and sequence diagrams to review integration trade-offs, dependencies and releases, carrying decisions into runbooks and support handover.',
])

p('D-SYS Data Solutions Private Limited | Gwalior, MP', 'Heading 2', keep=True)
p('Employment and outsourced assignments | Dec 2014 - Nov 2020', size=10.5, keep=True)
p('D-SYS outsourced assignments on client payrolls: Omega Healthcare Management Solutions (Nov 2019); Collasys Global Services (Dec 2019 - Feb 2020); Technosoft Consulting (Feb 2020 - May 2020); Cooey Technologies (Jul 2020 - Nov 2020).', size=9.5, muted=True, keep=True)
p('Senior Full-Stack Developer | Mar 2018 - Nov 2020', 'Heading 3', keep=True)
para = label('Environment', 'Python, Data Analysis, SQL, .NET MVC, C#, Entity Framework, Xamarin, Web APIs, Transportation / E-Way Billing Systems, Compliance Workflows', 9.5)
para.paragraph_format.line_spacing = Pt(11)
para.paragraph_format.keep_with_next = True
bullets([
    'Delivered transportation and e-way billing compliance systems using .NET MVC, C#, SQL and Xamarin; used Python for analytics, structured data preparation and reporting.',
    'Built Node.js/Express backend foundations for safety/security workflows and guided web, mobile and backend engineers from feature design through deployment and client-facing resolution.',
])
p('Full-Stack / Mobile Developer | Dec 2014 - Feb 2018', 'Heading 3', keep=True)
para = label('Environment', 'Java, Java OOP, Python/Django, .NET MVC, Entity Framework, Android, iOS, MySQL, MongoDB, AWS, Linux, P2P Server Management', 9.5)
para.paragraph_format.keep_with_next = True
para.paragraph_format.line_spacing = Pt(11)
bullets([
    'Built Java-led client systems, Python/Django APIs and administrative tools, Android/iOS applications and .NET MVC marketplace features, including database design and production deployment.',
    'Supported Linux/AWS and P2P server operations; coordinated distributed design, engineering and business stakeholders from requirements through working client applications.',
])

role('Aadi Infotech Pvt. Ltd. | Gwalior, MP', 'Software Developer / Software Intern', 'Feb 2010 - Feb 2014')
bullets([
    'Progressed from Software Intern (2010-2012) to Software Developer (2012-2014), delivering transportation, education, social/image-editing, mobile and enterprise applications.',
    'Built Java-backed systems and Python/Django APIs and admin tools; helped redesign standalone applications into object-oriented, database-backed thin-client architectures.',
])

p('Concurrent Freelance and Consulting | Dec 2014 - Nov 2019', 'Heading 3', keep=True)
p('Millennial Group Inc., Cloud Digital Arts, Cargo 3 IVS / FindACargo and independent clients: mobile apps, marketplace features, database workflows, server operations and release coordination.', size=10)

section('Core Skills', new_page=True)
for name, text in [
    ('Systems programming', 'Rust, C++, C, Python; CPU and memory profiling, concurrent processing and high-volume data pipelines.'),
    ('Storage and HPC', 'EXAScaler/Lustre parallel storage, EMF, HTTP client integrations, AI training and checkpointing data paths.'),
    ('AI/ML and Generative AI', 'GenAI, AWS Bedrock, retrieval-augmented generation (RAG), large language model (LLM) integration, multi-LLM gateways, ML decisioning, fraud analytics, sentiment analysis, recommendations, probabilistic and forensic modeling.'),
    ('ML development', 'NumPy, pandas, SciPy, scikit-learn, PyTorch, TensorFlow, Hugging Face and Jupyter; feature engineering, cross-validation, class imbalance, ensemble methods, calibration and fine-tuning.'),
    ('Retrieval and vector search', 'Vector databases, document loading, chunking, embeddings and metadata filtering; broader tool experience with LlamaIndex, FAISS, Chroma, Qdrant, Pinecone, Weaviate and pgvector.'),
    ('Evaluation and MLOps/LLMOps', 'MLflow, LangSmith, model comparison and distribution-shift evaluation; experience with RAGAS, retrieval precision, faithfulness, groundedness, tool-call accuracy and prompt versioning.'),
    ('Agentic AI and tooling', 'LangChain, LangGraph, Model Context Protocol (MCP), tool calling, agent orchestration, state management, human approvals and recovery workflows; recent Jev AI exposure for structured judgments.'),
    ('Inference and AI safety', 'Broader experience with vLLM, batching, streaming and prefix caching; NeMo Guardrails, input/output validation and tool-access controls.'),
    ('Backend and architecture', 'Go (Golang), Java/Spring Boot, Node.js, TypeScript, FastAPI; distributed systems, microservices, REST APIs, API gateways, service decomposition and event-driven design; gRPC contract concepts.'),
    ('Architecture practice', 'Requests for Comments (RFCs), Architecture Decision Records (ADRs), high-level and low-level design (HLD/LLD), sequence and process diagrams, requirements analysis, non-functional requirements, technical trade-offs, service/data contracts, integration reviews and migration planning.'),
    ('Workflow and decisioning', 'BPMN, Camunda, Temporal, Flowable concepts, state machines, routing, approvals, SLA visibility, audit trails, case lifecycles and document-processing automation.'),
    ('Data and event platforms', 'PostgreSQL/Aurora, MongoDB, Redis/Valkey, schema governance, data integrity, analytics and feature-ready pipelines; Kafka event-streaming, Spark processing and Elasticsearch search patterns.'),
    ('Cloud and reliability', 'AWS, Kubernetes, Docker, CI/CD, Git, monitoring, tracing, logging, profiling, production RCA and capacity planning; OpenShift and service mesh concepts.'),
    ('AI-assisted engineering', 'Coding agents for bounded diff-set generation, refactoring analysis, test scaffolding and performance investigation; review each step and validate through tests, profiling and code review, retaining design ownership and code integrity.'),
    ('Engineering leadership', 'Multi-project delivery, stakeholder management, scope/priorities, dependencies and delivery risks, roadmap planning, architecture/code reviews, platform standards, API governance, executive communication, mentoring engineers and technical leads.'),
    ('Delivery and service operations', 'Release-impact assessment, readiness reviews, operational runbooks, engineering-to-support handover, incident coordination and corrective-action follow-through.'),
    ('Security and compliance', 'PCI/SOC2-aligned workflows, secure service boundaries, privacy-aware data handling, auditability, regulated delivery and operational readiness.'),
]:
    label(name, text, 10)

section('Education')
label('M.Tech in Artificial Intelligence and Machine Learning', 'BITS Pilani | Oct 2026 - Oct 2028 (expected); in progress.', 10)
label('Postgraduate Program in Artificial Intelligence and Machine Learning', 'The University of Texas at Austin; facilitated by Great Learning.', 10)
label('B.E. in Information Technology', 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) | 2007 - 2012.', 10)

label('Continuing development', 'Advanced LLM evaluation and inference optimization; independent systems practice in Linux, storage, Lustre, HPC and ultra-low-latency design. Exploring Stanford\'s Next-Concept Modeling (NCM), with an interest in coarse-to-fine generation and inference efficiency.', 10)

footer = sec.footer.paragraphs[0]
footer.alignment = WD_ALIGN_PARAGRAPH.RIGHT
footer.paragraph_format.space_after = Pt(0)
footer.add_run('Prem P S Tomar  |  ').font.size = Pt(8)
field = OxmlElement('w:fldSimple')
field.set(qn('w:instr'), 'PAGE')
footer._p.append(field)
for r in footer.runs:
    r.font.color.rgb = MUTED

doc.core_properties.title = 'Prem P S Tomar - Systems Engineering Architecture and Leadership'
doc.core_properties.subject = 'Professional resume'
doc.core_properties.author = 'Prem P S Tomar'
doc.core_properties.keywords = 'Systems Engineering, Architecture, Engineering Leadership, Distributed Systems, Storage, HPC, AI/ML, GenAI, RAG, LLM, Agentic AI, LangChain, LangGraph, MCP, MLOps'
doc.save(DEST)
print(DEST)
