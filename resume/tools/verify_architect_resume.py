import json
import os
import re
from pathlib import Path

import pdfplumber
from docx import Document
from pypdf import PdfReader


root = Path(__file__).resolve().parents[2]
resume = root / 'resume/generated/Prem_P_S_Tomar_Resume_2026-11-06.pdf'
source = Path(os.environ.get('RESUME_BASELINE_PDF', root / 'public/resume.pdf'))
docx = Document(resume.with_suffix('.docx'))
reader = PdfReader(resume)
pages = [p.extract_text() for p in reader.pages]
normalize = lambda text: re.sub(r'\s+', ' ', text).strip()
text = normalize(' '.join(pages))
source_text = normalize(' '.join(p.extract_text() for p in PdfReader(source).pages))
assert len(pages) == 3
assert all(len(page) > 2000 for page in pages)
assert pages[0].startswith('PREM P S TOMAR')
assert 'Agentic AI and AI-assisted engineering:' in pages[0]
assert text.index('Agentic AI and AI-assisted engineering:') < text.index('PROFESSIONAL EXPERIENCE')
assert 'AI ASSISTED ENGINEERING' not in text
assert 'Systems programming: Rust, C++, C, Python;' in text
assert text.index('Systems programming:') < text.index('AI/ML and Generative AI:') < text.index('Backend and architecture:')
assert text.index('EDUCATION') < text.index('Ongoing study and planned practice:')
assert 'Ongoing study and planned practice:' in pages[2]
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
    'Lustre', 'HPC', 'ultra-low-latency',
]:
    assert term in text, f'Missing expected detail: {term}'
for term in ['ppst89', 'Incoming Staff Engineer', 'Starts 2 November 2026', 'Oracle-ready', 'Est Id', 'Member Id', 'Jun 2024 - Oct 2026', 'Sep 2021 - Aug 2022', 'Nov 2019 - Aug 2021', 'Aug 2021 - May 2023', '\ufffd']:
    assert term not in text, f'Unexpected or outdated text: {term}'
assert text.count('Present') == 1, 'Only DDN is a current employer'
assert 'DDN (DataDirect Networks India Private Limited)' in pages[0]
ddn_text = text.split('DDN (DataDirect Networks India Private Limited)', 1)[1].split('SwissClear Services', 1)[0]
assert 'Relevant integration security considerations' in ddn_text
assert not re.search(r'\b(?:SFA|Infinia|prototype|benchmark|achieved|delivered)\b|\d+%', ddn_text, re.I)
assert not re.search(r'\b(?:RAG|LLM|GenAI|LangChain|LangGraph)\b', ddn_text)
tappp_text = text.split('SwissClear Services Private Limited (TAPPP)', 1)[1].split('Fermyon Technologies India Private Limited', 1)[0]
for term in ['Generative AI (GenAI)', 'AWS Bedrock', 'retrieval-augmented generation (RAG)', 'LLM-backed decision support']:
    assert term in tappp_text, f'Missing TAPPP AI responsibility: {term}'
skills_text = text.split('CORE SKILLS', 1)[1].split('PROFESSIONAL EXPERIENCE', 1)[0]
for term in ['AI/ML', 'GenAI', 'RAG', 'LLM', 'Agentic AI', 'Coding agents', 'diff-set generation']:
    assert term in skills_text, f'Missing AI skill: {term}'

inside_dsys = False
dsys_count = 0
dsys_text = []
analytics_bullet = 'Used Python for analytics, structured data preparation, and reporting.'
for para in docx.paragraphs:
    if para.text.startswith('D-SYS Data Solutions Private Limited |'):
        inside_dsys = True
    elif para.text.startswith('Aadi Infotech'):
        inside_dsys = False
    if inside_dsys:
        dsys_text.append(para.text)
    if inside_dsys and para.style.name == 'List Bullet':
        # User correction on 1 November: retain analytics, remove AI/ML claims.
        if para.text != analytics_bullet:
            assert normalize(para.text) in source_text, 'Unrelated D-SYS responsibility was altered'
        dsys_count += 1
assert dsys_count == 9
assert analytics_bullet in dsys_text
assert not re.search(r'\b(?:AI|ML|sentiment|recommendation|semi-supervised|intelligence)\b|model experimentation', ' '.join(dsys_text), re.I)
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
          'docx_text_matches_pdf': True, 'dsys_bullets_after_correction': dsys_count,
          'dsys_analytics_without_ai_ml': True, 'sentiment_at_swift_and_tappp': True,
          'links': links, 'text_only_pdf': True, 'text_within_page_bounds': True,
          'note': 'Local parsing and layout checks; not certification by an external ATS.'}
dest = root / 'resume/qa/checks.json'
dest.parent.mkdir(parents=True, exist_ok=True)
dest.write_text(json.dumps(result, indent=2), encoding='utf-8')
print(json.dumps(result, indent=2))
