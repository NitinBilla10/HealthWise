from flask import Flask,request,jsonify
import os
from flask_cors import CORS
from modelfunction import mainfunction
app = Flask(__name__)


CORS(app) 


@app.route("/api",methods=['GET','POST'])
def hello_world():
    if request.method=='POST':
      content=request.get_json()
      response = mainfunction(content['symptoms'])
      return response
    else:
       return "404 not found"

if __name__=="__main__":
    app.run(debug=True)