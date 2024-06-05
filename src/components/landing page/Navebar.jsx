import React from "react";
import logo from "../../assets/images/logo.png";
import { FaSearch } from "react-icons/fa";
import { IoReorderThreeOutline, IoClose } from "react-icons/io5";

import { useState } from "react";

function Navebar() {

  const [nav ,setNav]=useState(true)
  return (
    <div className=" h-9 w-full bg-sky-100 md:h-16 flex items-center justify-between  ">
      <div className=" w-[40%] lg:w-[30%] h-full flex items-center  ">
        <div className=" h-[95%] w-10 md:w-20 flex justify-center items-center px-2 ">
          
          <img src={logo} alt=""  className=" active:scale-110 " />
        </div>
        <h1 className=" text-[13px] md:text-2xl lg:text-3xl active:scale-110 font-serif"> TRAVEL MATE</h1>
      </div>
      <div className=" w-[35%] lg:w-[30%] h-[90%] flex gap-1 justify-center lg:justify-start items-center">
        <input type="text" className=" font-serif w-[80%] h-[60%] border-black border bg-transparent hover:bg-white rounded-md text-center md:text-xl active:scale-110  " placeholder="search"/>
        <button className=" h-[60%] w-[20%] md:w-20%] md:text-3xl text-sm flex items-center justify-center hover:bg-white  border border-black rounded active:bg-black active:text-white active:scale-110">
          <FaSearch className=" md:text-2xl" />
        </button>
      </div>
      <div className=" relative lg:w-[40%] w-[20%] h-full flex justify-end items-center px-3 text-3xl md:text-6xl  " >
        {nav?<IoReorderThreeOutline onClick={()=>setNav(false)} className=" hover:bg-black hover:text-white rounded-lg  active:scale-110" />:<IoClose onClick={()=>setNav(true)} className=" hover:bg-black hover:text-white rounded-lg  active:scale-110"  />}
       
        <div className={nav?"hidden":"absolute md:w-[200px] w-[80px] md:h-[200px] h-[120px] bg-transparent border border-black md:top-16 top-8  z-10 flex justify-center items-center backdrop-blur-2xl  "}> 
            <ul className=" text-[10px] md:text-xl  md:gap-6   z-10 top-5 flex justify-center  flex-col    ">
              <li className=" hover:bg-blue-400 rounded-lg active:scale-110 font-serif">HOME</li>
              <li className=" hover:bg-blue-400 rounded-lg active:scale-110 font-serif">SERVICES</li>
              <li className=" hover:bg-blue-400 rounded-lg active:scale-110 font-serif">ABOUT</li>

            </ul>
        </div>
       </div>
       
    </div>
  );
}

export default Navebar;
