from flask import Flask, jsonify, request
from ranker import ranking
from gemini import summary
from flask_cors import CORS
app = Flask(__name__)

@app.route('/legalhelp', methods=['GET', 'POST'])
def legal_help():
    if request.method == 'GET':
        return jsonify({"message": "Welcome to Legal Help. Please submit your request."})
    elif request.method == 'POST':
        data = request.get_json()
       # print(data['email'])
        summ=summary(data["email"])
        #print(summ.text)
        ran=ranking(data["email"])
      #  print(ran,summ)
        return {"summary":summ.text,"files":ran}

CORS(app, origins=['http://localhost:3000', 'https://law-connect-blond.vercel.app'])
if __name__ == '__main__':
    app.run(debug=True)
