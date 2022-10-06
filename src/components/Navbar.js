import React, {  useEffect, useState } from 'react';
import {useLocation, NavLink} from "react-router-dom";
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce'




function Nav() {


   const [active, setActive] = useState(false);
   const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
   const {pathname} = useLocation();

   useEffect(() => {
    setActive(false);
   setBurgerClass("burger-bar unclicked");
   }, [pathname]);

   const toggle = (e) => {
    if(!active) {
        setBurgerClass("burger-bar clicked")
    }
    else {
        setBurgerClass("burger-bar unclicked")
    }
    setActive(!active)
    
   }

  return (
    <nav className='nav-info'>
        <div className="burger-menu"  onClick={toggle}>
            <div className={burgerClass} ></div>
            <div className={burgerClass} ></div>
            <div className={burgerClass} ></div>
        </div> 

        <Bounce top><div className='nav' id={active ? "hidden" : " "} >
        
        <NavLink exact="true" to="/">
            Home
        </NavLink>
        <NavLink to="/BoardOfManagers">
            Board of Managers
        </NavLink>
        <NavLink to="/Meetings">
            Meetings
        </NavLink>
        <div className="dropdown">
        <NavLink to="/Departments">
            Departments <i className="arrow-down yellow fa-solid fa-caret-down"></i>
        </NavLink>
        <Flip top>
        <div className="dropdown-content">
                <NavLink to="Departments/ExecutiveDirector">Executive Director</NavLink>
                <NavLink to="Departments/InformationTechnology">Information Technology</NavLink>
                <NavLink to="Departments/Gis">GIS</NavLink>
        </div>
        </Flip>
        </div>
        </div>
        </Bounce>
        
    
    </nav>
  )
}

export default Nav;