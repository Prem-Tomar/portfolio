from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK, WD_LINE_SPACING
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'resume' / 'generated'
OUT.mkdir(parents=True, exist_ok=True)
DEST = OUT / 'Prem_P_S_Tomar_Resume_2026-10-31.docx'
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
p('Software Architect | Principal Engineer', 'Subtitle', keep=True)
contact = p('+91 9606379003  |  ', size=9.5, keep=True)
link(contact, 'prem.tomar.blr@gmail.com', 'mailto:prem.tomar.blr@gmail.com')
contact.add_run('  |  Pune, India').font.size = Pt(9.5)
links = p('', size=9.5, keep=True)
link(links, 'premtomar.com', 'https://premtomar.com')
links.add_run('  |  ').font.size = Pt(9.5)
link(links, 'linkedin.com/in/prem-tomar', 'https://www.linkedin.com/in/prem-tomar/')

section('Professional Summary')
p('Software architect and hands-on senior individual contributor with 14+ years designing, modernizing and shipping distributed platforms. Combines Rust, C++, C and Python with AI/ML and Generative AI integration, complemented by Go and Java backend architecture and Node.js delivery. Defines service boundaries, integration contracts and cloud architecture while staying hands-on through implementation, performance investigation and production reliability. Builds reusable platforms across fintech, insurance, healthcare, media, telecom, commerce and logistics; mentors engineers and balances scale, security, cost and release velocity.')

section('Core Skills')
for name, text in [
    ('Systems programming', 'Rust, C++, C, Python; CPU and memory profiling, concurrent processing and high-volume data pipelines.'),
    ('AI/ML and Generative AI', 'GenAI, AWS Bedrock, retrieval-augmented generation (RAG), LLM integration, multi-LLM gateways, ML decisioning, fraud analytics, sentiment analysis, recommendations, probabilistic and forensic modeling.'),
    ('Backend and architecture', 'Go (Golang), Java/Spring Boot, Node.js, TypeScript, FastAPI; distributed systems, microservices, REST APIs, gRPC-style contracts, API gateways, service decomposition, event-driven design.'),
    ('Workflow and decisioning', 'BPMN, Camunda, Temporal, Flowable concepts, state machines, routing, approvals, SLA visibility, audit trails, case lifecycles and document-processing automation.'),
    ('Data and event platforms', 'PostgreSQL/Aurora, MongoDB, Redis/Valkey, Kafka-style streams, Spark-style processing, Elasticsearch-style search, schema governance, data integrity, analytics and feature-ready pipelines.'),
    ('Cloud and reliability', 'AWS, Kubernetes, Docker, OpenShift-aligned patterns, service mesh concepts, CI/CD, Git, monitoring, tracing, logging, profiling, production RCA and capacity planning.'),
    ('AI-assisted engineering', 'AI tools and coding agents for bounded diff-set generation, refactoring analysis, test scaffolding and performance investigation; review each step, validate with tests and profiling, retain design ownership and code integrity.'),
    ('Technical leadership', 'Architecture and code reviews, platform standards, API governance, roadmap and release planning, executive communication, cross-functional decisions, mentoring senior and architect-level engineers.'),
    ('Security and compliance', 'PCI/SOC2-aligned workflows, secure service boundaries, privacy-aware data handling, auditability, regulated delivery and operational readiness.'),
]:
    label(name, text, 10)

section('Professional Experience')
role('DDN', 'Incoming Staff Engineer', 'Starts 2 November 2026')
# No DDN responsibilities or achievements are represented before the start date.
doc.paragraphs[-1].paragraph_format.keep_with_next = False
role('SwissClear Services Private Limited (TAPPP)', 'Senior Architect / Principal Solutions Architect', 'Feb 2024 - Oct 2026')
bullets([
    'Directed architecture for distributed backend, runtime, workflow and micro-app platforms serving 7M+ daily users across media, sports, fintech and engagement products.',
    'Consolidated client-specific capabilities into reusable modules, shared service contracts and configurable onboarding workflows, supporting ecosystems including DTV, Globo, FIFA, Roku, BetPlay and Blackhawk Network.',
    'Built Rust workers for high-volume event and insight pipelines, integrated AWS Bedrock and RAG/LLM decision support, and designed BPMN/Camunda/Temporal orchestration.',
    'Worked on sentiment analysis as part of the platform\'s AI/ML capabilities.',
    'Led Java-to-Go modernization using CPU, memory and latency profiles; redesigned asynchronous processing, private AWS networking and Aurora/AppSync/Valkey data paths for more efficient execution.',
    'Established API, schema and release standards; led architecture reviews, senior-engineer mentorship, production RCA and PCI/SOC2-aligned delivery with product, SRE and compliance stakeholders.',
])

section('Professional Experience', new_page=True)
role('Fermyon Technologies India Private Limited (LINK, formerly ShoppinPal)', 'Senior Software Engineer / Engineering Mentor', 'May 2023 - Jan 2024', 'Python/FastAPI, Go, Java, Node.js, AWS, REST integrations, CI/CD, observability')
bullets([
    'Designed backend systems and internal tools for data migration, partner integrations, workflow automation, QA traceability and operational dashboards.',
    'Delivered REST integrations for GoDaddy, Shopify, Clover, Square, Promenade and LightSpeed, preserving data integrity and backward compatibility across partner contracts.',
    'Modernized selected Java and Node.js components to Go to reduce runtime overhead and improve concurrency, CPU and memory behavior in high-volume integration jobs.',
    'Strengthened logging, QA automation, release controls and RCA-led fixes; mentored engineers through design reviews, debugging and production-readiness assessments.',
])

role('Maverick Quantum India Private Limited (mavQ)', 'Software Development Lead', 'Aug 2022 - May 2023', 'Python/FastAPI, Java, Node.js, AWS Connect, API-first architecture, workflow automation, CI/CD')
bullets([
    'Led architecture and delivery of no-code automation capabilities, with API-first services, reusable abstractions and workflow execution designed for scale.',
    'Owned service design, data models and test strategy through release and production support; developed shared database and platform components to shorten service rollout and improve consistency.',
    'Delivered AWS Connect customer-experience capabilities and contributed to Intelligent Document Processing automation in collaboration with product, operations and support teams.',
    'Mentored engineers on API design, testing and production readiness while coordinating delivery decisions across QA, DevOps and business stakeholders.',
])

role('GoSprint Logistics Private Limited (Swift)', 'Platform Lead', 'Apr 2021 - Aug 2022', 'Rust, Python, ML processing, Go, Java, Node.js, AWS, MySQL, MongoDB, checkout, payments and logistics')
bullets([
    'Led architecture of commerce and logistics capabilities spanning checkout, payments, courier orchestration, merchant workflows and partner integrations.',
    'Implemented Rust processing paths for high-volume shipment data feeding ML models, improving throughput and control over logistics datasets.',
    'Created SenseEngine for ML-driven shipment intelligence across 300K+ monthly orders, reducing cost per shipment through optimization logic.',
    'Worked on sentiment analysis alongside shipment-intelligence capabilities.',
    'Defined resilient Java/Go service boundaries and backward-compatible APIs across payment, courier and partner systems; built BYOC and BYOP platforms for configurable orchestration.',
    'Worked with product and operations teams on release quality, incident response and production scalability, retaining hands-on ownership of implementation and diagnosis.',
])

section('Professional Experience', new_page=True)
p('D-SYS Data Solutions Private Limited | Gwalior, MP', 'Heading 2', keep=True)
p('Employment and outsourced assignments | Dec 2014 - Nov 2020', size=10.5, keep=True)
p('D-SYS outsourced assignments on client payrolls: Omega Healthcare Management Solutions (Nov 2019); Collasys Global Services (Dec 2019 - Feb 2020); Technosoft Consulting (Feb 2020 - May 2020); Cooey Technologies (Jul 2020 - Nov 2020).', size=9.5, muted=True, keep=True)
p('Senior Full-Stack Developer | Mar 2018 - Nov 2020', 'Heading 3', keep=True)
para = label('Environment', 'Python, Data Analysis, SQL, .NET MVC, C#, Entity Framework, Xamarin, Web APIs, Transportation / E-Way Billing Systems, Compliance Workflows', 9.5)
para.paragraph_format.line_spacing = Pt(11)
para.paragraph_format.keep_with_next = True
bullets([
    'Delivered enterprise full-stack systems with .NET MVC, C#, SQL, and Xamarin, including transportation and e-way billing workflows for national road-traffic compliance use cases.',
    'Used Python for analytics, structured data preparation, and reporting.',
    'Built backend foundations for safety/security product workflows using Node.js and Express.js, guiding Angular, Node.js, Android, and backend engineers.',
    'Owned backend and application features from design through implementation, debugging, deployment support, and client-facing resolution.',
])
p('Full-Stack / Mobile Developer | Dec 2014 - Feb 2018', 'Heading 3', keep=True)
para = label('Environment', 'Java, Java OOP, Python/Django, .NET MVC, Entity Framework, Android, iOS, MySQL, MongoDB, AWS, Linux, P2P Server Management', 9.5)
para.paragraph_format.keep_with_next = True
para.paragraph_format.line_spacing = Pt(11)
bullets([
    'Delivered mobile, backend, marketplace, database, and production-server capabilities for client-facing product and enterprise engagements.',
    'Engineered Java-led client systems with Python/Django support for admin workflows, APIs, client portals, and database-backed applications.',
    'Implemented Android/iOS applications, server-side components, P2P server support, .NET MVC marketplace features, database designs, and operational deployment workflows.',
    'Supported D-SYS Data Solutions product and client-delivery initiatives across mobile, marketplace, database-backed workflow, and server operations work.',
    'Coordinated with distributed designers, developers, marketing teams, and business stakeholders to move requirements from concept to working production applications.',
])

role('Aadi Infotech Pvt. Ltd. | Gwalior, MP', 'Software Developer / Software Intern', 'Feb 2010 - Feb 2014')
bullets([
    'Progressed from Software Intern (2010-2012) to Software Developer (2012-2014), delivering transportation, education, social/image-editing, mobile and enterprise applications.',
    'Built Java-backed systems and Python/Django APIs and admin tools; helped redesign standalone applications into object-oriented, database-backed thin-client architectures.',
])

p('Concurrent Freelance and Consulting | Dec 2014 - Nov 2019', 'Heading 3', keep=True)
p('Millennial Group Inc., Cloud Digital Arts, Cargo 3 IVS / FindACargo and independent clients: mobile apps, marketplace features, database workflows, server operations and release coordination.', size=10)

section('Education')
label('M.Tech in Artificial Intelligence and Machine Learning', 'BITS Pilani | Oct 2026 - Oct 2028 (expected); in progress.', 10)
label('Postgraduate Program in Artificial Intelligence and Machine Learning', 'The University of Texas at Austin; facilitated by Great Learning.', 10)
label('B.E. in Information Technology', 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) | 2007 - 2012.', 10)

label('Ongoing study and planned practice', 'Agentic AI and tooling: tool calling, Model Context Protocol (MCP), LangChain, LangGraph, agent state, approvals and recovery; LLM evaluation, MLOps/LLMOps and inference optimization. Separate systems track: Linux systems programming, storage, Lustre, HPC and ultra-low-latency design.', 10)

footer = sec.footer.paragraphs[0]
footer.alignment = WD_ALIGN_PARAGRAPH.RIGHT
footer.paragraph_format.space_after = Pt(0)
footer.add_run('Prem P S Tomar  |  ').font.size = Pt(8)
field = OxmlElement('w:fldSimple')
field.set(qn('w:instr'), 'PAGE')
footer._p.append(field)
for r in footer.runs:
    r.font.color.rgb = MUTED

doc.core_properties.title = 'Prem P S Tomar - Software Architect and Principal Engineer'
doc.core_properties.subject = 'Professional resume'
doc.core_properties.author = 'Prem P S Tomar'
doc.core_properties.keywords = 'Software Architect, Principal Engineer, Rust, C++, C, Python, AI/ML, Generative AI, GenAI, LLM, RAG, Agentic AI, MCP, Go, Golang, Java, Node.js, Distributed Systems, Cloud'
doc.save(DEST)
print(DEST)
