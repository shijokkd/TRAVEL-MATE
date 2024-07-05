import React, { useEffect, useState } from "react";
import loginpic from "../../assets/images/jeep.jpg";
import { Link,useNavigate } from "react-router-dom";
import axiosInstance from "../../components/axiosInstance/AxiosInstance";



function Userlogin() {
  const Navigate = useNavigate()
const [username, setUsername]=useState("")
const [password , setPassword]= useState("")
const [error ,setError]=useState()


const onsubmit = async (e)=>{
 try{
  e.preventDefault()
  await axiosInstance.post("/userlogin",{
    username:username,
    password:password
  })
  Navigate("/userhome")
 }catch (error){
  console.log(error);
   setError(error.response.data.message)
 }


}
  
  return (
    <>
      <div
        style={{ backgroundImage: `url(${loginpic})` }}
        className=" h-screen w-full  bg-cover bg-center"
      >
        <div className=" w-full h-full flex justify-center items-center flex-col gap-11">
          <h1 className=" font-IBM tracking-wider 	 md:text-5xl text-2xl lg:text-6xl  font-bold text-blue-100 mix-blend-hard-light ">
            Life Long 'Memories' <br /> Just A Few Second Away
          </h1>
          <div className=" border-2 rounded-xl shadow-2xl md:w-[30%] shadow-blue-700   h-auto lg:w-[25%] w-[70%] backdrop-blur-sm flex flex-col justify-center items-center lg:gap-2 ">
            <h1 className=" text-white  text-xl lg:text-3xl py-10" >
              USER LOGIN
            </h1>
            <span className=" ">{error}</span>
            <input
              placeholder="Email.."
              className="  shadow-2xl shadow-black rounded-xl text-center  border-2 border-black lg:h-10 lg:w-[70%]"
              type="text"
              onChange={(e)=>{setUsername(e.target.value)}}
            />
            <br />
            <input
              placeholder="passowrd.."
              className=" shadow-2xl shadow-black rounded-xl text-center  border-2 border-black lg:h-10 lg:w-[70%]"
              type="password"
              onChange={(e)=>{setPassword(e.target.value)}}

            />
            <button onClick={onsubmit} className="bg-blue-300 h-7 w-20 shadow-2xl shadow-black mt-3 md:w-32 md:h-15 rounded-xl hover:scale-110 hover:rounded-md">
              LOGIN
            </button>

            <h3 className=" text-xs md:text-xm   text-white  shadow-2xl shadow-black ">
              Forgot Password <span>click Here?</span>
            </h3>
            <h3 className=" text-xs mt-4 md:text-xm text-white shadow-2xl shadow-black  ">
              New User Register
            </h3>
            <button className="bg-blue-300 h-7 w-20 mt-3 md:w-32 md:h-15 rounded-xl hover:scale-110 hover:rounded-md shadow-2xl shadow-black mb-3">
              <Link to={"/usersignup"}>Rgister</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userlogin;
