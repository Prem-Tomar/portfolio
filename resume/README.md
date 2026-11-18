# Resume Source and Verification

The current release DOCX is `Prem_P_S_Tomar_Resume_2026-11-18_Systems_Leadership.docx`.
The final searchable PDF is `../public/resume.pdf`.
Content revision: 18 November 2026. The user reviewed and authorized publication
of this revision on 18 November; LinkedIn remains unchanged. Positioning is systems engineering and
architecture with engineering leadership. Lead with hands-on technical evidence:
concurrent processing, service/data contracts, runtime modernization, profiling
and production diagnosis. Retain concurrent-project ownership, stakeholder
alignment, mentoring, release readiness and support handover, grounded in the
systems being built. Actual titles, dates and education are unchanged.
The earlier same-day leadership-led draft is retained locally for comparison.

DDN is the current Staff Engineer role,
Nov 2026 - Present, within Global Engineering. Current work covers EXAScaler
Management Framework (EMF) and the Lustre HTTP interface for client integrations.
Security coverage describes relevant integration considerations, not personally
delivered controls or benchmarks. Only EXAScaler is the confirmed DDN assignment.
Sentiment analysis belongs to Swift and TAPPP; D-SYS retains analytics, structured
data preparation and reporting, not AI/ML.

AI coverage is explicit in the summary, Core Skills and relevant responsibilities:
GenAI/Bedrock/RAG/LLM decision support at TAPPP; ML shipment intelligence at Swift.
Agentic AI describes bounded coding-agent use with human review, not ownership of
production autonomous agents. MCP, LangChain/LangGraph and agent orchestration
remain ongoing or planned study. Keep existing non-AI skills and dates intact.

## Build

Use a Python environment with the versions in `requirements.txt`.
From the repository root:

```text
python resume/tools/build_architect_resume.py
python resume/tools/export_resume_text_pdf.py
python resume/tools/verify_architect_resume.py
```

Outputs go to ignored `resume/generated/`. The authoring script contains the
complete approved resume text and layout. The PDF exporter reads that generated
DOCX so the two artifacts have the same text. It embeds Calibri and Consolas from
`C:/Windows/Fonts` by default. Set `RESUME_FONT_DIR` to a licensed directory with
the same font filenames on another machine. Do not redistribute font files.

The verifier checks chronology, role-specific facts and text agreement. The
18 November rewrite condenses D-SYS to four bullets, retaining its technologies,
role progression, assignments and analytics scope. Tests forbid D-SYS AI/ML claims
and require sentiment analysis under Swift and TAPPP. They also require the
user-confirmed architecture process (RFCs, ADRs, sequence diagrams and release
reviews) from Swift to DDN, without assigning it to earlier roles. Do not invent
director titles, budgets or line-management scope to strengthen positioning.

## Visual QA

Render every PDF page with Poppler and inspect it at readable resolution. Render
the DOCX independently with a supported document renderer or Microsoft Word.
The included PowerShell helper exports a Word layout preview:

```powershell
./resume/tools/export_resume_pdf.ps1 -DocxPath '<absolute generated DOCX>' -PdfPath '<absolute new QA PDF>'
```

Word's PDF export on the original machine rasterized text despite export flags.
It was used only to verify DOCX layout. The delivered PDF was produced by the
text-preserving ReportLab exporter. Never replace the public PDF with an image-only
export. The verifier checks three pages, text order/content, current DDN facts, dates, links, page
bounds and absence of rasterized text. It does not certify any particular ATS.

18 November QA: the bundled DOCX renderer has no LibreOffice executable; Word
reports three pages but PDF export fails with COM error 0x80004005. The delivered
searchable PDF is independently generated and visually checked; retain this
limitation rather than claiming successful Word PDF rendering. All three DOCX
pages were visually checked in Word's print preview as the native-layout fallback.
The systems-first revision also passes three-page text/layout checks; all PDF
pages and Word pagination were reviewed. Desktop (1280 x 900) and mobile
(390 x 844) browser checks found no text overflow, including expanded TAPPP
details. The local website links to the new PDF with `?v=20261118-r12`.

After checks, copy the verified DOCX to this directory and the verified PDF to
`public/resume.pdf`. Increment the resume URL query in `app/page.tsx`, update the
expected PDF hash in `PROJECT_CONTEXT.md`, rebuild the site, then publish only
with user authorization. Do not edit files in `dist/` directly.
