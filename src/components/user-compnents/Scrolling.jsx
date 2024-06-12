import React from 'react'
import bus2 from "../../assets/images/bus2.jpg";






function Scrolling() {
  return (
   <>
   <div className=' h-[250px] w-full  '> 
    <marquee behavior="scroll" direction="left " className=" bg-slate-200 after:">
        <div className=' flex  h-[250px] w-auto  '>
        <img className='w-[300px] bg-slate-900 h-full' src={bus2} alt="aaaaaa" />
        <img className='w-[300px] bg-slate-900 h-full' src={bus2} alt="aaaaaa" />
        <img className='w-[300px] bg-slate-900 h-full' src={bus2} alt="aaaaaa" />
        <img className='w-[300px] bg-slate-900 h-full' src={bus2} alt="aaaaaa" />
        <img className='w-[300px] bg-slate-900 h-full' src={bus2} alt="aaaaaa" />
       
      
        </div>
    </marquee>
   
   </div>
   </>
  )
}

export default Scrolling
