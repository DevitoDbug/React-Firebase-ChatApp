import {
  /*faToggleOn,*/ faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { LoginContext } from "../context/AuthContext";

const NavBar = () => {
  //currently logged in user
  const { currentUser } = useContext(LoginContext);
  const name = currentUser.displayName;
  const profilePic = currentUser.photoURL;

  const [isLoggedIn, setIsloggedIn] = useState(true);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    setIsloggedIn(false);
    navigate("/login");
  };

  return (
    <div className="px-1 py-1 h-[90%] bg-C_LightBlue flex flex-row items-center justify-between gap-2 rounded-xl m-1">
      <h1 className="text-C_TextBlack text-xl font-bold ml-1">Artlife</h1>
      <div className="flex flex-row justify-around gap-2">
        <img
          className="w-10 h-10 border-2 rounded-full border-C_Gold "
          src={profilePic}
          alt=""
        />
        <div className="flex flex-col items-left">
          <h2 className="w-[6.625rem] text-C_TextBlack font-semibold ">
            {name}
          </h2>
          <button
            onClick={handleSignOut}
            className="w-[80%] px-2 py-1 text-sm text-C_TextWhite font-thin bg-C_DarkBlue rounded-3xl flex justify-between items-center md:p-2 "
          >
            <span className="">log Out</span>
            <FontAwesomeIcon
              icon={isLoggedIn ? faToggleOff : faToggleOn}
              className="ml-2 text-C_Gold"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
