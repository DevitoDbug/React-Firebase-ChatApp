const { createContext } = require('react');
import React from 'react';

export const ChatContext = createContext();

const ChatContextProider = ({ children }) => {
  return <ChatContext.Provider>{children}</ChatContext.Provider>;
};

export default ChatContextProider;
