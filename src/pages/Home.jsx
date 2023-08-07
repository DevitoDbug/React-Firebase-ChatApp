import React from "react";
import ContactChats from "../components/ContactChats";
import MessageSection from "../components/MessageSection";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="w-screen h-full">
      <div className="h-[10%] md:hidden">
        <NavBar />
      </div>
      <div className="h-[90%] flex overflow-x-hidden">
        <ContactChats />
        <MessageSection />
      </div>
    </div>
  );
};

export default Home;
