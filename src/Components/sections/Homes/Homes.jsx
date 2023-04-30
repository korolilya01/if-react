import React, { Component } from 'react';

import classNames from 'classnames';

import './Homes.css';
import { Container } from '../../Container';
import { List } from '../../List';
import { SwiperButton } from '../../SwiperButton';
import { SwiperContainer } from '../../SwiperContainer';
import { Title } from '../../Title';

import { getHomesHotels } from '../../../utils';

// eslint-disable-next-line react/prop-types
export class Homes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }
  componentDidMount() {
    getHomesHotels().then((cards) => this.setState({ cards }));
  }
  render() {
    const { cards } = this.state;
    return (
      <>
        <section className="homes">
          <Container>
            <Title content="Homes guests loves" />
            <SwiperContainer>
              <List
                className={classNames('homes__list', 'swiper-wrapper')}
                array={cards}
              />
              <SwiperButton className="circle" />
            </SwiperContainer>
          </Container>
        </section>
      </>
    );
  }
}
