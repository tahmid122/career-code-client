import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer";
import NavBar from "../pages/Shared/NavBar";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
