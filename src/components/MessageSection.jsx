import React, { useContext, useEffect, useState } from 'react';
import Message from './Message';
import InputArea from './InputArea';
// import { LoginContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const MessageSection = ({ scrollToContactSection }) => {
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
    <div className="relative h-screen w-screen flex-shrink-0 p-2 md:w-4/6 ">
      <button
        className="absolute h-9 w-9 rounded-full bg-C_DarkBlue text-lg text-C_TextWhiteDull"
        onClick={() => scrollToContactSection()}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="h-[93%] overflow-y-scroll sm:h-[85vh] md:h-[93vh] lg:h-[85vh]">
        {messages &&
          messages.map((message) => (
            <Message
              key={message?.id}
              message={message}
              data={data.userInfo}
            />
          ))}
      </div>
      <div className="h-[5%] sm:h-[15vh]  md:h-[7vh]  lg:h-[15vh]">
        <InputArea />
      </div>
    </div>
  );
};

export default MessageSection;
