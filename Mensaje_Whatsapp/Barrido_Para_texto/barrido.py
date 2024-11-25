from PIL import Image
from pytesseract import *

pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

img = Image.open("img2.png")

resultado = pytesseract.image_to_string(img)

print(resultado)