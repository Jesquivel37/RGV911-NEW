import React from 'react';
import Fade from 'react-reveal/Fade';
import video from '../assets/videos/rgv911-new.mp4'
function Hero(){
 
    return(
        <header className="home-hero">
            
            <video className='home-video' autoPlay={true}
            loop={true}
            controls={false} 
            playsInline
            muted>
                <source src={video} type='video/mp4' />
            </video>
            
            <Fade>
                <div className='home-hero-content'>
                    <h1 className='home-hero-title' >RGV <span className='yellow'> 9-1-1</span></h1>
                    
                </div>
            </Fade>
           
            
        </header>
    
    )
}

export default Hero;