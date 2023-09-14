import React, { useContext, useEffect, useState } from 'react';
import NavBar from './NavBar';
import OptionsNavBar from './OptionsNavBar';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { LoginContext } from '../context/AuthContext';
import Contact from './Contact';
import { NavContext } from '../pages/Home';

const ContactChats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(LoginContext);
  const { scrollToMessageSection } = useContext(NavContext);

  const [selectedContact, setSelectedContact] = useState(null);

  //fetches chats everytime user changes
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, 'userChats', currentUser.uid),
        (doc) => {
          setChats(doc.data());
        },
      );
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser?.uid]);

  return (
    <aside className=" h-full w-screen flex-shrink-0 md:w-full">
      <div className=" h-[12%] md:mt-2 md:h-[9%] lg:h-[15%]">
        <NavBar />
      </div>
      <div className="m-1 flex h-[86%] flex-col justify-between rounded-xl bg-C_LightBlue p-4 md:h-[89%] lg:h-[81%]">
        <div className="flex flex-col gap-3">
          {chats &&
            Object.entries(chats)
              ?.sort((a, b) => b[1].date - a[1].date)
              .map((user, index) => (
                <Contact
                  key={user[0]}
                  user={user[1].userInfo}
                  lastMessage={user[1].lastMessage}
                  lastMessageDate={user[1].date}
                  index={index}
                  selected={selectedContact}
                  setSelected={setSelectedContact}
                />
              ))}
        </div>
        <div className="">
          <OptionsNavBar
            scrollToMessageSection={scrollToMessageSection}
          />
        </div>
      </div>
    </aside>
  );
};

export default ContactChats;
