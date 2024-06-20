import React from "react";
import mainimg from "../../assets/images/11111.png";
import car from "../../assets/images/car.png.webp";
import img1 from "../../assets/images/about.png";
import img2 from "../../assets/images/path3.png";
import cloud1 from "../../assets/images/cloud2.png";
import car1 from "../../assets/images/car1.webp";
import Package from "./Package";
import Vehicles from "./Vehicles";

import Scrolling from "./Scrolling";


function Home() {
  return (
    <>
      <div
        className=" header  h-[45vh] md:h-[80vh] lg:h-screen bg-sky-100 w-full bg-contain bg-center bg-no-repeat  "
        style={{ backgroundImage: `url(${mainimg})` }}
      >
        <div className=" w-full h-auto absolute  flex flex-col items-center ">
          <h1 className="text-xl md:text-4xl lg:text-5xl pt-8 font-bold text-sky-800 ">
            Where Journeys Become Stories.
          </h1>
          <h3 className=" text-sm md:text-xl lg:text-2xl md:pt-2 font-medium text-sky-800">
            let's start your journey with as, your dream will come true
          </h3>
        </div>

        <img
          src={car}
          className=" car relative top-[38%] w-[45%] h-auto left-1/2 animate-[wiggle_20s_ease-in-out_infinite] "
          alt="car"
        />
      </div>
      {/* /////////////////////////////// */}
      <div className=" w-full md:h-[110vh] h-[85vh]  bg-sky-100 flex flex-col items-center ">
        <div className=" w-full md:h-32   flex justify-center items-center flex-col">
          <h3 className=" md:text-xl  md:pt-10 text-sky-700 font-thin">
            Check Our Best Promotional Tour
          </h3>
          <h1 className=" md:pt-4 md:text-5xl font-medium  text-sky-800 text-2xl">
            choose your dreame package
          </h1>
        </div>
        <div className=" w-[90%] bg-sky-50 h-[500px] mt-20 md:h-[500px] flex items-center   shadow-[0px_10px_10px_0px_rgba(0,0,0,0.3)]  ">
          <div
            className=" hidden md:block md:w-[60%] lg:w-[30%] h-full bg-sky-50 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
          <Package/>
        </div>
      </div>
      {/* ////////////////// */}
      
      
      
      <div
        className=" lg:h-[120vh]  w-full  bg-sky-100 bg-contain md:bg-no-repeat flex justify-evenly flex-wrap "
        style={{ backgroundImage: `url(${img2})` }}>
        <div className=" md:h-[300px] h-[250px] md:w-[300px] w-[250px] mt-4 rounded-3xl lg:mt-[150px] bg-yellow-400 flex flex-col justify-center items-center gap-5 text-left ">
          <h1 className=" md:text-4xl text-2xl font-serif font-bold">
            Explore
          </h1>
          <p className=" md:text-xl pl-5">
            Let Autopilot take the wheel planning your next road trip, scenic
            drive, RV journey and everything in between. Then enjoy the ride
            while uncovering hidden gems along the way.
          </p>
        </div>  
        <div className=" md:h-[300px] h-[250px] md:w-[300px] mt-4 w-[250px] rounded-3xl  bg-yellow-400 flex flex-col justify-center items-center gap-5 text-left ">
          <h1 className=" md:text-4xl text-2xl font-serif font-bold">Prep</h1>
          <p className=" md:text-xl pl-5">
            Get real-time traffic updates and access to wildfire smoke maps to
            stay informed and connected throughout your journey.
          </p>
        </div>
        <div className=" md:h-[300px] h-[250px] md:w-[300px] mt-4 w-[250px] lg:mt-[300px] rounded-3xl bg-yellow-400 flex flex-col justify-center items-center gap-5 text-left ">
          <h1 className=" md:text-4xl text-2xl font-serif font-bold">
            Collaborate
          </h1>
          <p className=" md:text-xl pl-5">
            Share your itinerary with your copilots so they can help with the
            finishing touches.
          </p>
        </div>
        <div className=" md:h-[300px] h-[250px] md:w-[300px] mt-4 w-[250px] lg:mt-[50px] rounded-3xl bg-yellow-400 flex flex-col justify-center items-center gap-5 text-left ">
          <h1 className=" md:text-4xl text-2xl font-serif font-bold">Go</h1>
          <p className=" md:text-xl pl-5">
            Let Travel Mate be your guide, navigating the twists and turns as
            you roam the open roads with confidence and ease.
          </p>
          
        </div>
              
      
      </div>
      
      
    
      {/* ////////////////////////// */}
         
      <div className=" w-full h-[55vh] md:h-[55vh] bg-gradient-to-t from-rose-100  to-sky-100 bg-no-repeat bg-cover bg-center align-bottom flex justify-center  ">
        
        <div
          className=" w-full h-full bg-contain animate-cloud bg-no-repeat absolute   "
          style={{ backgroundImage: `url(${cloud1})` }}
        ></div>
          <Vehicles/>
      </div>
      <div
        className=" w-full h-[30vh] bg-rose-100 bg-no-repeat bg-cover bg-center align-bottom"
        style={{ backgroundImage: `url(${car1})` }}
      ></div>

      
      <Scrolling/>
    </>
  );
}

export default Home;
