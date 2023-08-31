import React from 'react';
import NavBar from './NavBar';
import Contact from './Contact';
import OptionsNavBar from './OptionsNavBar';

const ContactChats = () => {
  return (
    <aside className="h-full w-screen flex-shrink-0 md:w-2/6 ">
      <div className=" md:show h-[12%] md:h-[10%] lg:h-[12%]">
        <NavBar />
      </div>
      <div className="m-1 flex h-[86%] flex-col justify-between rounded-xl bg-C_LightBlue p-4 md:h-[89%] lg:h-[86%]">
        <div>
          <Contact />
        </div>
        <div className="">
          <OptionsNavBar />
        </div>
      </div>
    </aside>
  );
};

export default ContactChats;
