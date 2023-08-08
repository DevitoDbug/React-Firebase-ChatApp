import React from "react";
import NavBar from "./NavBar";
import Contact from "./Contact";

const ContactChats = () => {
  return (
    <aside className="flex-shrink-0 w-screen h-full md:w-2/6">
      <div className=" h-[12%] md:show md:h-[10%] lg:h-[12%]">
        <NavBar />
      </div>
      <div className="h-[78%] bg-C_LightBlue m-1 rounded-xl p-4">
        <Contact />
      </div>
    </aside>
  );
};

export default ContactChats;
