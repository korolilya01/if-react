import React, { createContext, useContext, useRef, useState } from 'react';

export const AvailableHotelsContext = createContext({
  cards: [],
  setCards: (newCards) => {},
});

export const AvailableHotelsContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const scrollAvailableHotels = useRef();
  return (
    <AvailableHotelsContext.Provider
      value={{ cards, setCards, scrollAvailableHotels }}
    >
      {children}
    </AvailableHotelsContext.Provider>
  );
};

export const useAvailableHotelsContext = () =>
  useContext(AvailableHotelsContext);
