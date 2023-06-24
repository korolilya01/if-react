import React, { useState } from 'react';

import { Button } from '../../Button';
import { Container } from '../../Container';
import { Icon } from '../../Icon';

import { styles } from './SignUp.styles';

export const SignUpBlock = () => {
  const classes = styles();

  const [isShow, setIsShow] = useState(true);

  const handleClickClose = () => {
    setIsShow(false);
  };

  return (
    isShow && (
      <section className={classes.root}>
        <Container className={classes.block}>
          <div className={classes.icon}>
            <Icon className={classes.iconPerson} iconHref="#sign-up-person" />
            <Icon className={classes.iconPlus} iconHref="#sign-up-plus" />
          </div>
          <Icon
            className={classes.iconCross}
            iconHref="#sign-up-cross"
            onClick={handleClickClose}
          />
          <div className={classes.blockLogo}>
            <a href="#">
              <Icon className={classes.logo} iconHref="#sign-up-logo" />
            </a>
          </div>
          <p className={classes.text}>
            Sign up and get 20% off your first booking
          </p>
          <Button
            type="submit"
            className={classes.button}
            buttonName="sign-up__button"
            content="Sign up"
          />
          <a href="#" className={classes.link}>
            Install
          </a>
        </Container>
      </section>
    )
  );
};
