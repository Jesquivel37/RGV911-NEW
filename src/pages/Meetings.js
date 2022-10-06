import React, { useEffect, useState } from 'react'
import Password from '../components/Password';
import '../meetings.css';

export default function Meetings(props) {

  

  useEffect(() => {
    document.title=" RGV911 - Meetings"
  }, [])



  return (
    <>
       

    <div className='meetings'>


         <div className='years-container'>

        </div>

        <div className='board-body'> 
        <div className='tb-resp'>
       
          <table className='table' id="myTable">
            <thead>
              <tr>
                <th>Date</th>
                <th>Agenda</th>
                <th>Minutes</th>
                <th>Approved Documents</th>
              </tr>
            </thead>
            <tbody>
            
            </tbody>
          </table>
        </div>
        </div>
       
    </div>
        
    </>
  )
}
