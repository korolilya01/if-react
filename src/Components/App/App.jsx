import React, { useState } from 'react';

import { AvailableHotels } from '../sections/AvailableHotels';
import { Homes } from '../sections/Homes';
import { Sprites } from '../Sprites';
import { TopSection } from '../TopSection';
import { AvailableHotelsContextProvider } from '../sections/AvailableHotels/AvailableHotels.context';
import { Authorization } from '../Authorization';
import { Header } from '../TopSection/Header';
import { Main } from '../TopSection/Main';
import { Container } from '../Container';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Reviews } from '../sections/Reviews';
import { Offers } from '../sections/Offers';

import '../../css/responsive.css';

export function App() {
  const [authorize, setAuthorize] = useState(false);
  const handleLogin = () => {
    setAuthorize(true);
  };

  return authorize ? (
    <>
      <Sprites />
      <AvailableHotelsContextProvider>
        <TopSection>
          <Container>
            <Header authorize={authorize} setAuthorize={setAuthorize} />
            <Main />
          </Container>
        </TopSection>
        <AvailableHotels />
        <Offers />
        <Homes />
        <Outlet />
        <Reviews />
        <Footer />
      </AvailableHotelsContextProvider>
    </>
  ) : (
    <>
      <Sprites />
      <TopSection>
        <Container>
          <Header />
          <Authorization onLogin={handleLogin} />
        </Container>
      </TopSection>
    </>
  );
}
