import React from "react";
import NavBar from "./NavBar";

const ContactChats = () => {
  return (
    <aside className="flex-shrink-0 w-screen h-full bg-red-500 md:w-2/6">
      <div className=" h-[12%] md:show md:h-[10%]">
        <NavBar />
      </div>
      <div>This is the chat section</div>
    </aside>
  );
};

export default ContactChats;
