import React from "react";
import NavBar from "./NavBar";
import Contact from "./Contact";
import OptionsNavBar from "./OptionsNavBar";

const ContactChats = () => {
  return (
    <aside className="flex-shrink-0 w-screen h-full md:w-2/6">
      <div className=" h-[12%] md:show md:h-[10%] lg:h-[12%]">
        <NavBar />
      </div>
      <div className="flex flex-col h-[86%] bg-C_LightBlue m-1 rounded-xl p-4 justify-between md:h-[89%] lg:h-[86%]">
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
