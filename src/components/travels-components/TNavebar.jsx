import React from 'react'
import logo from "../../assets/images/logo.png"
import THome from './THome'
import Footer from '../landing page/Footer'

function TNavebar() {
  return (
    <>
    <div className=' flex '>
        <div className=' h-[50px] md:h-[70px] w-[50%] bg-slate-200 flex  items-center gap-3 '> 
            <img src={logo} alt="" className=' h-[40px] md:h-full ml-4 w-[40px] md:w-[90px] ' />
            <h1 className='text-xl md:text-5xl font-TITAN'>Travel Mate</h1>
        </div>
        <div className=' h-[50px]  bg-slate-200 md:h-[70px] w-[50%] flex justify-end items-center  text-sm md:text-2xl pr-4  md:pr-10'>
            <ul className=' flex gap-4 md:gap-10 '>
                <li>Home</li>
                <li>About</li>
                <li >Services</li>
            </ul>
        </div>
    </div>
    <THome/>
    <Footer/>
    
    </>
  )
}

export default TNavebar
