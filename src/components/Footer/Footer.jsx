import React from 'react';

import { Container } from '../Container';
import { FooterColumnLinks } from './FooterColumnLinks';
import { Icon } from '../Icon';

import { columnLinks } from './utils/columnLinks';

import { styles } from './Footer.styles';
import classNames from 'classnames';

export const Footer = () => {
  const classes = styles();

  const [firstColumnLinks, secondColumnLinks, thirdColumnLinks] = columnLinks;

  return (
    <footer className={classes.root}>
      <Container>
        <Icon className={classes.svg} iconHref="#trip_house_mobile" />
        <div className={classes.list}>
          <FooterColumnLinks array={firstColumnLinks} />
          <FooterColumnLinks array={secondColumnLinks} />
          <FooterColumnLinks array={thirdColumnLinks} />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
          <div className={classes.itemBot}>
            <p className={classNames(classes.text, classes.textBottom)}>
              © 2022Triphouse, Inc. All rights reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
