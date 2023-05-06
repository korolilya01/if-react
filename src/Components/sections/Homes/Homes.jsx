import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

import './Homes.css';
import { Container } from '../../Container';
import { List } from '../../List';
import { SwiperButton } from '../../SwiperButton';
import { SwiperContainer } from '../../SwiperContainer';
import { Title } from '../../Title';

import { getHomesHotels } from '../../../utils';

// eslint-disable-next-line react/prop-types
export const Homes = () => {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    getHomesHotels().then((hotels) => setHotel(hotels));
  }, []);

  return (
    <>
      <section className="homes">
        <Container>
          <Title content="Homes guests loves" />
          <SwiperContainer>
            <List
              className={classNames('homes__list', 'swiper-wrapper')}
              array={hotel}
            />
            <SwiperButton className="circle" />
          </SwiperContainer>
        </Container>
      </section>
    </>
  );
};
