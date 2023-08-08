import React from "react";

const Message = () => {
  return (
    <div className="sms owner-sms">
      <span className="sms-user-name">Ochieng</span>
      <div className="sms-info">
        <img
          src="../../public/profileImage.png"
          alt="profile"
          className="w-10 h-10 border-2 rounded-full border-C_Gold "
        />
        <div className="sms-content">
          Hello David
          <span>12/45/2002</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
