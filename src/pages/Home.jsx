import React, { useRef } from 'react';
import ContactChats from '../components/ContactChats';
import MessageSection from '../components/MessageSection';
import Search from '../components/Search';
import { useContext, createContext } from 'react';
import { SearchContext } from '../context/SearchContext';

export const NavContext = createContext();

const Home = () => {
  const [searchOpen] = useContext(SearchContext);
  const messageSectionRef = useRef();
  const contactSectionRef = useRef();

  const scrollToMessageSection = () => {
    if (messageSectionRef.current) {
      messageSectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const scrollToContactSection = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative h-full w-screen">
      <div className="relative flex h-full overflow-x-hidden">
        <NavContext.Provider
          value={{ scrollToMessageSection, scrollToContactSection }}
        >
          <div ref={contactSectionRef}>
            <ContactChats />
          </div>
          <div ref={messageSectionRef}>
            <MessageSection
              scrollToContactSection={scrollToContactSection}
            />
          </div>
          
        </NavContext.Provider>
      </div>
      {searchOpen && <Search />}
    </div>
  );
};

export default Home;
