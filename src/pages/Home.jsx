import React from "react";
import ContactChats from "../components/ContactChats";
import MessageSection from "../components/MessageSection";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="w-screen h-full">
      <div className="md:hidden">
        <NavBar />
      </div>
      <div className="h-full flex overflow-x-scroll">
        <ContactChats />
        <MessageSection />
      </div>
    </div>
  );
};

export default Home;
