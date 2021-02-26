

import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

function parseData(parse) {
	return function(d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;

		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

export function getData() {
	const promiseMSFT = fetch("/getstock?symbol=qqq&interval=15")
		.then(response => response.json())
        .then(data => {
            let state = JSON.parse(JSON.stringify(data));
            console.log(state);
            let d = state.map((obj) => {
                // let parse = timeParse("%Y-%m-%d", obj.date);
                obj.date = Date.parse(obj.date);
                return obj;
              })
            d.sort((a, b) => {
				return a.date.valueOf() - b.date.valueOf();
			});
            // const sortedActivities = d.sort((a, b) => b.date - a.date);
            // console.log(sortedActivities);
            return d;
        });
        // .then(data => console.log(data))
		// .then(data => tsvParse(data, parseData(parseDate)))
	return promiseMSFT;
}
