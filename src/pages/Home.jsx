import React from 'react';
import ContactChats from '../components/ContactChats';
import MessageSection from '../components/MessageSection';
import Search from '../components/Search';

const Home = () => {
  return (
    <div className="relative h-full w-screen">
      <div className="relative flex h-full overflow-x-scroll">
        <ContactChats />
        <MessageSection />
      </div>
      <Search />
    </div>
  );
};

export default Home;
