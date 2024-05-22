import React from "react";
import loginpic from "../../assets/images/loginpage.jpg";

function UserSignup() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${loginpic})` }}
        className=" h-screen w-full  bg-cover bg-center"
      >
        <div className=" w-full h-full flex justify-center items-center flex-col gap-5">
          <h1 className=" font-IBM tracking-wider 	 md:text-5xl text-2xl lg:text-6xl  font-bold text-blue-100 mix-blend-plus-lighter">
            Life Long 'Memories' <br /> Just A Fwe Second Away
          </h1>
          <div className=" border-2 shadow-2xl md:w-[30%] shadow-blue-700   h-auto lg:w-[25%] w-[70%] backdrop-blur-sm flex flex-col justify-center items-center lg:gap-2 ">
            <h1 className=" text-white  text-xl lg:text-3xl py-10">USER LOGIN</h1>

            <input placeholder="Name.." className="  shadow-2xl shadow-black rounded-xl text-center bg-transparent border-2 border-black lg:h-[12%] lg:w-[70%]" type="text" name="" id="" /><br />
            <input placeholder="Email.." className="  shadow-2xl shadow-black rounded-xl text-center bg-transparent border-2 border-black lg:h-[12%] lg:w-[70%]" type="text" name="" id="" /><br />
            <input placeholder="Email.." className="  shadow-2xl shadow-black rounded-xl text-center bg-transparent border-2 border-black lg:h-[12%] lg:w-[70%]" type="text" name="" id="" /><br />
            <input placeholder="Email.." className="  shadow-2xl shadow-black rounded-xl text-center bg-transparent border-2 border-black lg:h-[12%] lg:w-[70%]" type="text" name="" id="" /><br />
            <input placeholder="passowrd.." className=" shadow-2xl shadow-black rounded-xl text-center bg-transparent border-2 border-black lg:h-[12%] lg:w-[70%]" type="password" name="" id="" />
            <button className="bg-blue-300 h-7 w-20 shadow-2xl shadow-black mt-3 md:w-32 md:h-15 rounded-xl hover:scale-110 hover:rounded-md" >LOGIN</button> 
            
            <button className="bg-blue-300 h-7 w-20 mt-3 md:w-32 md:h-15 rounded-xl hover:scale-110 hover:rounded-md shadow-2xl shadow-black ">Rgister</button>

          </div>
        </div>
      </div>
    </>
  );
}

export default UserSignup;
