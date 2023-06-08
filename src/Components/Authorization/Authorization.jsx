import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Input } from '../Input';
import { Button } from '../Button';
import { loginAction } from '../../store/actions/auth.actions';
import { StaticPage } from '../StaticPage';

import classNames from 'classnames';

import './Authorization.scss';

export const Authorization = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email && password) {
      dispatch(loginAction({ email, password }));
      navigate('/');
    }
  };
  return (
    <StaticPage>
      <form
        onSubmit={handleSubmit}
        className={classNames('account', 'account-block ')}
      >
        <p className="account__title">Sign in</p>
        <Input
          labelId="email"
          labelClassName="account__email-text"
          id="email"
          name="email"
          type="email"
          inputClassName="account__email-field"
          content="Email address"
        />
        <Input
          labelId="password"
          labelClassName="account__password-text"
          id="password"
          name="password"
          type="password"
          inputClassName="account__password-field"
          content="Password"
        />
        <Button
          type="submit"
          buttonClassName="account__button"
          buttonName="account__button"
          content="Sign in"
        />
      </form>
    </StaticPage>
  );
};
