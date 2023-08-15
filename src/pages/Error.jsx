import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-3xl flex flex-col items-center justify-center">
      <span>{"Page not found :("}</span>
      <Link to="/" className="text-C_DarkBlue  text-lg font-bold ml-1">
        Go to home
      </Link>
    </div>
  );
};

export default Error;
