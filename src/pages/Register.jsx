import React from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="text-lg w-full h-full bg-C_LightBlue flex  flex-col gap-3 items-center justify-center md:w-[60%] md:h-[40%] md:rounded-xl md:gap-3 md:shadow-lg  lg:w-[3clear0%] lg:h-[60%] "
    >
      <h2 className="text-C_TextBlack text-xl md:text-2xl lg:text-lg">
        Register
      </h2>
      <input
        className="w-[70%] p-3 rounded-md outline-C_DarkBlue md:w-[80%] md:text-2xl lg:text-lg lg:p-2"
        type="text"
        placeholder="First Name"
        name="id"
      />
      <input
        className="w-[70%] p-3 rounded-md outline-C_DarkBlue md:w-[80%] md:text-2xl lg:text-lg lg:p-2"
        type="text"
        placeholder="Last Name"
        name="id"
      />
      <input
        className="w-[70%] p-3 rounded-md outline-C_DarkBlue md:w-[80%] md:text-2xl lg:text-lg lg:p-2"
        type="text"
        placeholder="Email"
        name="id"
      />
      <input
        className="w-[70%] p-3 rounded-md outline-C_DarkBlue md:w-[80%] md:text-2xl lg:text-lg lg:p-2"
        type="password"
        placeholder="Password"
        name="id"
      />
      <button className="text-2xl text-C_TextWhite bg-C_DarkBlue shadow-lg py-2 px-3 rounded-xl md:text-3xl md:mt-3 lg:text-xl lg:mt-3">
        Register
      </button>
    </form>
  );
};

export default Register;
