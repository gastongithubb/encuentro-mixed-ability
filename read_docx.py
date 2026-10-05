import docx
import sys

def main(filepath):
    try:
        doc = docx.Document(filepath)
        for element in doc.element.body:
            if element.tag.endswith('p'):
                para = docx.text.paragraph.Paragraph(element, doc)
                if para.text.strip():
                    print(para.text)
            elif element.tag.endswith('tbl'):
                table = docx.table.Table(element, doc)
                for row in table.rows:
                    row_data = []
                    for cell in row.cells:
                        row_data.append(cell.text.strip().replace('\n', ' '))
                    print(" | ".join(row_data))
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    main(sys.argv[1])
