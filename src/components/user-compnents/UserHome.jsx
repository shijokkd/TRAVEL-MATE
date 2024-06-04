import React from "react";
import mainimg from "../../assets/images/1111.png";
import car from "../../assets/images/car.png.webp";
import Navebar from "../landing page/Navebar";

function UserHome() {
  return (
    <>
    <Navebar/>
      <div className=" w h-screen h auto  ">
        
        <div className=" w-full h-[99vh]  bg-sky-100  relative ">
            <img src={mainimg} alt=""  />
            <div  className=" absolute top-[15%] md:top-[1%]              w-full">
                <img src={car} className=" w-[40%] h-auto " alt="car"  />
                

            </div>
        </div>
      </div>
    </>
  );
}

export default UserHome;
