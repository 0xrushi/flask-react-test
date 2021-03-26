import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import ApexCharts from 'apexcharts';
// import ReactApexChart from 'react-apexcharts';
import OneCrossThree from './one-cross-three';
import OneFullWidth from './one-full-width';
import '../App.css';
import MarketDirectionCards from './market-direction-cards';
import NegativeValuesBarChart from './negative-values-bar-chart';
import ChartCard from './chart-card';
import OneCrossThree2 from './one-cross-three2';


let state = {
    'root':'',
    'data' : [{'test':'test'}]
};

function parentWidth(elem) {
    return elem.parentElement.clientHeight;
}

function Homepage() {
    const [placeholder, setState] = useState([]);


    useEffect(() => {
        fetch('/getstock?symbol=qqq&interval=15').then(res => res.json()).then(data => {
            state = { 'root': JSON.parse(JSON.stringify(data))};

        });

    }, []);


    return (
        <div className="App">
            {/* <p>Flask says {placeholder}</p> */}
            <div className="container-fluid">

                <div className="row flex-grow">
                    <MarketDirectionCards />
                    <MarketDirectionCards />
                    <MarketDirectionCards />
                    <MarketDirectionCards />
                </div>

                <div className="row mt-4">
                    <OneCrossThree2 id="chart"/>
                    <OneCrossThree2 id="chart2"/>
                    <OneCrossThree2 id="chart3" />
                </div>
                <div className="row mt-4">
                    <OneFullWidth id="chart4" />
                </div>
                <div className="row mt-4">
                    <NegativeValuesBarChart horizontal={true}/>
                </div>


                <div className="row mt-4">

                    <div className="col-md-8 stretch-card grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-baseline mb-2">
                                    <h6 className="card-title mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-volume-2 icon-lg highlighted-text pb-3px"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg> Market News</h6>
                                </div>
                                <p className="text-muted mb-4">Latest market news related to market indices SPY, DIA, QQQ, and IWM.</p>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Ticker</th>
                                            <th scope="col">Title</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>2021-02-19 19:45:10</td>
                                            <td>DIA</td>
                                            <td><a href="#">U.S. Stock ETFs Waver as Cyclicals Gain Momentum</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>2021-02-19 19:45:10</td>
                                            <td>DIA</td>
                                            <td><a href="#">U.S. Stock ETFs Waver as Cyclicals Gain Momentum</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>2021-02-19 19:45:10</td>
                                            <td>DIA</td>
                                            <td><a href="#">U.S. Stock ETFs Waver as Cyclicals Gain Momentum</a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-5">
                                            <div className="dataTables_info" id="news_table_info" role="status" aria-live="polite">
                                                Showing 1 to 5 of 16 entries
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <div className="dataTables_paginate paging_simple_numbers" id="news_table_paginate">
                                                <ul className="pagination">
                                                    <li className="paginate_button page-item previous   " id="news_table_previous">
                                                        <a href="#" aria-controls="news_table" data-dt-idx={0} tabIndex={0} className="page-link">
                                                            Previous
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item active">
                                                        <a href="#" aria-controls="news_table" data-dt-idx={1} tabIndex={0} className="page-link">
                                                            1
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item ">
                                                        <a href="#" aria-controls="news_table" data-dt-idx={2} tabIndex={0} className="page-link">
                                                            2
                                                        </a></li><li className="paginate_button page-item ">
                                                    <a href="#" aria-controls="news_table" data-dt-idx={3} tabIndex={0} className="page-link">
                                                        3
                                                    </a>
                                                </li>
                                                    <li className="paginate_button page-item ">
                                                        <a href="#" aria-controls="news_table" data-dt-idx={4} tabIndex={0} className="page-link">
                                                            4
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item next" id="news_table_next">
                                                        <a href="#" aria-controls="news_table" data-dt-idx={5} tabIndex={0} className="page-link">
                                                            Next
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 stretch-card grid-margin">
                        <NegativeValuesBarChart horizontal={false}/>
                    </div>
                </div>

                <div className="row mt-4">
                    {/* <NegativeValuesBarChart /> */}
                </div>
            </div>
        </div>
    );
}

export default Homepage;