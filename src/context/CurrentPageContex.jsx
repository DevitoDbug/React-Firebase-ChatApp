import { createContext, useState } from 'react';
import React from 'react';

export const CurrentPageContext = createContext();

const CurrentPageContexProvider = ({ children }) => {
  const [homePage, setHomePage] = useState(false);
  return (
    <CurrentPageContext.Provider value={{ homePage, setHomePage }}>
      {children}
    </CurrentPageContext.Provider>
  );
};

export default CurrentPageContexProvider;
