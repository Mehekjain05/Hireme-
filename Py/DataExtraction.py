import PyPDF2
import re
import nltk
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk.tokenize import word_tokenize, sent_tokenize

# Open the PDF file in binary mode
p="C:\Vedant_\Projects\SmartHire\DATA\Raw_CV\Hackathon_12_3_23.pdf"
with open(p, 'rb') as pdf_file:
    # Create a PDF reader object
    pdf_reader = PyPDF2.PdfReader(pdf_file)

    # Extract text from all pages of the PDF file
    resume_text = ""
    for page_num in range(len(pdf_reader.pages)):
        page_obj = pdf_reader.pages[page_num]
        resume_text += page_obj.extract_text()

    # Print the extracted text
    print(resume_text)

comp_regex = r'Competitions\n([\w\s+\n-]+)\n'
comp = re.findall(comp_regex, resume_text, re.DOTALL)
print(comp)
info_dict = {'Competitions': comp[0].strip() if comp else ''}
print(info_dict)

print("=============CLEANING===============")
# import nltk

# nltk.download('stopwords')

from nltk.corpus import stopwords

stopwords.words('english')
# nltk.download('stopwords')
# nltk.download('punkt')

def preprocess_text(text):
    # Tokenize the text into words
    words = word_tokenize(text.lower())

    # Remove stop words
    stop_words = set(stopwords.words('english'))
    words = [word for word in words if word not in stop_words]

    # Stem the words
    stemmer = PorterStemmer()
    words = [stemmer.stem(word) for word in words]

    # Join the words back into a string
    text = ' '.join(words)

    return text

# filtered_text = preprocess_text(resume_text)
# print(filtered_text)

name_regex = r'(\b[A-Z][a-z]+(?: [A-Z][a-z]+)?\b)'
# email_regex = r'([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)'
phone_regex = r'(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})'

# Search for the name, email, and phone number in the pre-processed text
name = re.search(name_regex, resume_text).group()
email = re.search( r'([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)', resume_text).group()
phone = re.search(r'(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})', resume_text).group()

# Print the extracted name, email, and phone number
print('Name:', name)
print('Email:', email)
print('Phone:', phone)
# return resume_text For HATIM


