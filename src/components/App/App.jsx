import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AvailableHotels } from '../sections/AvailableHotels';
import { AvailableHotelsScrollContextProvider } from '../sections/AvailableHotels/AvailableHotels.context';
import { Destinations } from '../sections/Destinations';
import { Footer } from '../Footer';
import { Homes } from '../sections/Homes';
import { Main } from '../TopSection/Main';
import { Offers } from '../sections/Offers';
import { Outlet, useNavigate } from 'react-router-dom';
import { SignUpBlock } from '../sections/SignUpBlock';
import { StaticPage } from '../StaticPage';
import { Reviews } from '../sections/Reviews';

import { authSelector } from '../../store/selectors/auth.selector';

import '../../css/styles.css';
import '../../css/responsive.css';
import '../../css/swiper.scss';

export function App() {
  const loggedOut = useSelector(authSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedOut) {
      navigate('/login');
    }
  }, [loggedOut, navigate]);

  return (
    <>
      <AvailableHotelsScrollContextProvider>
        <StaticPage>
          <Outlet />
          <Main />
        </StaticPage>
        <AvailableHotels />
      </AvailableHotelsScrollContextProvider>
      <Offers />
      <Homes />
      <Destinations />
      <SignUpBlock />
      <Reviews />
      <Footer />
    </>
  );
}
