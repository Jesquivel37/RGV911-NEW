import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';

function Footer() {
    return(
        <footer>
                <div className="footer">
                <LightSpeed right>

               
                    <h1 className="footer-title"><span className="yellow"></span>Contact us<span className="yellow"></span></h1>
                    <ul>
                        <li><span className="yellow">Mailing</span>Address</li>
                        <li>RGV 9-1-1</li>
                        <li>301 W. Railroad</li>
                        <li>Weslaco TX, 7896</li>
                    </ul>
                </LightSpeed>

                <LightSpeed left>
                    <ul>
                        <li><span className="yellow">Building</span>Address</li>
                        <li>1912 Joe Stephens Ave</li>
                        <li>Weslaco TX, 78599</li>
                        <li>956-682-3481</li>
                    </ul>
                </LightSpeed>
                </div>
        </footer>
    )
}

export default Footer;