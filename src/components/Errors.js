import React from 'react'
import '../pagenf.css';

export default function Errors(props) {
  
  return (
   
    <div id='background'>

    <div className='article'>
    <h1 className='article-title'><span className='yellow'>{props.yellowTitle}</span> {props.whiteTitle}</h1>
    <div className='article-info'>
        <p>{props.articleInfo} If you need access to a resource <a className='link' href="mailto:helpdesk@lrgvdc911.org">contact us</a></p>
        <p>&mdash; RGV911 IT Team</p>
    </div>
    <div className='article-img'>
        <img className='article-img' src={require('../assets/images/911.png')} alt="lrgdc911 logo" width="250px" height="250px" />
    </div>
    </div>
</div>
  )
}
