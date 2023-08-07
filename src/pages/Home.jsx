import React from "react";
import ContactChats from "../components/ContactChats";
import MessageSection from "../components/MessageSection";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="">
      <div className="md:hidden">
        <NavBar />
      </div>
      <div className="flex overflow-x-scroll">
        <ContactChats />
        <MessageSection />
      </div>
    </div>
  );
};

export default Home;
