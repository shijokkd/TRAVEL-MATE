import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useForm } from "react-hook-form";
import THome from "./THome";
import Button from "../others/Button";
import axiosInstance from "../axiosInstance/AxiosInstance";

function VehicleAdd() {
  const { register, handleSubmit } = useForm();
  const [page, setPage] = useState(true);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [err, setErr]=useState({})
  
  const onsubmit = async (data) => {
    const formData = new FormData();

    // Append other form fields
    formData.append("name", data.name);
    formData.append("regnumber", data.regnumber);
    formData.append("city", data.city);
    formData.append("drivername", data.drivername);
    formData.append("type", data.type);
    formData.append("capacity", data.capacity);

    // Append images
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("images", selectedFiles[i]); // Ensure 'images' matches multer key
    }

    try {
      await axiosInstance.post("/vehicleadd", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      console.log(error.response.data);
      setErr(error.response.data)
      
    }
  };
  console.log(err,".........");
  return (
    <>
      {page ? (
        <div className="h-screen w-full flex justify-center items-center relative">
          <Button
            className="absolute top-[3%] md:right-[16%] right-[10%] active:scale-110 md:hover:scale-110"
            onClick={() => setPage(false)}
            content={<FaWindowClose className="text-4xl md:text-6xl" />}
          />

          <div className="h-[80%] w-[55%] bg-slate-100 flex flex-col items-center justify-center relative">
            <form onSubmit={handleSubmit(onsubmit)} className="w-full max-w-lg">
              <center>
                <h1 className="md:mb-8 md:text-4xl font-TITAN text-2xl">VEHICLES ADD</h1>
              </center>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3  focus:outline focus:bg-white"
                    type="text"
                    placeholder="name"
                    {...register("name")}
                  />
                  {err.name && ( <p>{err.name}</p> )}
                  
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Reg. Number
                  </label>
                  <input
                    className="appearance-none uppercase block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="KL..A..."
                    {...register("regnumber")}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    City
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tigh focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder=""
                    {...register("city")}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Driver Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder=""
                    {...register("drivername")}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Vehicle Type
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      {...register("type")}
                    >
                      <option></option>
                      <option>Bus</option>
                      <option>Traveller</option>
                      <option>Car</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Seating Capacity
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    
                    type="text"
                    placeholder=""
                    {...register("capacity")}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Vehicle Image
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline focus:bg-white"
                  
                  type="file"
                  placeholder="name"
                  multiple
                  {...register("image", { onChange:(e)=>setSelectedFiles(Array.from(e.target.files)) })}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded lg:w-[100%]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <THome />
      )}
    </>
  );
}

export default VehicleAdd;
