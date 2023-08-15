import React from "react";
import Message from "./Message";
import InputArea from "./InputArea";

const MessageSection = () => {
  return (
    <div className=" p-2 w-screen flex-shrink-0 h-screen md:w-4/6 ">
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
