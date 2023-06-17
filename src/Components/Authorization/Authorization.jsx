import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { Input } from '../Input';
import { StaticPage } from '../StaticPage';

import { login } from '../../store/slices/auth.slice';

import classNames from 'classnames';

import './Authorization.scss';

export const Authorization = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    if (data) {
      dispatch(login({ data }));
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
          className="account__button"
          buttonName="account__button"
          content="Sign in"
        />
      </form>
    </StaticPage>
  );
};
