import React from "react";
import Logo from "@assets/images/Logo.png";

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen lg:flex justify-center items-center z-50 bg-gray-100 ">
      <div className="relative flex justify-center items-center">
        <div className="absolute h-120 w-120">
          <div className="spinner">
            <div className="circle"></div>
          </div>
        </div>
        <img
          src={Logo}
          style={{ width: 76, height: 60 }}
          alt="Logo"
        />
      </div>
    </div>
  );
}
