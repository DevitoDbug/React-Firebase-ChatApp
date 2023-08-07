import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavBar = () => {
  return (
    <div className="px-1 h-[90%] bg-C_LightBlue flex flex-row items-center  justify-between">
      <h1 className="text-C_TextBlack text-xl font-bold">Artlife</h1>
      <div className="flex flex-row justify-around gap-2">
        <img
          className="w-10 h-10 border-2 rounded-full border-C_Gold "
          src="../../public/profileImage.png"
          alt=""
        />
        <div className="flex flex-col items-left">
          <h2 className="text-C_TextBlack font-semibold ">David Ochieng</h2>
          <button className="w-[80%] px-2 py-1 text-sm text-C_TextWhite font-thin bg-C_DarkBlue rounded-3xl flex justify-between items-center">
            log Out
            <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
