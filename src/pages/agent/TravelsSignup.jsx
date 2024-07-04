import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../components/axiosInstance/AxiosInstance";

function TravelsSignup() {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const nameRegex = /^[a-zA-Z\s]{2,50}$/;
  const phoneRegex = /^[0-9]{6,13}$/;
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");
  const Navigate= useNavigate()

  const onsubmit = async (data) => {
   try{
    const response = await axiosInstance.post("/travelsignup", data);
    Navigate("/travelslogin")
   }catch(error){
    console.log(error);
   }
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-slate-200">
        <div className="w-[80%] h-[80%] flex justify-center items-center">
          <div className="h-[100%] w-1/2 border-black border bg-cyan-100 shadow-2xl rounded-3xl md:rounded-r-none flex flex-col justify-center items-center">
            <form
              onSubmit={handleSubmit(onsubmit)}
              className="flex flex-col items-center justify-center w-full h-[90%] gap-2"
            >
              <h1 className="text-xl md:mb-6 md:text-3xl">
                <u>TRAVELS SIGNUP</u>
              </h1>
              <input
                type="text"
                placeholder="travels name....."
                className="input1 w-[80%] md:w-[60%] md:h-12 rounded-md"
                {...register("name", {
                  required: "Travels name is required",
                  pattern: {
                    value: nameRegex,
                    message: "Name should be 2-50 characters and contain only letters and spaces"
                  }
                })}
              />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}

              <input
                type="text"
                placeholder="travels place....."
                className="input1 w-[80%] md:w-[60%] md:h-12 rounded-md"
                {...register("place", {
                  required: "Travels place is required",
                })}
              />
              {errors.place && <span className="text-red-500">{errors.place.message}</span>}

              <input
                type="email"
                placeholder="travels email....."
                className="input1 w-[80%] md:w-[60%] md:h-12 rounded-md"
                {...register("email", {
                  required: "Travels email is required",
                })}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}

              <input
                type="text"
                placeholder="travels phone....."
                max={13}
                min={6}
                className="input1 w-[80%] md:w-[60%] md:h-12 rounded-md"
                {...register("number", {
                  required: "Travels phone number is required",
                  pattern: {
                    value: phoneRegex,
                    message: "Phone number should be between 6 and 13 digits"
                  }
                })}
              />
              {errors.number && <span className="text-red-500">{errors.number.message}</span>}

              <input
                type="password"
                placeholder="travels password....."
                className="input1 w-[80%] md:w-[60%] md:h-12 rounded-md"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: passwordRegex,
                    message: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long"
                  }
                })}
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}

              <input
                type="password"
                placeholder="travels con-password......"
                className="input1 w-[80%] md:w-[60%] md:h-12 rounded-md"
                {...register("confirmpasswrd", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === password || "Confirm password does not match",
                })}
              />
              {errors.confirmpasswrd && <span className="text-red-500">{errors.confirmpasswrd.message}</span>}

              <button type="submit" className="button1 bg-blue-400">SIGN UP</button>
              <br />
            </form>
            <button className="button1 bg-blue-400">
              <Link to={"/travelslogin"}>BACK TO LOGIN</Link>
            </button>
          </div>
          <div className="bg-slate-600 h-full md:w-1/2 rounded-r-3xl"></div>
        </div>
      </div>
    </>
  );
}

export default TravelsSignup;
