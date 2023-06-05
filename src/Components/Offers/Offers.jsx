import React from 'react';
import { Container } from '../Container';
import { Title } from '../Title';

import { data } from './Data';

//import classNames from 'classnames';
//import { List } from '../List';
//import styles from '../List/List.module.scss';
//import { Hotels } from '../Hotels';
import { OffersPage } from './OffersPage';
import './Offers.scss';

export const Offers = () => {
  return (
    <>
      <section className="offers">
        <Container>
          <Title content="What do we offer" />
          {/*<List className={classNames('offers__list')} array={data} />*/}
          <div className="list offers__list">
            {data.map((item) => (
              <OffersPage key={item.id} {...item} />
            ))}

            {/*  <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">*/}
            {/*    <div className="offers__item">*/}
            {/*      <svg className="offers__icon icon-support">*/}
            {/*        <use href="#support" />*/}
            {/*      </svg>*/}
            {/*      <p className="offers__description">Support 24/7</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">*/}
            {/*    <div className="offers__item">*/}
            {/*      <svg className="offers__icon icon-communicate">*/}
            {/*        <use href="#communicate" />*/}
            {/*      </svg>*/}
            {/*      <p className="offers__description">Communicate directly</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">*/}
            {/*    <div className="offers__item">*/}
            {/*      <svg className="offers__icon icon-devices">*/}
            {/*        <use href="#devices" />*/}
            {/*      </svg>*/}
            {/*      <p className="offers__description">Book online</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4">*/}
            {/*    <div className="offers__item">*/}
            {/*      <svg className="offers__icon icon-like">*/}
            {/*        <use href="#like" />*/}
            {/*      </svg>*/}
            {/*      <p className="offers__description">Real guest reviews</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
          </div>
        </Container>
      </section>
    </>
  );
};
