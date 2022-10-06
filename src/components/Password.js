import React from 'react'
import '../password.css';
export default function Password(props) {

    const closeButton=(mode)=>{
        props.setAuthComp(mode)
   }

  return (
    <div className='auth-log'>
    
        <div className="login">
                 
            <div className="form">
            <div className="exit-x" onClick={()=>closeButton(false)}>x</div>
            <div className='title'>Enter a password</div>
                    <form>
                     
                        <div>
                            <input type="text" id="pass" name="pass" placeholder="Password"/>
                        </div>

                        <div>   
                            <input type="submit" value="Submit" />
                        </div>
                  
                  </form>
            </div>
        </div>
    </div>
  )
}
