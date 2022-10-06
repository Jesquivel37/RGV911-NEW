import React, { useEffect } from 'react';
import BoardMembers from "../components/BoardMembers";
import Contact from "../components/Contact";
import guerra from '../assets/images/BOM/guerra.png';
import gonzales from '../assets/images/BOM/GGONZALES.jpg';
import suarez from '../assets/images/BOM/DSAUREZ.jpg';
import zamora from '../assets/images/BOM/JZAMORA.jpg';
import galvan from '../assets/images/BOM/AGALVAN.png';
import perez from '../assets/images/BOM/APEREZ.webp';
import montoya from '../assets/images/BOM/OMONTOYA.jpg';
import garza from  '../assets/images/BOM/RGARZA.png';
import lopez from  '../assets/images/BOM/RLOPEZ.jpg';
import unknown from '../assets/images/BOM/unknown.png';
import unknown_wm from '../assets/images/BOM/unknown-wm.png';



function BoardOfManagers() {

  useEffect(() => {
    document.title=" RGV911 - Board of Managers"
  }, [])

  return (
    <>
   <div className="board-container">
    <div className='board-title'><h1><span className='yellow'>BOARD</span> OF MANAGERS</h1></div>
      <div className='board'>
        <div className='board-card board-managers'>
          <BoardMembers 
            ImagePath={guerra}
            position="center"
            title="President"
            name="Sheriff J. E. 'Eddie' Guerra"
            address="711 El Cibolo RD Edinburg, TX 78541"
            number="956-383-8114"
             />

          <BoardMembers 
            ImagePath={gonzales}
            position="center"
            title="Vice President"
            name="Mayor Gilbert Gonzales"
            address="142 S. 7th St Raymondville, TX 78580"
            number="956-689-2443 ext. 1408"
             />
            <BoardMembers 
            ImagePath={suarez}
            position="center"
            title="Secretary"
            name="Mayor David Suarez"
            address="255 S. Kansas Ave Weslaco, TX 78596"
            number="956-968-3181"
             />

          <BoardMembers 
            ImagePath={zamora}
            position="center"
            title="Treasurer"
            name="Mayor Pro-Tem Joaquin 'J.J.' Zamora"
            address="1300 Houston Ave McAllen, TX 78501"
            number="956-681-1006"
             />

        </div>

        <div className='board-title'><h1><span className='yellow'>BOARD</span> MEMBERS</h1></div>

        <div className='board-card board-members'>
        <BoardMembers 
            ImagePath={galvan}
            position="center"
            name="Mayor Pro Tem Arturo Galvan Jr"
            address="416 S Alton BLVD. Suite BAlton, TX 78573"
            number="956-432-0760"
             />

          <BoardMembers 
            ImagePath={garza}
            position="center"
            name="Mayor Ramiro Garza Jr"
            address="P.O. Box 1079 Edinburg, TX 78540"
            number="956-383-7111"
             />
            <BoardMembers 
            ImagePath={perez}
            position="center"
            name="Mayor Alonzo 'AL' Perez Jr"
            address="PO Box 427 Elsa, TX 78543"
            number="956-262-2127"
             />

          <BoardMembers 
            ImagePath={unknown_wm}
            position="center"
            name="Mayor Yvette Cabrera"
            address="6603 S FM 494 Mission, TX 78572"
            number="956-519-0032"
             />

          <BoardMembers 
            ImagePath={montoya}
            position="center"
            name="Mayor Oscar D. Montoya"
            address="PO Box 837 Mercedes, TX 78570"
            number="956-565-3114"
             />

          <BoardMembers 
            ImagePath={lopez}
            position="center"
            name="Mayor Rodrigo 'Rigo' Lopez"
            address="P.O. Box 204 Penitas, TX 78576"
            number="956-581-3345"
             />
            <BoardMembers 
            ImagePath={unknown_wm}
            position="center"
            name="Mayor Alma D. Salinas"
            address="PO Box 249 Sullivan City, TX 78595"
            number="956-485-2828"
             />

          <BoardMembers 
            ImagePath={unknown}
            position="center"
            name="Judge Aurelio 'Keeter' Guerra"
            address="576 W. Main Ave. #152 Raymondville, TX 78580"
            number="956-689-3393"
             />
        </div>
        


      </div>
     
    
      
   </div>

   <Contact/>
   </>
   
  )
}

export default BoardOfManagers