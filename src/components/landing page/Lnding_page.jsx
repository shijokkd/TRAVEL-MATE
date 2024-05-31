import React from "react";
import pic from "../../assets/images/2.webp";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      style={{ backgroundImage: `url(${pic})` }}
      className="h-screen w-screen bg-blue-200 bg-cover bg-no-repeat bg-center   "
    >
      <div className=" h-full w-full flex flex-col ">
        <div className=" w-[98%]  flex items-end  gap-3 lg:gap-2">
          <img
            className=" w-14 md:w-28 h-14 md:h-24 lg:ml-10 "
            src={logo}
            alt=""
          />
          <h1 className=" md:text-4xl text-xl font-bold font-IBM   text-gray-500">
            Travel Mate{" "}
          </h1>
          <div className=" h-full w-[75%] flex gap-2 text-xs lg:gap-24 justify-end px-10 py-9 lg:px-20 lg:text-xl text-gray-500  ">
            <p>ABOUT</p>
            <p>SERVICES</p>
            <p>CONTACT</p>
          </div>
        </div>
        <div className=" h-[90%] w-full flex items-center justify-center  flex-col text-center  gap-8 lg:gap-16">
          <h1 className=" font-IBM tracking-wider 	 md:text-5xl text-2xl lg:text-7xl  font-bold text-blue-100 mix-blend-plus-lighter">
            Fulfill Your Dreams. <br /> Drive with Us
          </h1>
          <p className=" drop-shadow-xl font-semibold lg:text-xl md:text-xs text-gray800  font-IBM ">
            Experience the ultimate combination of enjoyment and business
            success. <br /> Select your path and unlock new horizons:
          </p>
          <div className=" w-[50%] h-[15%]   flex justify-center items-center  gap-20">
            <button className=" lg:h-[55%] w-24 lg:w-[20%] bg-blue-300 text-xs lg:text-2xl rounded-lg hover:bg-blue-400  duration-500 md:hover:text-3xl md:hover:scale-110 shadow-2xl shadow-sky-800 hover:shadow-2xl text-white   ">
              {" "}
              <Link to={"/userlogin"}>USER</Link>
            </button>
            <button className=" lg:h-[55%] w-24 lg:w-[20%] bg-blue-300 text-xs lg:text-2xl rounded-lg hover:bg-blue-400  duration-500 md:hover:text-3xl md:hover:scale-110 shadow-2xl shadow-sky-800 hover:shadow-2xl text-white    ">
              <Link to={""}>TRAVELS</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
