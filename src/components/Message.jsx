import React, { useContext } from 'react';
import { LoginContext } from '../context/AuthContext';

const Message = ({ data, message }) => {
  const { currentUser } = useContext(LoginContext);
  console.log('current user ', currentUser);
  return (
    <div
      className={`sms ${
        currentUser.uid === message.senderId ? 'owner-sms' : ''
      }`}
    >
      <span className="sms-user-name">
        {currentUser.uid === message.senderId
          ? currentUser.displayName
          : data?.firstName}
      </span>
      <div className="sms-info">
        <img
          src={
            currentUser.uid === message.senderId
              ? currentUser.photoURL
              : data?.photoURL
          }
          alt="profile"
          className="h-8 w-8 rounded-full border-2 border-C_Gold "
        />

        <div className="sms-content">
          {message.text && (
            <div className="sms-content-text">
              {message.text}
              <span>
                {message.date.toDate().toLocaleDateString('en-US')}
              </span>
            </div>
          )}
          {message.imageURL && (
            <img
              src={message.imageURL}
              alt="pic"
              className="block "
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
