import React from 'react'
import TNavebar from '../components/travels-components/TNavebar'
import Footer from '../components/landing page/Footer'
import { Outlet } from 'react-router-dom'

const TravelsLayout = () => {
  return (
    <>
      <TNavebar/>
      
      <Footer/>
    </>
  )
}

export default TravelsLayout
