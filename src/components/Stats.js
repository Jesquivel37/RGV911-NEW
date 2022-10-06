import React from 'react';
import Fade from 'react-reveal/Fade';

function Stats(){



    return(
        <div  className="stats reveal">
        <Fade top>
            <div className="row row-1">
                <div className="box box-1">
                    <h2 className="yellow">2</h2>
                    <h2>Counties</h2>
                </div>
                <div className=" box box-2">
                    <h2 className="yellow">25</h2>
                    <h2>Municipalities</h2>
                </div>
                <div className="box box-3">
                    <h2 className="yellow">17</h2>
                    <h2>PSAPS</h2>
                </div>
            </div>
            <div className="row row-2">
                <div className="box box-1">
                    <h2 className="yellow">882,416</h2>
                    <h2>Residents Served</h2>
                </div>
                <div className="box box-2">
                    <h2 className="yellow">41,964</h2>
                    <h2>Average 9-1-1 Calls Per Month</h2>
                </div>
                <div className="box box-3">
                    <h2 className="yellow">1,418</h2>
                    <h2>Average Calls Per Day</h2>
                </div>
            </div>
        </Fade>
        </div>
    )
}

export default Stats;