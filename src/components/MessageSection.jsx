import React, { useContext } from 'react';
import Message from './Message';
import InputArea from './InputArea';
import { LoginContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const MessageSection = () => {
  const { currentUser } = useContext(LoginContext);
  const { dispatch } = useContext(ChatContext);

  return (
    <div className=" h-screen w-screen flex-shrink-0 p-2 md:w-4/6 ">
      <div className="h-[89vh] sm:h-[85vh] md:h-[93vh]  lg:h-[85vh]">
        <Message />
      </div>
      <div className="h-[11vh] sm:h-[15vh] md:h-[7vh] lg:h-[15vh]">
        <InputArea />
      </div>
    </div>
  );
};

export default MessageSection;
