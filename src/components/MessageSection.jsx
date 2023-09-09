import React, { useContext, useEffect, useState } from 'react';
import Message from './Message';
import InputArea from './InputArea';
// import { LoginContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';

const MessageSection = () => {
  // const { currentUser } = useContext(LoginContext);
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, 'chats', data.combinedId),
      (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      },
    );
    return () => {
      unSub();
    };
  }, [data.combinedId]);

  return (
    <div className=" h-screen w-screen flex-shrink-0 p-2 md:w-4/6 ">
      <div className="h-[89vh] overflow-y-scroll sm:h-[85vh] md:h-[93vh] lg:h-[85vh]">
        {messages &&
          messages.map((message) => (
            <Message
              key={message?.id}
              message={message}
              data={data.userInfo}
            />
          ))}
      </div>
      <div className=" h-[7vh] sm:h-[15vh]  md:h-[7vh]  lg:h-[15vh]">
        <InputArea />
      </div>
    </div>
  );
};

export default MessageSection;
