import React, { createContext, useContext, useMemo, useState } from 'react';

export const TopSectionFormContext = createContext({
  adultsNum: 1,
  setAdultsNum: () => {},
  childrenNum: 0,
  setChildrenNum: () => {},
  roomsNum: 1,
  setRoomsNum: () => {},
});

export const TopSectionFormContextProvider = ({ children }) => {
  const [adultsNum, setAdultsNum] = useState(1);
  const [childrenNum, setChildrenNum] = useState(0);
  const [roomsNum, setRoomsNum] = useState(1);
  const cachedValue = useMemo(() => {
    return {
      adultsNum,
      setAdultsNum,
      childrenNum,
      setChildrenNum,
      roomsNum,
      setRoomsNum,
    };
  }, [
    adultsNum,
    setAdultsNum,
    childrenNum,
    setChildrenNum,
    roomsNum,
    setRoomsNum,
  ]);
  return (
    <TopSectionFormContext.Provider value={cachedValue}>
      {children}
    </TopSectionFormContext.Provider>
  );
};

export const useTopSectionFormContext = () => useContext(TopSectionFormContext);
