import React from "react";
import ContactChats from "../components/ContactChats";
import MessageSection from "../components/MessageSection";

const Home = () => {
  return (
    <div className=" w-screen h-full">
      <div className="h-full flex overflow-x-scroll relative">
        <ContactChats />
        <MessageSection />
      </div>
    </div>
  );
};

export default Home;
