import React from "react";
import Navebar from "../components/landing page/Navebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/landing page/Footer";

const userLayout = () => {
  return (
    <>
      <Navebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default userLayout;
