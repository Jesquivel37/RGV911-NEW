import React from 'react';
import '../departments.css';
import {Profile} from './Profile';
import Contact from './Contact';



function Departments(props) {
    
 
  return (
    <>
    <div className='departments-container'>
        <div className='department-title'><h1><span className='yellow'>{props.yellowTitle}</span> {props.whiteTitle}</h1></div>
        <div className='department-info'>
            
            <div className='department-top'>
                <div className='department-profile'>
                <Profile bg={props.ImagePath} bgPos={props.position} />
                    <div>
                        <small className='profile-name'>{props.departmentName}</small>
                        <small className='profile-title yellow'>{props.departmentTitle}</small>
                    </div>
                   
                </div>
                <div className='department-profile-side'>
                    <h2 className='department-little-quote'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</h2>

                    <p className='deparment-full-quote'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                    <p className='department-profile-info side-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
                    similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                </div>
            </div>
            
            
            <p className='department-profile-info second-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
                similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>


            <p className='department-profile-info second-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
                similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>

               

        </div>
        
    </div>
    <Contact />
    </>
  )
}

export default  Departments;



   