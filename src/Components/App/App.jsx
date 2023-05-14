import React from 'react';

import { AvailableHotels } from '../sections/AvailableHotels';
import { Homes } from '../sections/Homes';
import { Sprites } from '../Sprites';
import { TopSection } from '../TopSection';
import { AvailableHotelsContextProvider } from '../sections/AvailableHotels/AvailableHotels.context';

export function App() {
  return (
    <>
      <Sprites />
      <AvailableHotelsContextProvider>
        <TopSection />
        <AvailableHotels />
      </AvailableHotelsContextProvider>
      <Homes />
    </>
  );
}
