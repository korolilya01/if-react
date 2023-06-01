import React, { createContext, useContext, useState } from 'react';

export const AvailableHotelsContext = createContext({
  cards: [],
  setCards: (newCards) => {},
});

export const AvailableHotelsContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  return (
    <AvailableHotelsContext.Provider value={{ cards, setCards }}>
      {children}
    </AvailableHotelsContext.Provider>
  );
};

export const useAvailableHotelsContext = () =>
  useContext(AvailableHotelsContext);
