import React, { useState } from "react";
import loginpic from "../../assets/images/loginpage.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../../components/axiosInstance/AxiosInstance";
import { useNavigate } from "react-router-dom";

function UserSignup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const Navigate = useNavigate()
  const [error , setError]= useState()
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      setError("")
      const response = await axiosInstance.post("/usersignup", data);
         Navigate("/userlogin")
      
    } catch (error){

      console.log(error.response.data.message);
      setError(error.response.data.message)
      

    

    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${loginpic})` }}
      className="h-screen w-full bg-cover bg-center"
    >
      <div className="w-full h-full flex justify-center lg:flex-row items-center flex-col gap-5">
        <h1 className="font-IBM tracking-wider md:text-5xl text-2xl lg:text-6xl font-bold text-blue-100 mix-blend-hard-light">
          Life Long <br /> 'Memories' <br /> Just A Few <br /> Seconds Away
        </h1>
        <div className="border-2 shadow-2xl md:w-[35%] shadow-blue-700 h-auto lg:w-[40%]  rounded-3xl w-[70%] backdrop-blur-sm flex   flex-col justify-center items-center lg:gap-5">
          <h1 className="text-white text-xl lg:text-3xl py-8">USER LOGIN</h1>
          <h1 className="text-red-600 text-2xl">{error}</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col h-auto w-full backdrop-blur-sm justify-center  items-center lg:gap-7"
          >
            {/* Name Field */}
            <div className="flex flex-col items-center lg:gap-1 w-full">
              <input
                placeholder="Name.."
                {...register("name", { required: "Name is required" })}
                className="shadow-2xl shadow-black rounded-xl text-center border-2 border-black lg:h-10 lg:w-[70%]"
                type="text"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col items-center lg:gap-1 w-full">
              <input
                placeholder="Email.."
                {...register("email", { required: "Email is required" })}
                className="shadow-2xl shadow-black rounded-xl text-center border-2 border-black lg:h-10 lg:w-[70%]"
                type="email"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* Place Field */}
            <div className="flex flex-col items-center lg:gap-1 w-full">
              <input
                placeholder="Place.."
                {...register("place")}
                className="shadow-2xl shadow-black rounded-xl text-center border-2 border-black lg:h-10 lg:w-[70%]"
                type="text"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col items-center lg:gap-1 w-full">
              <input
                placeholder="Password.."
                {...register("password", { required: "Password is required" })}
                className="shadow-2xl shadow-black rounded-xl text-center border-2 border-black lg:h-10 lg:w-[70%]"
                type="password"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col items-center lg:gap-1 w-full">
              <input
                placeholder="Confirm Password.."
                {...register("confirmpassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Confirm password does not match",
                })}
                className="shadow-2xl shadow-black rounded-xl text-center border-2 border-black lg:h-10 lg:w-[70%]"
                type="password"
              />
              {errors.confirmpassword && (
                <span className="text-red-500">
                  {errors.confirmpassword.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-300 h-7 w-20 shadow-2xl shadow-black mt-3 md:w-32 md:h-15 rounded-xl hover:scale-110 hover:rounded-md"
            >
              Register
            </button>
          </form>

          {/* Back to Login Button */}
          <button className="bg-blue-300 h-7 w-32 mt-3 md:w-32 md:h-15 rounded-xl hover:scale-110 hover:rounded-md shadow-2xl shadow-black mb-2">
            <Link to={"/userlogin"}>Back to Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserSignup;
