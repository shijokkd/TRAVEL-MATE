import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function TravelsSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <>
        <div className=" h-screen w-screen flex justify-center items-center bg-slate-200 ">
          <div className=" w-[80%] h-[80%] flex justify-center items-center ">
            <div className=" bg-slate-600   h-full md:w-1/2 rounded-l-3xl  "></div>
            <div className="  h-[100%] w-1/2 border-black border bg-white shadow-2xl  rounded-3xl md:rounded-l-none  flex flex-col justify-center items-center  ">
              <form
                onSubmit={handleSubmit(onsubmit)}
                className=" flex flex-col items-center justify-center w-full h-[90%] gap-2"
              >
                <h1 className=" text-xl mb-6 md:text-3xl  ">
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
           
                <input
                  type="text"
                  placeholder="travels place....."
                  className=" input1 w-[80%] md:w-[60%] md:h-12 rounded-md "
                  {...register("place", {
                    required: "travels name is required ",
                  })}
                />

             
                <input
                  type="text"
                  placeholder="travels email....."
                  className=" input1 w-[80%] md:w-[60%] md:h-12 rounded-md "
                  {...register("name", {
                    required: "travels name is required ",
                  })}
                />

            
                <input
                  type="text"
                  placeholder="travels phone....."
                  className=" input1 w-[80%] md:w-[60%] md:h-12 rounded-md "
                  {...register("name", {
                    required: "travels name is required ",
                  })}
                />
              
                <input
                  type="text"
                  placeholder="travels password....."
                  className=" input1 w-[80%] md:w-[60%] md:h-12 rounded-md "
                  {...register("name", {
                    required: "travels name is required ",
                  })}
                />

               

                <input
                  type="password"
                  placeholder="travels con-password......"
                  className=" input1 w-[80%] md:w-[60%] md:h-12 rounded-md"
                  {...register("password", {
                    required: "password is required ",
                  })}
                />

                <button type="submit">LOGIN</button>
                <br />
              </form>
                <button className=""><Link to={"/travelslogin"}>BACK TO LOGIN</Link></button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default TravelsSignup;
