import React from 'react'
import Departments from '../components/Departments'
import ImagePath from '../assets/images/staff/JGARCIA1.jpg';

export default function Gis() {
  return (
    <Departments 
            ImagePath={ImagePath}
            position="center"
            yellowTitle="GEOGRAPHIC"
            whiteTitle="INFORMATION SYSTEMS"
            departmentName="Joe Garcia"
            departmentTitle="Assistant Director"
        />
  )
}
