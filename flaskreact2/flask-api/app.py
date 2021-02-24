from flask import Flask
from flask_cors import CORS
from flask import request
import requests
import json

api_key = 'QTVZXI7KPLWEZ0LU'

app = Flask(__name__)
CORS(app)

@app.route('/hello')
def say_hello_world():
    return {'result': "Hello World"}

@app.route('/getstock')
def get_TS_Intraday():
    symbol = request.args.get('symbol')
    inter = request.args.get('interval')
    apikey = 'QTVZXI7KPLWEZ0LU'
    response = (requests.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={0}&interval={1}min&outputsize=full&apikey={2}'
        .format(symbol, inter, apikey))).json()
    
    dt = response
    datelist= list(dt[list(dt.keys())[1]].keys())
    
    ohlc_dict = dt[list(dt.keys())[1]]

    ohlc_list=[]

    for i in datelist:
        ohlc_list.append(list(ohlc_dict[i].values()))
        # ohlc_list.append(list(ohlc_dict[i].values())[:-1])

    mdict=[]
    for i in range(len(ohlc_list)):
        mdict.append({
            'date':datelist[i],
                'open':ohlc_list[i][0],
                'high':ohlc_list[i][1],
                'low':ohlc_list[i][2],
                'close':ohlc_list[i][3],
                'volume':ohlc_list[i][4]
            
        })

    mdict= mdict[::-1]
    print(mdict)
    return json.dumps(mdict)