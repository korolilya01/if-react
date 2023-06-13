import React from 'react';

import { Input } from '../Input';
import { Button } from '../Button';

import classNames from 'classnames';

import './Authorization.scss';

export const Authorization = ({ onLogin }) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const authorizationData = new FormData(event.target);
    const data = Object.fromEntries(authorizationData.entries());

    const { email } = data;
    console.log(data);
    if (email) {
      onLogin();
    }
  };

  return (
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
  );
};
