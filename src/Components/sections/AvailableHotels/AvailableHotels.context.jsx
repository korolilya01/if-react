import React, { createContext, useContext, useRef } from 'react';

export const AvailableHotelsScrollContext = createContext({
  current: null,
});

export const AvailableHotelsScrollContextProvider = ({ children }) => {
  const scrollAvailableHotels = useRef(null);
  return (
    <AvailableHotelsScrollContext.Provider value={scrollAvailableHotels}>
      {children}
    </AvailableHotelsScrollContext.Provider>
  );
};

export const useAvailableHotelsScrollContext = () =>
  useContext(AvailableHotelsScrollContext);
