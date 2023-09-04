const { createContext } = require('react');
import React, { useContext, useReducer } from 'react';
import { LoginContext } from './AuthContext';

export const ChatContext = createContext();

const ChatContextProider = ({ children }) => {
  const { currentUser } = useContext(LoginContext);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_CHAT':
        return {
          userInfo: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : currentUser.uid + action.payload.uid,
        };
      default:
        throw new Error();
    }
  };

  const INITIAL_STATE = {
    chatId: '',
    userInfo: {},
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProider;
