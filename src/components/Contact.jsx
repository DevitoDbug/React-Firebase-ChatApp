import React from 'react';

const Contact = ({ user }) => {
  console.log({ user });
  return (
    <div className="flex h-20 w-full flex-row items-center justify-between rounded-xl bg-C_DarkBlue p-2 shadow-lg shadow-C_DarkBlueShadow">
      <div className="flex flex-row gap-2">
        <img
          src={user.photoURL}
          alt=""
          className="w-15 h-15 rounded-full border-2 border-C_Gold "
        />
        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold text-C_TextWhite">
            {user.firstName}+ {user.secondName}
          </span>
          <span className="text-[0.625rem] font-light text-C_TextWhiteDull ">
            Thank you
          </span>
        </div>
      </div>
      <div className="text-[0.625rem] font-normal text-C_TextWhite ">
        12/45/2002
      </div>
    </div>
  );
};

export default Contact;
