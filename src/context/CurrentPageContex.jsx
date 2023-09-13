import { createContext, useState } from 'react';
import React from 'react';

export const CurrentPageContext = createContext();

const CurrentPageContexProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('');
  return (
    <CurrentPageContext.Provider
      value={{ currentPage, setCurrentPage }}
    >
      {children}
    </CurrentPageContext.Provider>
  );
};

export default CurrentPageContexProvider;
