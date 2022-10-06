import React, { useEffect } from 'react'
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Content from "../components/Content";
import Stats from "../components/Stats";

export default function Home() {

  useEffect(() => {
    document.title=" RGV911 - Home"
  }, [])
  
  return (
    <div className='home-container'>
        <Hero />
        <Stats />
        <Content />
        <Contact />
  
    </div>
  )
}

