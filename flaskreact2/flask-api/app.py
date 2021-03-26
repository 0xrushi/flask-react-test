from flask import Flask
from flask_cors import CORS
from flask import request
import requests
import json
import pandas as pd
import numpy as np
import matplotlib.dates as mdates
import datetime as dt
from indicators import EMA, ATR, SuperTrend, MACD, HA, BBand, RSI, Ichimoku

api_key = 'QTVZXI7KPLWEZ0LU'

app = Flask(__name__)
CORS(app)


def print_transactions(t):
    s=0
    for i in range(len(t)-1):
        if t[i]==1.0 and t[i+1] ==-1.0:
            s+=closep[i]
            print("Sold at Rs.{0} on {1} totalamt= {2}".format(closep[i],mdates.num2date(date[i]),s))
        elif t[i]==-1.0 and t[i+1] ==1:
            s-=closep[i]
            print("Bought at Rs.{0} on {1} totalamt= {2}".format(closep[i],date[i],s))
            
def process_response(dt_):
    df= pd.DataFrame.from_dict(dt_, orient='index')
    df.rename(columns={"open 1.": "open", "high 1.": "high"})
    #make index date to column
    df.reset_index(level=0, inplace=True)
    df.columns = ["date", "open", "high", "low", "close", "volume"]
    for i in range(1, len(df.columns)):
        df[df.columns[i]] = df[df.columns[i]].astype(float)
    x=MACD(df,base='close')
    #x= x.to_dict(orient='records')
    return x

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
    
    dt_ = response
    datelist= list(dt_[list(dt_.keys())[1]].keys())
    
    ohlc_dict = dt_[list(dt_.keys())[1]]
    ohlc_dict = process_response(ohlc_dict)
    print(ohlc_dict)


    ohlc_list=[]

    #for i in datelist:
    #    ohlc_list.append(list(ohlc_dict[i].values()))
    #    # ohlc_list.append(list(ohlc_dict[i].values())[:-1])

    mdict=[]
    #colnames_ohlc_dict = list(list(ohlc_dict.items())[0][1].keys())
    #mdf = pd.DataFrame.from_dict(dict(ohlc_dict), orient='index')
    #mdf.columns = ["date", "open", "high", "low", "close", "volume"]
    mdict = ohlc_dict.to_dict(orient="records")

    #mdict= mdict[::-1]
    print(mdict)
    return json.dumps(mdict)