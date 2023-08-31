import React from 'react';
import ContactChats from '../components/ContactChats';
import MessageSection from '../components/MessageSection';
import Search from '../components/Search';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

const Home = () => {
  const [searchOpen] = useContext(SearchContext);
  return (
    <div className="relative h-full w-screen">
      <div className="relative flex h-full overflow-x-scroll">
        <ContactChats />
        <MessageSection />
      </div>
      {searchOpen && <Search />}
    </div>
  );
};

export default Home;
