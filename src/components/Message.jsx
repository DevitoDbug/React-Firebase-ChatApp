import React from 'react';

const Message = ({ data, message }) => {
  console.log(message.date);
  return (
    <div className="sms owner-sms">
      <span className="sms-user-name">{data?.firstName}</span>
      <div className="sms-info">
        <img
          src={data?.photoURL}
          alt="profile"
          className="h-10 w-10 rounded-full border-2 border-C_Gold "
        />
        <div className="sms-content">
          {message.text}
          <span>
            {message.date.toDate().toLocaleDateString('en-US')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Message;
