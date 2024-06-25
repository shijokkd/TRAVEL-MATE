import React from 'react'
import logo from "../../assets/images/logo.png"
import THome from './THome'
import { Link } from 'react-router-dom'

function TNavebar() {
  return (
    <>
    <div className=' flex '>
        <div className=' h-[50px] md:h-[70px] w-[50%] bg-slate-200 flex  items-center gap-3 '> 
            <img src={logo} alt="" className=' h-[40px] md:h-full ml-4 w-[40px] md:w-[90px] ' />
            <h1 className='text-xl md:text-5xl font-TITAN'>Travel Mate</h1>
        </div>
        <div className=' h-[50px]  bg-slate-200 md:h-[70px] w-[50%] flex  justify-end items-center  text-sm md:text-2xl pr-4  md:pr-10'>
            <ul className=' flex gap-4 md:gap-10 '>
                <Link to={'/travelhome'}><li>Home</li></Link>
                <Link to={'/travelhome'}><li>Services</li></Link>
                <Link to={'/travelhome'}><li>About</li></Link>
                
                
            </ul>
        </div>
    </div>
    <THome/>
    
    </>
  )
}

export default TNavebar
