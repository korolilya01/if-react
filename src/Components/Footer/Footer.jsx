import React from 'react';

import { FooterColumnLinks } from './FuterColumnLinks';
import { Icon } from '../Icon';

import { columnLinks } from './utils/columnLinks';

import './Footer.scss';
import { Container } from '../Container';

export const Footer = () => {
  const [
    firstColumnLinks,
    secondColumnLinks,
    thirdColumnLinks
  ] = columnLinks;

  return (
    <footer className="footer">
      <Container>
        <Icon
          className="footer__icon icon-trip_house_mobile"
          iconHref="#trip_house_mobile"
        />
        <div className="footer__list">
          <FooterColumnLinks array={firstColumnLinks} />
          <FooterColumnLinks array={secondColumnLinks} />
          <FooterColumnLinks array={thirdColumnLinks} />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
          <div className="footer__item-bot">
            <p className="footer__text footer__text-bottom">
              © 2022Triphouse, Inc. All rights reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
