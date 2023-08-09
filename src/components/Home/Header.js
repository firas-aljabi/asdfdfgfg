import React, { useState } from "react";
import SuchiBackground from "../../assets/suchiBack.png";
import Logo from "../../assets/Logo.png";

function Header() {
  return (
    <div className="flex relative items-center justify-center px-4 py-4">
      <div className="text-3xl font-medium font-sans w-28 sm:w-28  text-[#8e3030]">
        <img src={Logo} alt="" />
      </div>
      <div className="text-2xl absolute right-0 w-28 sm:w-40">
      </div>
    </div>
  );
}

export default Header;
