import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import UserHome from "../components/user-compnents/UserHome";
import PackageDetails from "../components/user-compnents/PackageDetails";

const UserRouter = () => {
  return (
    <Routes>
        
      
       <Route path="/" element={<UserLayout />}>
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/pg" element={<PackageDetails />} />
      </Route>
    </Routes>
  );
};

export default UserRouter;
 