import React, { useState } from 'react';

import { AvailableHotels } from '../AvailableHotels';
import { Homes } from '../Homes';
import { Sprites } from '../Sprites';
import { TopSection } from '../TopSection';

export function App() {
  const [availableHotels, setAvailableHotels] = useState([]);
  const [visibleHotels, setVisibleHotels] = useState('none');
  return (
    <>
      <Sprites />
      <TopSection
        setAvailableHotels={setAvailableHotels}
        setVisibleHotels={setVisibleHotels}
      />
      <AvailableHotels
        availableHotels={availableHotels}
        visibleHotels={{ display: visibleHotels }}
      />
      <Homes />
    </>
  );
}
