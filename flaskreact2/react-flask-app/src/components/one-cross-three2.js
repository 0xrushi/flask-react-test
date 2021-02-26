import React from 'react';
import ChartCard from './chart-card';

class OneCrossThree2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test:''
        };
    }

    render() {
        return (
            <div className="col-12 col-md-4 col-lg-4 col-xl-4 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className=" row d-flex justify-content-between align-items-baseline mb-4 mb-md-1">
                            <h6 className="card-title mb-0">
                                SPY Index</h6>
                        </div>
                        <div className="row align-items-start mb-2">
                            <div className="col-md-7">
                                <p className="text-muted tx-13 mb-3 mb-md-0">1-Minute Close Prices</p>
                            </div>
                        </div>
                        <div id={this.props.id} className="row ccc-height" >
                            <ChartCard/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OneCrossThree2;