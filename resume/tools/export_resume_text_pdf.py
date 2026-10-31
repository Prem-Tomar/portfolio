from html import escape
import os
from pathlib import Path

from docx import Document
from docx.text.hyperlink import Hyperlink
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate


ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / 'resume/generated/Prem_P_S_Tomar_Resume_2026-10-31.docx'
OUTPUT = SOURCE.with_suffix('.pdf')
FONTS = Path(os.environ.get('RESUME_FONT_DIR', 'C:/Windows/Fonts'))
for name, filename in [
    ('Calibri', 'calibri.ttf'), ('Calibri-Bold', 'calibrib.ttf'),
    ('Calibri-Italic', 'calibrii.ttf'), ('Calibri-BoldItalic', 'calibriz.ttf'),
    ('Code-Bold', 'consolab.ttf'),
]:
    pdfmetrics.registerFont(TTFont(name, str(FONTS / filename)))
pdfmetrics.registerFontFamily('Calibri', normal='Calibri', bold='Calibri-Bold', italic='Calibri-Italic', boldItalic='Calibri-BoldItalic')

INK, MUTED, ACCENT = '#202525', '#566260', '#006B67'
base = dict(fontName='Calibri', fontSize=10.5, leading=12.4, textColor=colors.HexColor(INK), spaceAfter=3)
styles = {}
for name, overrides in {
    'Normal': {},
    'Title': dict(fontName='Calibri-Bold', fontSize=24, leading=27, keepWithNext=True),
    'Subtitle': dict(fontSize=12, leading=15, textColor=colors.HexColor(ACCENT), keepWithNext=True),
    'Heading 1': dict(fontName='Code-Bold', fontSize=10.5, leading=13, textColor=colors.HexColor(ACCENT), spaceBefore=9, keepWithNext=True),
    'Heading 2': dict(fontName='Calibri-Bold', fontSize=11, leading=13, spaceBefore=7, keepWithNext=True),
    'Heading 3': dict(fontName='Calibri-Bold', spaceBefore=3, keepWithNext=True),
    'List Bullet': dict(leftIndent=9, bulletIndent=0, bulletFontName='Calibri', bulletFontSize=8),
}.items():
    styles[name] = ParagraphStyle(name, **(base | overrides))


def run_html(run):
    text = escape(run.text)
    if run.bold:
        text = f'<b>{text}</b>'
    if run.italic:
        text = f'<i>{text}</i>'
    attrs = []
    if run.font.size:
        attrs.append(f'size="{run.font.size.pt}"')
    if run.font.color.rgb:
        attrs.append(f'color="#{run.font.color.rgb}"')
    return f'<font {" ".join(attrs)}>{text}</font>' if attrs else text


story = []
docx = Document(SOURCE)
for para in docx.paragraphs:
    if para.paragraph_format.page_break_before:
        story.append(PageBreak())
    parts = []
    for part in para.iter_inner_content():
        if isinstance(part, Hyperlink):
            parts.append(f'<a href="{escape(part.url, quote=True)}" color="{ACCENT}">' + ''.join(run_html(r) for r in part.runs) + '</a>')
        else:
            parts.append(run_html(part))
    if not parts:
        continue
    style = styles.get(para.style.name, styles['Normal'])
    # Paragraph-level spacing mirrors the editable Word source.
    style = ParagraphStyle('local', parent=style)
    if para.paragraph_format.line_spacing_rule is not None and para.paragraph_format.line_spacing:
        style.leading = para.paragraph_format.line_spacing.pt
    style.keepWithNext = bool(para.paragraph_format.keep_with_next)
    story.append(Paragraph(''.join(parts), style, bulletText=chr(0x2022) if para.style.name == 'List Bullet' else None))


def footer(canvas, document):
    canvas.saveState()
    canvas.setFont('Calibri', 8)
    canvas.setFillColor(colors.HexColor(MUTED))
    canvas.drawRightString(A4[0] - 0.58 * 72, 20, f'Prem P S Tomar  |  {document.page}')
    canvas.restoreState()


class ResumePDF(SimpleDocTemplate):
    def afterPage(self):
        footer(self.canv, self)


pdf = ResumePDF(str(OUTPUT), pagesize=A4, leftMargin=.58*72, rightMargin=.58*72,
                        topMargin=.5*72, bottomMargin=.5*72,
                        title='Prem P S Tomar - Software Architect and Principal Engineer',
                        author='Prem P S Tomar', pageCompression=1)
pdf.build(story)
print(OUTPUT)
