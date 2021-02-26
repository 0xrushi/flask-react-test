import React from 'react';
import ChartCard from './chart-card';

class OneFullWidth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test:''
        };
    }

    render() {
        return (
            <div className="col" style={{"width":"100%"}}>
                <div className="card">
                    <div className="card-body">
                        {/* <div className="d-flex justify-content-between align-items-baseline mb-4 mb-md-1">
                            <h6 className="card-title mb-0">
                                SPY Index</h6>
                        </div> */}
                        {/* <div className="row align-items-start mb-2">
                            <div className="col-md-7">
                                <p className="text-muted tx-13 mb-3 mb-md-0">1-Minute Close Prices</p>
                            </div>
                        </div> */}
                        {/* <div className="flot-wrapper">
                  <div id="tradingViewChartSPY" className="flot-chart"><div className="tv-lightweight-charts" style={{ overflow: 'hidden', width: '528.328px', height: '300px', userSelect: 'none', WebkitTapHighlightColor: 'transparent' }}><table cellSpacing={0} style={{ height: '300px', width: '528.328px' }}><tbody><tr><td style={{ padding: '0px' }} /><td style={{ padding: '0px', position: 'relative', width: '476.328px', height: '274px' }}><div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}><canvas width={476} height={274} style={{ width: '476.328px', height: '274px', position: 'absolute', zIndex: 1, left: '0px', top: '0px' }} /><canvas width={476} height={274} style={{ width: '476.328px', height: '274px', position: 'absolute', zIndex: 2, left: '0px', top: '0px' }} /></div></td><td style={{ padding: '0px' }}><div style={{ height: '274px', overflow: 'hidden', width: '52px', left: '0px', position: 'relative', minWidth: '52px' }}><canvas width={52} height={274} style={{ width: '52px', height: '274px', position: 'absolute', zIndex: 1, left: '0px', top: '0px' }} /><canvas width={52} height={274} style={{ width: '52px', height: '274px', position: 'absolute', zIndex: 2, left: '0px', top: '0px' }} /></div></td></tr><tr><td style={{ padding: '0px' }} /><td style={{ height: '26px', padding: '0px', width: '476.328px' }}><div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}><canvas width={476} height={26} style={{ width: '476.328px', height: '26px', position: 'absolute', zIndex: 1, left: '0px', top: '0px' }} /><canvas width={476} height={26} style={{ width: '476.328px', height: '26px', position: 'absolute', zIndex: 2, left: '0px', top: '0px' }} /></div></td><td style={{ padding: '0px' }}><div style={{ width: '52px', height: '26px', overflow: 'hidden', minWidth: '52px' }}><canvas width={52} height={26} style={{ width: '52px', height: '26px' }} /></div></td></tr></tbody></table></div></div>
                </div> */}
                        <div className="ccc-height" id={this.props.id}>
                            <ChartCard/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OneFullWidth;