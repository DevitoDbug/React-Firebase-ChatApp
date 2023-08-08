import React from "react";

const Contact = () => {
  return (
    <div className="h-20 w-full bg-C_DarkBlue shadow-lg shadow-C_DarkBlueShadow rounded-xl flex flex-row justify-between items-center p-2">
      <div className="flex flex-row gap-2">
        <img
          src="../../public/profileImage.png"
          alt=""
          className="w-15 h-15 border-2 rounded-full border-C_Gold "
        />
        <div className="flex flex-col justify-center">
          <span className="text-C_TextWhite text-xs font-semibold">
            Gerald Bahati
          </span>
          <span className="text-C_TextWhiteDull text-[0.625rem] font-light ">
            Thank you
          </span>
        </div>
      </div>
      <div className="text-C_TextWhite text-[0.625rem] font-normal ">
        12/45/2002
      </div>
    </div>
  );
};

export default Contact;
