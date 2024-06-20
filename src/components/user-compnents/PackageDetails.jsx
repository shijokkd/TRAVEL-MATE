import React, { useState } from "react";
import Navebar from "../landing page/Navebar";
import Footer from "../landing page/Footer";
import { IoLocationOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
function PackageDetails() {
  const [image , setImage]=useState()
  return (
    <>
      <Navebar />
      <div className=" w-[100%] md:h-[90vh] h-[800px] bg-sky-100 flex justify-center items-center ">
        <div className=" w-[70%] h-[85%] bg-white   shadow-[10px_10px_10px_10px_rgba(0,0,0,0.3)]  ">
          <div className=" w-full h-2/3 bg-slate-300 md:flex ">
            <div className=" h-1/2 md:h-full md:w-1/2 bg-green-300">
              
              <img
                src="https://images.pexels.com/photos/25070540/pexels-photo-25070540/free-photo-of-a-blue-and-white-house-with-potted-plants.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className=" w-full h-full"
              />
            </div>
            <div className=" h-1/2 md:h-full md:w-1/2 bg-sky-100 md:flex md:flex-col justify-around">
              <h1 className=" flex gap-3 items-centerr  pt-5 lg:text-5xl text-4xl ">
              
                <h1 className=" lg:text-5xl text-4xl animate-bounce ">
                  <IoLocationOutline />
                </h1>
                travel place
              </h1>
              <span className=" text-xl animate-pulse flex ml-11  gap-2 items-center ">
                <FaRupeeSign />
                <h1></h1> 50000
              </span>
              <div className=" lg:flex">
                <h1 className=" pl-3 lg:text-2xl text-xl ml-11">
                  From : kozhikode
                </h1>
                <h1 className=" pl-3 lg:text-2xl text-xl ml-11 lg:ml-0 ">
                  To : kozhikode
                </h1>
              </div>
              <div>
                <span className=" pl-3 lg:text-2xl text-xl ml-11 ">4 days</span>
                <span className=" pl-3 lg:text-2xl text-xl ml-11 ">moded:</span>
              </div>
              <div className=" flex items-center justify-evenly">
                <button className=" h-8 w-16  bg-slate-200">like </button>
                <button className=" h-8 w-16 bg-slate-200">select </button>
                <button className="  w-16 h-8 bg-slate-200"> road map</button>
              </div>
            </div>
          </div>
          <div className="w-full h-1/3 bg-red-300 flex overflow-x-auto gap-3">
            <div className="min-w-[300px] h-full bg-red-200">2</div>
            <div className="min-w-[300px] h-full bg-red-200">3</div>
            <div className="min-w-[300px] h-full bg-red-200">1</div>
            <div className="min-w-[300px] h-full bg-red-200">4</div>
            <div className="min-w-[300px] h-full bg-red-200">5</div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default PackageDetails;
