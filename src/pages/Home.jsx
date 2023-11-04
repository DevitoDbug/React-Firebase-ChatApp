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
    setHomePage(true);
  };

  return (
    <NavContext.Provider
      value={{ scrollToMessageSection, scrollToContactSection }}
    >
      <div className="mb-1 mt-1 h-[100svh] w-screen ">
        <div className="flex-full w-50 relative h-[100svh] flex-row overflow-x-hidden">
          <div
            className={`${
              homePage ? ' md:w-2/6' : ' hidden'
            } h-full w-full  md:w-2/6`}
          >
            <ContactChats />
          </div>

          <div
            className={`${
              homePage ? 'hidden' : 'md:4/6'
            } h-full w-full  md:w-4/6 `}
          >
            <MessageSection />
          </div>
        </div>
        {searchOpen && <Search />}
      </div>
    </NavContext.Provider>
  );
};

export default Home;
