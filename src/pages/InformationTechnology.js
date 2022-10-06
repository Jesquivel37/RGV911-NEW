import React from 'react'
import Departments from '../components/Departments'
import ImagePath from '../assets/images/staff/DMORENO.jpg';

export default function InformationTechnology() {
  return (
    <Departments 
            ImagePath={ImagePath}
            position="center"
            yellowTitle="INFORMATION"
            whiteTitle="TECHNOLOGY"
            departmentName="Dennis Moreno"
            departmentTitle="Assistant Director"
        />
  )
}
