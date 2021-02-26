import React from 'react';

class MarketDirectionCards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test:''
        };
    }

    render() {
        return (
          <div className="col-md-3 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-baseline">
                <h6 className="card-title mb-1">Market Direction</h6>
              </div>
              <div className="row">
                <div className="col-12 col-md-12 col-xl-12">
                  <h4 className="mb-2" id="market_direction">Bullish</h4>
                  <div className="d-flex align-items-baseline">
                    <p id="market_arrow" className="text-success">
                      <span id="market_change">0.309%</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1={12} y1={19} x2={12} y2={5} /><polyline points="5 12 12 5 19 12" /></svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
    }
}

export default MarketDirectionCards;