from flask import Flask,request,jsonify
import os
from modelfunction import mainfunction
app = Flask(__name__)





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