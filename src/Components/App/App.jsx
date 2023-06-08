import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AvailableHotels } from '../sections/AvailableHotels';
import { AvailableHotelsContextProvider } from '../sections/AvailableHotels/AvailableHotels.context';
//import { Container } from '../Container';
import { Footer } from '../Footer';
//import { Header } from '../TopSection/Header';
import { Homes } from '../sections/Homes';
import { Main } from '../TopSection/Main';
import { Offers } from '../sections/Offers';
import { Outlet, useNavigate } from 'react-router-dom';
import { Reviews } from '../sections/Reviews';
//import { TopSection } from '../TopSection';

import '../../css/responsive.css';
import { StaticPage } from '../StaticPage';
//import { Authorization } from '../Authorization';

export function App() {
  const loggedOut = useSelector((state) => state.auth.email === null);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedOut) {
      navigate('/login');
    }
  }, [loggedOut, navigate]);

  return (
    <>
      <AvailableHotelsContextProvider>
        <StaticPage>
          <Outlet />
          <Main />
        </StaticPage>
        <AvailableHotels />
      </AvailableHotelsContextProvider>
      <Offers />
      <Homes />
      <Reviews />
      <Footer />
    </>
  );
}
