import React from 'react';

import './AccountForm.scss';
import { Input } from '../../Input';

export const AccountForm = () => (
  <form action="#" className="account account-block">
    <p className="account__title">Sign in</p>
    <Input
      id="email"
      name="email"
      type="email"
      inputClassName="account__email-field"
      labelId="email"
      labelClassName="account__email-text"
      content="Email address"
    />
    <Input
      id="password"
      name="password"
      type="password"
      inputClassName="account__password-field"
      labelId="password"
      labelClassName="account__email-text"
      content="Password"
    />
    <button type="submit" className="account__button" name="account__button">
      Sign in
    </button>
  </form>
);
