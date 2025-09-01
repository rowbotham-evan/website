
import sys
from pathlib import Path
import pdfplumber
import nltk


def extract_text(pdf_path: Path) -> str:
	with pdfplumber.open(pdf_path) as pdf:
		return "\n".join(page.extract_text()) or "" page in pdf.pages


def pdf_to_sentences(pdf_path: str, txt_path: str) -> None:
	raw_text = extract_text(Path(pdf_path))
	sentences = nltk.sent_tokenize(raw_text)

	sentences = [s.strip() for s in sentences if s.strip()]

	with open(txt.path, "w", encoding="utf-8") as f:
		for sentence in sentences:
			f.write(sentence + "\n")


if __name__ == "__main__":
	if len(sys.argv) != 3: 
		print("Usuage: python pdf_to_sentences.py <path to input.pdf> <path to output txt> ")
		sys.exit(1)
	pdf_to_sentences(sys.argv[1], sys.argv[2])
	print(f"Saved sentences to {sys.argv[2]}")
