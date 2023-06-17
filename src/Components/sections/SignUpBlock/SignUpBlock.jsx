import React, { useState } from 'react';

import { Button } from '../../Button';
import { Container } from '../../Container';
import { Icon } from '../../Icon';

import './SignUpBlock.scss';

export const SignUpBlock = () => {
  const [isShow, setIsShow] = useState(true);

  const handleClickClose = () => {
    setIsShow(false);
  };

  return (
    isShow && (
      <section className="sign-up">
        <Container className="sign-up__block">
          <div className="icon-sign-up">
            <Icon className="sign-up-person" iconHref="#sign-up-person" />
            <Icon className="sign-up-plus" iconHref="#sign-up-plus" />
          </div>
          <Icon
            className="sign-up-cross"
            iconHref="#sign-up-cross"
            onClick={handleClickClose}
          />
          <div className="sign-up__block-logo">
            <a href="#">
              <Icon className="sign-up-logo" iconHref="#sign-up-logo" />
            </a>
          </div>
          <p className="sign-up__text">
            Sign up and get 20% off your first booking
          </p>
          <Button
            type="submit"
            className="sign-up__button"
            buttonName="sign-up__button"
            content="Sign up"
          />
          <a href="#" className="sign-up__link">
            Install
          </a>
        </Container>
      </section>
    )
  );
};
