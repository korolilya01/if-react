import React, { createContext, useContext, useState } from 'react';

export const AvailableHotelsContext = createContext({
  cards: [],
  setCards: (newCards) => {},
});

// eslint-disable-next-line react/prop-types
export const AvailableHotelsContextProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cards, setCards] = useState([]);
  return (
    <AvailableHotelsContext.Provider value={{ cards, setCards }}>
      {children}
    </AvailableHotelsContext.Provider>
  );
};

export const useAvailableHotelsContext = () =>
  useContext(AvailableHotelsContext);
