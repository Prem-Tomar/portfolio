import json
import re
from pathlib import Path

import pdfplumber
from docx import Document
from pypdf import PdfReader


root = Path(__file__).resolve().parents[2]
resume = root / 'resume/generated/Prem_P_S_Tomar_Resume_2026-11-18_Systems_Leadership_AI.pdf'
docx = Document(resume.with_suffix('.docx'))
reader = PdfReader(resume)
pages = [p.extract_text() for p in reader.pages]
normalize = lambda text: re.sub(r'\s+', ' ', text).strip()
text = normalize(' '.join(pages))
assert len(pages) == 3
assert all(len(page) > 2000 for page in pages)
assert pages[0].startswith('PREM P S TOMAR')
assert 'AI-assisted engineering:' in pages[2]
assert text.index('PROFESSIONAL EXPERIENCE') < text.index('CORE SKILLS')
assert 'SwissClear Services Private Limited (TAPPP)' in pages[0]
assert 'Fermyon Technologies India Private Limited' in pages[0]
assert 'multiple concurrent projects' in pages[0]
assert 'Hands-on systems engineer and architect with 14+ years' in normalize(pages[0])
assert 'Systems Engineering and Architecture | Engineering Leadership' in normalize(pages[0])
assert 'concurrent processing, CPU/memory profiling and production diagnosis' in normalize(pages[0])
assert 'AI ASSISTED ENGINEERING' not in text
assert 'Systems programming: Rust, C++, C, Python;' in text
assert text.index('Systems programming:') < text.index('AI/ML and Generative AI:') < text.index('Backend and architecture:')
assert text.index('EDUCATION') < text.index('Continuing development:')
assert 'Continuing development:' in pages[2]
assert 'Agentic AI and tooling:' in pages[2]
assert 'Go (Golang), Java/Spring Boot, Node.js' in text
assert not docx.tables
assert not docx.inline_shapes
for para in docx.paragraphs:
    if para.text.strip():
        assert normalize(para.text) in text, f'Missing or changed text: {para.text}'
for term in [
    'Staff Engineer at DDN', 'Global Engineering', 'Nov 2026 - Present', 'Feb 2024 - Oct 2026',
    'EXAScaler Management Framework (EMF)', 'Lustre HTTP interface',
    'workload identity', 'tenant isolation', 'least-privilege access', 'network egress guardrails',
    'May 2023 - Jan 2024', 'Apr 2021 - Aug 2022', 'Aug 2022 - May 2023', 'Feb 2010 - Feb 2014',
    'Fermyon Technologies India Private Limited', 'Maverick Quantum India Private Limited',
    'GoSprint Logistics Private Limited', 'SwissClear Services Private Limited',
    'D-SYS Data Solutions Private Limited', 'Dec 2014 - Nov 2020',
    'D-SYS outsourced assignments on client payrolls', 'Omega Healthcare Management Solutions (Nov 2019)',
    'Collasys Global Services (Dec 2019 - Feb 2020)', 'Technosoft Consulting (Feb 2020 - May 2020)',
    'Cooey Technologies (Jul 2020 - Nov 2020)', 'The University of Texas at Austin',
    'Great Learning', 'BITS Pilani', 'Oct 2028 (expected)',
    'diff-set generation', 'prem.tomar.blr@gmail.com', '9606379003',
    'GenAI', 'Model Context Protocol (MCP)', 'LangChain', 'LangGraph', 'MLOps/LLMOps',
    'Requests for Comments (RFCs)', 'Architecture Decision Records (ADRs)', 'HLD/LLD',
    'sequence and process diagrams', 'stakeholder management', 'runbooks',
    'engineering-to-support handover', 'release-impact assessment',
    'Lustre', 'HPC', 'ultra-low-latency',
]:
    assert term.lower() in text.lower(), f'Missing expected detail: {term}'
for term in ['ppst89', 'Incoming Staff Engineer', 'Starts 2 November 2026', 'Oracle-ready', 'Est Id', 'Member Id', 'Jun 2024 - Oct 2026', 'Sep 2021 - Aug 2022', 'Nov 2019 - Aug 2021', 'Aug 2021 - May 2023', '\ufffd']:
    assert term not in text, f'Unexpected or outdated text: {term}'
assert text.count('Present') == 1, 'Only DDN is a current employer'
assert 'DDN (DataDirect Networks India Private Limited)' in pages[0]
ddn_text = text.split('DDN (DataDirect Networks India Private Limited)', 1)[1].split('SwissClear Services', 1)[0]
assert 'Integration design considers' in ddn_text
assert not re.search(r'\b(?:SFA|Infinia|prototype|benchmark|achieved|delivered)\b|\d+%', ddn_text, re.I)
assert not re.search(r'\b(?:RAG|LLM|GenAI|LangChain|LangGraph)\b', ddn_text)
tappp_text = text.split('SwissClear Services Private Limited (TAPPP)', 1)[1].split('Fermyon Technologies India Private Limited', 1)[0]
assert tappp_text.index('Java-to-Go modernization') < tappp_text.index('Led concurrent initiatives')
assert tappp_text.index('built Rust workers') < tappp_text.index('Led concurrent initiatives')
for term in ['Generative AI (GenAI)', 'AWS Bedrock', 'retrieval-augmented generation (RAG)', 'LLM-backed decision support']:
    assert term in tappp_text, f'Missing TAPPP AI responsibility: {term}'
skills_text = text.split('CORE SKILLS', 1)[1].split('EDUCATION', 1)[0]
for term in ['AI/ML', 'GenAI', 'RAG', 'LLM', 'Agentic AI', 'LangChain', 'LangGraph',
             'Model Context Protocol (MCP)', 'tool calling', 'agent orchestration',
             'PyTorch', 'TensorFlow', 'Hugging Face', 'MLflow', 'LangSmith',
             'Vector databases', 'NumPy', 'pandas', 'SciPy', 'MLOps/LLMOps',
             'scikit-learn', 'Jupyter', 'Coding agents', 'diff-set generation',
             'LlamaIndex', 'FAISS', 'Chroma', 'Qdrant', 'Pinecone', 'Weaviate',
             'pgvector', 'RAGAS', 'vLLM', 'NeMo Guardrails', 'prefix caching', 'Jev AI']:
    assert term in skills_text, f'Missing AI skill: {term}'
continuing_text = text.split('Continuing development:', 1)[1]
assert not any(term in continuing_text for term in ['LangChain', 'LangGraph', 'MCP'])
assert 'Next-Concept Modeling (NCM)' in continuing_text
assert 'Next-Concept Modeling' not in skills_text
experience_text = text.split('PROFESSIONAL EXPERIENCE', 1)[1].split('CORE SKILLS', 1)[0]
for term in ['Jev AI', 'Next-Concept Modeling', 'LangGraph', 'MCP', 'RAGAS', 'vLLM']:
    assert term not in experience_text, f'New tooling must not be backdated or assigned to an employer: {term}'

inside_dsys = False
dsys_count = 0
dsys_text = []
for para in docx.paragraphs:
    if para.text.startswith('D-SYS Data Solutions Private Limited |'):
        inside_dsys = True
    elif para.text.startswith('Aadi Infotech'):
        inside_dsys = False
    if inside_dsys:
        dsys_text.append(para.text)
    if inside_dsys and para.style.name == 'List Bullet':
        dsys_count += 1
# 18 November: condense repeated earlier-career tasks without changing their scope.
assert dsys_count == 4
for term in ['analytics, structured data preparation and reporting', '.NET MVC', 'Xamarin',
             'Node.js/Express', 'Python/Django', 'Android/iOS', 'P2P', 'Linux/AWS',
             'Dec 2014 - Feb 2018', 'Mar 2018 - Nov 2020']:
    assert term in ' '.join(dsys_text), f'Missing earlier-career evidence: {term}'
assert not re.search(r'\b(?:AI|ML|sentiment|recommendation|semi-supervised|intelligence)\b|model experimentation', ' '.join(dsys_text), re.I)
assert not re.search(r'\b(?:RFCs|ADRs|HLD|LLD)\b', ' '.join(dsys_text))

employers = ['DDN (DataDirect Networks India Private Limited)',
             'SwissClear Services Private Limited (TAPPP)',
             'Fermyon Technologies India Private Limited',
             'Maverick Quantum India Private Limited',
             'GoSprint Logistics Private Limited', 'D-SYS Data Solutions Private Limited']
for start, end in zip(employers, employers[1:]):
    role_text = text.split(start, 1)[1].split(end, 1)[0]
    for term in ['RFCs', 'ADRs', 'sequence', 'release']:
        assert term.lower() in role_text.lower(), f'Missing architecture responsibility at {start}: {term}'
assert not re.search(r'\b(?:Director|Vice President|VP|P&L|headcount)\b', text), 'Do not invent executive titles or authority'
for start, end in [
    ('SwissClear Services Private Limited (TAPPP)', 'Fermyon Technologies India Private Limited'),
    ('GoSprint Logistics Private Limited (Swift)', 'D-SYS Data Solutions Private Limited'),
]:
    role_text = text.split(start, 1)[1].split(end, 1)[0]
    assert 'sentiment analysis' in role_text.lower(), f'Sentiment analysis missing from {start}'

links = []
for page in reader.pages:
    for annotation in page.get('/Annots', []):
        item = annotation.get_object()
        action = item.get('/A', {})
        if '/URI' in action:
            links.append(str(action['/URI']))
assert 'mailto:prem.tomar.blr@gmail.com' in links
assert 'https://premtomar.com' in links
assert 'https://www.linkedin.com/in/prem-tomar/' in links

with pdfplumber.open(resume) as pdf:
    for page in pdf.pages:
        assert not page.images, 'PDF contains rasterized content'
        assert page.chars, 'PDF text is not searchable'
        for char in page.chars:
            assert 0 <= char['x0'] <= char['x1'] <= page.width
            assert 0 <= char['top'] <= char['bottom'] <= page.height

result = {'pages': len(pages), 'characters_per_page': list(map(len, pages)),
          'docx_text_matches_pdf': True, 'condensed_dsys_bullets': dsys_count,
          'architecture_governance_from_swift_to_ddn': True,
          'leadership_experience_on_first_page': True,
          'systems_engineering_first_positioning': True,
          'dsys_analytics_without_ai_ml': True, 'sentiment_at_swift_and_tappp': True,
          'links': links, 'text_only_pdf': True, 'text_within_page_bounds': True,
          'note': 'Local parsing and layout checks; not certification by an external ATS.'}
dest = root / 'resume/qa/checks.json'
dest.parent.mkdir(parents=True, exist_ok=True)
dest.write_text(json.dumps(result, indent=2), encoding='utf-8')
print(json.dumps(result, indent=2))
