import React, { useContext, useEffect, useState } from 'react';
import NavBar from './NavBar';
import OptionsNavBar from './OptionsNavBar';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { LoginContext } from '../context/AuthContext';
import Contact from './Contact';

const ContactChats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(LoginContext);

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
    <aside className="h-full w-screen flex-shrink-0 md:w-2/6 ">
      <div className=" md:show h-[12%] md:h-[10%] lg:h-[12%]">
        <NavBar />
      </div>
      <div className="m-1 flex h-[86%] flex-col justify-between rounded-xl bg-C_LightBlue p-4 md:h-[89%] lg:h-[86%]">
        <div className="flex flex-col gap-3">
          {chats &&
            Object.entries(chats).map((user, index) => (
              <Contact
                key={user[0]}
                user={user[1].userInfo}
                index={index}
                selected={selectedContact}
                setSelected={setSelectedContact}
              />
            ))}
        </div>
        <div className="">
          <OptionsNavBar />
        </div>
      </div>
    </aside>
  );
};

export default ContactChats;
