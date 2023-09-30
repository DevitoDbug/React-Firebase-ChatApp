import React from 'react';
import ContactChats from '../components/ContactChats';
import MessageSection from '../components/MessageSection';
import Search from '../components/Search';
import { useContext, createContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { CurrentPageContext } from '../context/CurrentPageContex';

export const NavContext = createContext();

const Home = () => {
  const [searchOpen] = useContext(SearchContext);
  const { homePage, setHomePage } = useContext(CurrentPageContext);

  const scrollToMessageSection = () => {
    setHomePage(false);
  };

  const scrollToContactSection = () => {
    console.log('Scroll to contact section ');
    setHomePage(true);
  };

  return (
    <NavContext.Provider
      value={{ scrollToMessageSection, scrollToContactSection }}
    >
      <div className="h-screen w-[400vw]">
        <div className="relative flex h-screen w-full flex-row overflow-x-hidden">
          {homePage && (
            <div className="h-screen w-screen md:w-2/6">
              <ContactChats />
            </div>
          )}

          {!homePage && (
            <div className="h-screen w-screen md:w-4/6 ">
              <MessageSection />
            </div>
          )}
        </div>
        {searchOpen && <Search />}
      </div>
    </NavContext.Provider>
  );
};

export default Home;
