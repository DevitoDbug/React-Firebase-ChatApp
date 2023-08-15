/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [error, setEror] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      setEror(e.message);
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="text-lg w-full h-full bg-C_LightBlue flex  flex-col gap-3 items-center justify-center md:w-[60%] md:h-[40%] md:rounded-xl md:gap-3 md:shadow-xl lg:w-[30%] lg:h-[60%]"
    >
      <h2 className="text-C_TextBlack text-xl md:text-2xl lg:text-lg">Login</h2>
      <input
        className="w-[70%] p-3 rounded-md outline-C_DarkBlue md:w-[80%] md:text-2xl lg:text-lg lg:p-2"
        type="text"
        placeholder="Email"
        name="id"
      />
      <input
        className="w-[70%] p-3 rounded-md outline-C_DarkBlue  md:w-[80%] md:text-2xl lg:text-lg lg:p-2"
        type="password"
        placeholder="Password"
        name="id"
      />
      <button className="text-2xl text-C_TextWhite bg-C_DarkBlue shadow-lg py-2 px-3 rounded-xl md:text-3xl md:mt-3 lg:text-xl lg:mt-3">
        Login
      </button>
      {error.length > 0 && (
        <span className="text-sm text-red-600">{error}</span>
      )}
      <div className="text-sm">
        You don't have an account?
        <Link
          className="text-C_DarkBlue  text-sm font-bold ml-1"
          to={"/register"}
        >
          Register
        </Link>
      </div>
    </form>
  );
};

export default Login;
