import React from 'react';
import '../BoardOfManagers.css';
import Fade from 'react-reveal/Fade';
import { Profile } from './Profile';

function BoardMembers(props) {
    return(

            <Fade right>
                <div className="board-member">
                                    
                    <Profile bg={props.ImagePath} bgPos={props.position}/>
                    <div className='member-container'>

        
                        <div className='member-descript'>
                            <h2>{props.title}</h2>
                            <small>{props.name}</small> 
                        </div>
                        
                        <div className='member-info'>
                            <div className='info info-1'>
                                <h4 className='yellow'>Address:</h4>
                                <small>{props.address}</small>
                            </div>

                            <div className='info info-2'>
                                <h4 className='yellow'>Phone:</h4>
                                <small>{props.number}</small>
                            </div>
                        </div>                
                    </div>
                </div>
            </Fade>
    )
}


export default BoardMembers;