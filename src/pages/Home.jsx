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
      <div className="h-[100%] w-screen">
        <div className="relative flex h-[100%] w-[100%] flex-row  overflow-x-hidden">
          <div
            className={`${
              homePage ? 'md:block' : 'hidden'
            } h-full w-full md:block md:w-2/6`}
          >
            <ContactChats />
          </div>

          <div
            className={`${
              homePage ? 'hidden' : 'md:block'
            } h-full w-full md:block md:w-4/6 `}
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
