import React from "react";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className=" text-black">
        <NavBar />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
