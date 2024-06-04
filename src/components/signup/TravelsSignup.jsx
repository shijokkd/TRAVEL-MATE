import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function TravelsSignup() {
  const {register,handleSubmit,formState: { errors }} = useForm();
  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <>
        <div className=" h-screen w-screen flex justify-center items-center bg-slate-200 ">
          <div className=" w-[80%] h-[80%] flex justify-center items-center ">
            <div className="  h-[100%] w-1/2 border-black border bg-cyan-100 shadow-2xl  rounded-3xl md:rounded-r-none  flex flex-col justify-center items-center  ">
              <form
                onSubmit={handleSubmit(onsubmit)}
                className=" flex flex-col items-center justify-center w-full h-[90%] gap-2"
              >
                <h1 className=" text-xl md:mb-6 md:text-3xl  ">
                  <u> TRAVELS SIGNUP </u>
                </h1>
              
                <input
                  type="text"
                  placeholder="travels name....."
                  className=" input1 w-[80%] md:w-[60%] md:h-12 rounded-md "
                  {...register("name", {
                    required: "travels name is required ",
                  })}
                />
                {errors.name && <span className=" text-red-500">{errors.name.message}</span>}
           
                <input
                  type="text"
                  placeholder="travels place....."
                  className=" input1 w-[80%] md:w-[60%] md:h-12 rounded-md "
                  {...register("place", {
                    required: "travels place is required ",
                  })}
                />
                {errors.place && <span className=" text-red-500">{errors.place.message}</span>}

             
                <input
                  type="email"
                  placeholder="travels email....."
                  className=" input1 w-[80%] md:w-[60%] md:h-12 rounded-md "
                  {...register("email", {
                    required: "travels email is required ",
                  })}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}

            
                <input
                  type="number"
                  placeholder="travels phone....."
                  className=" input1 w-[80%] md:w-[60%] md:h-12 rounded-md "
                  {...register("number", {
                    required: "travels phone number is required ",
                  })}
                />
                {errors.number && <span className="text-red-500">{errors.number.message}</span>}
              
                <input
                  type="password "
                  placeholder="travels password....."
                  className=" input1 w-[80%] md:w-[60%] md:h-12 rounded-md "
                  {...register("password", {
                    required: " password  is required ",
                  })}
                />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}


               

                <input
                  type="password"
                  placeholder="travels con-password......"
                  className=" input1 w-[80%] md:w-[60%] md:h-12 rounded-md"
                  {...register("confirmpasswrd", {
                    required: "confirmpassword  is required ",
                  })}
                />
                {errors.confirmpassword && <span className="text-red-500">{errors.confirmpassword.message}</span>}


                <button type="submit" className=" button1 bg-blue-400 ">LOGIN</button>
                <br />
              </form>
                <button className=" button1 bg-blue-400"><Link to={"/travelslogin"}>BACK TO LOGIN</Link></button>
            </div>
            <div className=" bg-slate-600   h-full md:w-1/2 rounded-r-3xl  "></div>

          </div>
        </div>
      </>
    </>
  );
}

export default TravelsSignup;
