import React, { useState  } from 'react'
import bg from "../../assets/images/team.jpg"
import VehicleAdd from './VehicleAdd'


function THome() {
  const [page ,setPage]=useState(true)
  return (
    <>
   {page? <div   className='h-[40vh]  bg-contain relative  bg-center  bg-no-repeat w-full   md:h-[90vh]  bg-gradient-to-r from-white to-[#c1e4f4]'> 
        <img src={bg} alt="" className=' h-full w-full ' />
        <div className='h-full w-1/2  gap-2 top-0 absolute flex flex-col justify-center items-center' >
           <h1 className=' md:w-[80%]    lg:text-4xl md:text-3xl text-sm font-TITAN text-center  text-gray-400  shadow-2xl '> <span className=' lg:text-5xl md:text4xl text-xl text-[#c1e4f4]'>Level</span>  Up Your Business with Our <br /> Integrated Travel <span className=' lg:text-5xl md:text4xl text-xl text-[#c1e4f4]'>Solutions</span> </h1>
           <h2 className=' text-center drop-shadow-2xl text-xs md:text-xl text-gray-400'>Add Your  Packages and  Vehicles</h2>

        <div className=' w-[70%] h-[15%] flex justify-center items-center gap-[30%]  text-gray-500'>
          <button className=' text-[10px] md:text-lg bg-[#c1e4f4] w-[100px] rounded-2xl md:h-[50px] hover:scale-110 '   >  Packeage </button>
          <button onClick={()=>setPage(false)} className=' text-[10px] md:text-lg  bg-[#c1e4f4] w-[100px] md:h-[50px] rounded-2xl hover:scale-110 '> Vehicles </button>
        </div>
        
        </div>

    </div>:<VehicleAdd/>} 

   
    </>
  )
}

export default THome
