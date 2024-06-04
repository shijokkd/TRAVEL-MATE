import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function TreavelsLogin() {
  const {register ,  handleSubmit , formState:{errors}}= useForm()
  const onsubmit =(data)=>{
      console.log(data);
  }


  return (
    <>
      <div className=" h-screen w-screen flex justify-center items-center bg-slate-200 ">
        <div className=" w-[80%] h-[80%] flex justify-center items-center ">
          <div className=" bg-slate-600   h-full md:w-1/2 rounded-l-3xl  "></div>
          <div className=" h-[80%] md:h-full w-1/2 border-black border bg-white shadow-2xl  rounded-3xl md:rounded-l-none flex flex-col justify-center items-center  ">
            <form  onSubmit={handleSubmit(onsubmit)}
              className=" flex flex-col items-center justify-center w-full h-[90%] gap-2">
              <h1 className=" text-xl mb-6 md:text-4xl text-blue-600 font-serif  ">
                <u> TRAVELS LOGIN </u>
              </h1>
              <label htmlFor="" className="label1  ">
              {errors.name  ? <span className=" text-red-500"> {errors.name.message}</span> : <span> Travels Name</span> }
                
              </label>

              <input
                type="text"
                placeholder="travels name....."
                className=" input1 w-[80%] md:w-[60%] md:h-12 rounded-2xl "
                {...register("name",{ required:"travels name is required "} )}
              />


              <label htmlFor="" className="label1 ">
                {errors.password ? <span className=" text-red-500">{errors.password.message}</span> :<span>Travels Password</span> }
              </label>

              <input
                type="password"
                placeholder="travels password......"
                className=" input1 w-[80%] md:w-[60%] md:h-12 rounded-2xl"
                {...register("password",{required:"password is required "})}
              />
              


              <button type="submit" className=" button1 bg-blue-400 *:first-letter:"      >LOGIN</button>
              <br />
            </form>
              <button className=" button1 bg-blue-400"><Link to={"/travelssignup"} >TRAVELS SIGNUP</Link></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TreavelsLogin;
