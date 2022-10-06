import React, { useEffect } from 'react';
import Departments from '../components/Departments';
import ImagePath from '../assets/images/staff/MCRUZ.jpg';
function ExecutiveDirector() {


    useEffect(() => {
        document.title=" RGV911 - Executive Director"
      }, [])

    return (
        <Departments 
            ImagePath={ImagePath}
            position="center"
            yellowTitle="EXECUTIVE"
            whiteTitle="DIRECTOR"
            departmentName="Manuel Cruz"
            departmentTitle="Executive Director"
        />
        
    )
}

export default ExecutiveDirector;