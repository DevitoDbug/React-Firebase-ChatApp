import React, { useRef } from 'react';
import ContactChats from '../components/ContactChats';
import MessageSection from '../components/MessageSection';
import Search from '../components/Search';
import { useContext, createContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { CurrentPageContext } from '../context/CurrentPageContex';

export const NavContext = createContext();

const Home = () => {
  const [searchOpen] = useContext(SearchContext);
  const messageSectionRef = useRef();
  const contactSectionRef = useRef();
  const { setCurrentPage } = useContext(CurrentPageContext);

  const scrollToMessageSection = () => {
    if (messageSectionRef.current) {
      messageSectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    setCurrentPage('messagePage');
  };

  const scrollToContactSection = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    setCurrentPage('contactPage');
  };

  return (
    <NavContext.Provider
      value={{ scrollToMessageSection, scrollToContactSection }}
    >
      <div className="h-full w-screen">
        <div className="relative flex h-full w-full overflow-x-hidden ">
          <div className="md:w-2/6" ref={contactSectionRef}>
            <ContactChats />
          </div>
          <div className="md:w-4/6" ref={messageSectionRef}>
            <MessageSection />
          </div>
        </div>
        {searchOpen && <Search />}
      </div>
    </NavContext.Provider>
  );
};

export default Home;
