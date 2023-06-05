import React, { useState } from 'react';

import { Input } from '../Input';
import { Button } from '../Button';

import classNames from 'classnames';

import './Authorization.scss';

export const Authorization = ({ onLogin }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(userEmail, userPassword);
    if (localStorage.getItem(userEmail)) {
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
        value={userEmail}
        onChange={(event) => setUserEmail(event.target.value)}
        content="Email address"
      />
      <Input
        labelId="password"
        labelClassName="account__password-text"
        id="password"
        name="password"
        type="password"
        inputClassName="account__password-field"
        value={userPassword}
        onChange={(event) => setUserPassword(event.target.value)}
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
