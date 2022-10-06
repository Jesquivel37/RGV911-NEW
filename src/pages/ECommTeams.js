import React, { useEffect } from 'react'
import Errors from '../components/Errors'

export default function ECommTeams() {

  useEffect(() => {
    document.title=" RGV911 - Ecomm Teams"
  }, [])

  return (
    <Errors yellowTitle="Under" whiteTitle="Construction" articleInfo="This page is under construction"/>
  )
}
