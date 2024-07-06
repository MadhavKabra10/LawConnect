import google.generativeai as genai
from dotenv import load_dotenv
import os
def summary(document):
    load_dotenv()  
    genai.configure(api_key=os.environ["API_KEY"])
    model = genai.GenerativeModel('gemini-1.5-flash')
    prompt=f"Give the summary of following content {document}"
    responses = model.generate_content(prompt)
    text=""
    for response in responses:
        for candidate in response.candidates:
#print (candidate)
# Access the text of the first segment
#print (candidate.content)
            text=candidate.content.parts[0]
            print (candidate.content.parts[0])
            print (type(candidate.content.parts[0]))
    return text
#print(summary("This appeal is preferred against the judgment of the Andhra Pradesh High Court answering the question referred to it in the negative, i.e., against the Revenue and in favour of the assessee. The question referred is  "))