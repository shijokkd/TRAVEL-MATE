import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../others/Button";
import { FaPlus, FaMinus,FaWindowClose } from "react-icons/fa";
import THome from "./THome";

function Package() {
  const { register, handleSubmit } = useForm();
  const [activities, setActivities] = useState({});
  const [activityInputs, setActivityInputs] = useState({});
  const [count, setCount] = useState(1);

  // Initialize activities and activityInputs objects based on count
  useEffect(() => {
    const initialActivities = {};
    const initialInputs = {};
    for (let i = 1; i <= count; i++) {
      initialActivities[`day${i}`] = [];
      initialInputs[`day${i}`] = "";
    }
    setActivities(initialActivities);
    setActivityInputs(initialInputs);
  }, [count]);

  const onSubmit = (data) => {
    console.log(data, activities, "Submitted Details");
  };

  const handleAddActivity = (day) => {
    setActivities((prevActivities) => ({
      ...prevActivities,
      [day]: [...prevActivities[day], activityInputs[day]],
    }));
    setActivityInputs((prevInputs) => ({
      ...prevInputs,
      [day]: "",
    }));
  };

  const handleInputChange = (day, value) => {
    setActivityInputs((prevInputs) => ({
      ...prevInputs,
      [day]: value,
    }));
  };

  const increment = () => {
    if (count >= 1 && count < 30) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1 && count <= 30) {
      setCount(count - 1);
    }
  };
  const [page, setPage]=useState(true)

  return (
    <>
    {page?
    <div className="w-full h-auto bg-sky-50 flex justify-center items-center relative">
    <Button className=" absolute top-[4rem] md:top-[2rem] md:right-[16%] right-[10%] active:scale-110 md:hover:scale-110 " onClick={()=>setPage(false)}  content={ <FaWindowClose className="text-4xl md:text-6xl" />} />
    <div className="w-[60%] shadow-2xl border-x-gray-800 bg-gray-50 flex flex-col justify-center items-center m-[100px]">
   <center><h1 className="md:text-3xl text-xl mt-7 font-TITAN">PACKAGE ADD</h1></center>
   <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] h-[90%] m-10">
     <div className="w-full mb-6 md:mb-0">
       <label
         className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
         htmlFor="package-name"
       >
         Package name
       </label>
       <input
         className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
         id="package-name"
         type="text"
         placeholder="name"
         {...register("name")}
       />
     </div>

     <div className="flex flex-wrap -mx-3 mb-6">
       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
         <label
           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
           htmlFor="starting-place"
         >
           Starting place
         </label>
         <input
           className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
           id="starting-place"
           type="text"
           placeholder="name"
           {...register("startingplace")}
         />
       </div>
       <div className="w-full md:w-1/2 px-3">
         <label
           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
           htmlFor="destination"
         >
           Destination
         </label>
         <input
           className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
           id="destination"
           type="text"
           placeholder="KL..A..."
           {...register("destination")}
         />
       </div>
     </div>

     <div className="flex flex-wrap -mx-3 mb-6">
       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
         <label
           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
           htmlFor="expiration-date"
         >
           Package expiration date
         </label>
         <input
           className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
           id="expiration-date"
           type="text"
           placeholder="name"
           {...register("expirationdate")}
         />
       </div>
       <div className="w-full md:w-1/2 px-3">
         <label
           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
           htmlFor="total-members"
         >
           Total members
         </label>
         <input
           className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
           id="total-members"
           type="text"
           placeholder="49"
           {...register("totalmembers")}
         />
       </div>
       <div className="w-full md:w-1/2 px-3 ">
         <label
           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
           htmlFor="num-days"
         >
           Number of days
         </label>
         <div className="appearance-none gap-2 w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex justify-center">
           <Button
             className="bg-gray-400 w-20 rounded-md flex justify-center items-center active:scale-110"
             content={<FaPlus />}
             onClick={increment}
           />
           <div className="bg-white w-[30%] flex justify-center items-center rounded-md">{count}</div>
           <Button
             className="bg-gray-400 w-20 flex justify-center items-center rounded-md active:scale-110"
             content={<FaMinus />}
             onClick={decrement}
           />
         </div>
       </div>
       <div className="w-full md:w-1/2 px-3">
         <label
           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
           htmlFor="images"
         >
           Images
         </label>
         <input
           className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
           id="images"
           type="file"
           {...register("images")}
         />
       </div>
     </div>

     {Array.from({ length: count }).map((_, index) => (
       <div key={index} className="w-full mt-10 mb-6 md:mb-0">
         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
           Day {index + 1}
         </label>
         <div className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex flex-col gap-4 items-center">
           <div className="w-[80%] bg-white border rounded-md border-black p-3">
             <ul>
               {activities[`day${index + 1}`]?.map((activity, activityIndex) => (
                 <li key={activityIndex}>{activity}</li>
               ))}
             </ul>
           </div>
           <input
             className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
             placeholder="format: time-activity (6:00 am-starting)"
             value={activityInputs[`day${index + 1}`]}
             onChange={(e) => handleInputChange(`day${index + 1}`, e.target.value)}
           />
           <button
             type="button"
             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
             onClick={() => handleAddActivity(`day${index + 1}`)}
           >
             Add Plan
           </button>
         </div>
       </div>
     ))}

     <center><Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mt-9 rounded" content="SUBMIT"/>  </center>
      
   </form>
 </div>
</div>
    :<THome/>}
    </>
  );
}

export default Package;
