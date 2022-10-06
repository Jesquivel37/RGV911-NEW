import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';



function Content(){
    const [cardActive, setCardActive] = useState(false);


    const handleCardSize = () => {
        setCardActive(!cardActive);
    }

    return(
        <div className="content">
                <Slide left>
                <div className="content-title">
                <span>—</span><h2>Who We Are</h2><span>—</span>
                </div>
                </Slide>
                
                <Slide right>
                { /* Start of card */}
                <div className="cards">         
                    <div className="card card-1" >
                        <div className="card-content">
                            <h3 className="card-title">Public Education</h3>
                            <p className={cardActive ? 'card-body-active' : 'card-body'}>
                            We provide presentations to our local cities, school, daycares, Emergency Medical Services (EMS), Fire and Police Departments within Hidalgo and Willacy County.
                            We promote and educate the public on how to correctly use the 9-1-1 system. By using multi-media, we demonstrate the proper way to call 9-1-1 and what is considered a 9-1-1 emergency call.
                            </p>
                            <p onClick={handleCardSize} className="card-learn-more yellow">Learn More</p>
                        </div>
    
                    </div>
                    {/* End of card */}
                   
                    { /* Start of card */}
                    <div className="card card-3">
                        <div className="card-content">
                            <h3 className="card-title ">9-1-1 | I.T</h3>
                            <p className={cardActive ? 'card-body-active' : 'card-body'}>
                            With the pervasive integration and sharing of data between multiple agencies, sites and/or systems; 
                            the threats and vulnerabilities have drastically increased. Staying ahead of threats that are ever more sophisticated and has its ongoing challenges. 
                            Today's call-centers are challenged to keep pace with the rapid shifts in technology. 
                            Our 9-1-1 | Information Technology Team considers innovative solutions and emphasize the necessity for truly secure computing environments in today’s PSAP.


                            </p>
                            <p onClick={handleCardSize} className="card-learn-more yellow">Learn More</p>
                        </div>
                    </div>
                    {/* End of card */}
                    { /* Start of card */}
                    <div className="card card-4">
                        <div className="card-content">
                            <h3 className="card-title">GIS</h3>
                            <p className={cardActive ? 'card-body-active' : 'card-body'}>
                            The RGV 9-1-1 GIS Program is actively engaged within our community of Hidalgo 
                            and Willacy County by providing a presentation to our local cities, schools, daycares, and 
                            all community-based events, so we may educate the citizens of the Rio Grande Valley on the proper use of 9-1-1 to obtain help in an emergency.
                            </p>
                            <p onClick={handleCardSize} className="card-learn-more yellow ">Learn More</p>
                        </div>
                    </div>
                    {/* End of card */}


                </div>
            </Slide>
        </div>

        
    )
}

export default Content;