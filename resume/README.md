# Resume Source and Verification

The editable final DOCX is `Prem_P_S_Tomar_Resume_2026-10-31.docx`.
The final searchable PDF is `../public/resume.pdf`.

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

The verifier compares D-SYS bullets against the currently published PDF. If a
future requested edit intentionally changes those bullets, preserve a baseline
and adjust the relevant regression test deliberately, not merely to pass it.

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
export. The verifier checks three pages, text order/content, dates, links, page
bounds and absence of rasterized text. It does not certify any particular ATS.

After checks, copy the verified DOCX to this directory and the verified PDF to
`public/resume.pdf`. Increment the resume URL query in `app/page.tsx`, update the
expected PDF hash in `PROJECT_CONTEXT.md`, rebuild the site, then publish only
with user authorization. Do not edit files in `dist/` directly.
