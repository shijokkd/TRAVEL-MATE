import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp, FaSquareTwitter } from "react-icons/fa6";
import logo from "../../assets/images/logo.png";


function Footer() {
  return (
    <div className="w-screen  bg-slate-800 py-10  flex justify-center flex-col items-center gap-7">
      <div className=" w-[80%] h-auto flex flex-wrap justify-center items-center gap-2 ">
        <div className=" w-[400px] h-[400px]  flex py-12 items-center flex-col gap-12 text-left">
          <h1 className=" text-3xl flex font-serif gap-4 text-white"> <img src={logo} alt="" className=" h-8 w-8 bg-white rounded " /> TRAVEL MATE</h1>
          <p className=" text-sky-600">
            TRAVEL MATE is a website designed to enhance your road trip
            experience. It offers a platform where travelers can explore and
            book various travel packages. Additionally, bus services are
            available for convenient transportation options to make your journey
            memorable and hassle-free.
          </p>
          <div className=" flex justify-center items-center md:gap-9 ">
            <h1 className=" text-3xl bg-sky-100 rounded  hover:-translate-y-5 duration-1000 lg:text-4xl ">
              <BsInstagram />
            </h1>
            <h1 className=" text-3xl bg-sky-100 rounded  hover:-translate-y-5  duration-1000 lg:text-4xl">
              <FaFacebookSquare />
            </h1>
            <h1 className=" text-3xl bg-sky-100 rounded  hover:-translate-y-5  duration-1000 lg:text-4xl">
              <FaSquareWhatsapp />
            </h1>
            <h1 className=" text-3xl bg-sky-100 rounded  hover:-translate-y-5 duration-1000 lg:text-4xl ">
              <FaSquareTwitter />
            </h1>
          </div>
        </div>
        <div className=" md:h-[400px] h-[250px] w-[250px]  flex md:py-12 py-6 items-center gap-9 flex-col text-left font-serif">
            <h1 className=" text-2xl text-white">Navigate</h1>
            <ul>
                <li className=" text-sky-600">Home </li>
                <li className=" text-sky-600">About </li>
                <li className=" text-sky-600">Services </li>
                <li className=" text-sky-600">Contact </li>
                <li className=" text-sky-600">Blog </li>
            </ul>
        </div>
        <div className=" md:h-[400px] h-[250px] w-[250px] flex md:py-12 items-center gap-6 flex-col text-left font-serif "> 
          <h1 className=" text-2xl text-white">Services</h1> 
          <ul>
            <li className=" text-sky-600">travels</li>
            <li className=" text-sky-600">packages</li>
            <li className=" text-sky-600">transport</li>
            <li className=" text-sky-600">road map </li>
            <li className=" text-sky-600">guideline</li>
            
          </ul> 

        </div>
        <div className=" md:h-[400px] h-[250px] w-[250px]  flex  md:py-12 items-center gap-6 flex-col text-left font-serif"> 
        <h1 className=" text-2xl text-white">Contact</h1>
        <h3 className=" text-sky-600">Travel Mate , Nilambur,<br /> Malappuram ,Kerala  </h3>
        <p className=" text-sky-600">travelmate@gmail.com</p>
        <h2 className=" text-yellow-400 text-xl font-mono">( +91 989 591 3160 )</h2>
        </div>
      </div>


      <h1 className=" text-sky-600">
        Copyright ©2024 All rights reserved <br className=" md:hidden" /> This
        template is made with by <span className=" text-sky-100"> ❤ JO ❤  </span>
      </h1>
      

    </div>
  );
}

export default Footer;
