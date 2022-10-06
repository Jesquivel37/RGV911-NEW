import React from 'react';
import Fade from 'react-reveal/Fade';
import LightSpeed  from 'react-reveal';


function Contact() {
    return(
            
            <div className="contact">
            
                <Fade top>
                    <h2 className="contact-title"><span className="yellow">—</span>Contact us<span className="yellow">—</span></h2>
                </Fade>
                <div className="address-info">

                <LightSpeed left>
                    <div className="mission">
                        <h5 className='address-title'> <span className="yellow">Mission</span> Statement</h5>
                        <div className='mission-info address-sm-info'>
                            <p className='address-sm-title'>To ensure optimal public safety throughout the region and work collaboratively to prevent, protect, respond to and recover from threats.</p>
                        </div>
                    </div>
                    


                              
                    <div className="mailing">
                        <h5 className='address-title'><span className="yellow">Vision</span> Statement</h5>
                        <div className='mailing-info address-sm-info'>
                            <p className='address-sm-title'>Providing a reliable, resilient, and sustainable regional emergency communication and 9-1-1 network to include advancements in technology, mobile contingency strategies, and NextGen 9-1-1 infrastructure.</p>
                        </div>
                        
                    </div>
                    </LightSpeed>

                    <Fade bottom>
                    <div className='logo'>
                        <img className="mission-logo" src={require('../assets/images/911.png')} alt="Logo" width="190px" height="190px" />
                    </div>
                    </Fade>
                    
                    <LightSpeed right>
                    <div className="building">
                        <h5 className='address-title'> <span className="yellow">Building</span> Address</h5>
                        <div className='building-info address-sm-info'>
                            <p className='address-sm-title'>1912 Joe Stephens Ave,</p>
                            <p className='address-sm-title'>Weslaco TX, 78599</p>
                            <p className='address-sm-title'>956-682-3481</p>
                        </div>
                    </div>                  
                    

                    <div className="hours">
                        <h5 className='address-title'> <span className="yellow">Office</span> Hours</h5>
                        <div className='hours-info address-sm-info'>
                            <p className='address-sm-title'>Monday - Friday</p>
                            <p className='address-sm-title'>8:00 am - 12:00 pm</p>
                            <p className='address-sm-title'>1:00 pm - 5:00 pm</p>
                        </div>
                    </div>
                    </LightSpeed>
                </div>
               
                <div className='copyright'>
                    <small className='copyright-top'> © 2022 RGV911 All Rights Reserved.</small>
                    <small className='copyright-bot'> Designed by J.E</small>
                </div>
                      
                
            </div>
    )
}

export default Contact;