import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { Input } from '../Input';
import { StaticPage } from '../StaticPage';

import { login } from '../../store/slices/auth.slice';

import { styles } from './Authorization.styles';

export const Authorization = () => {
  const classes = styles();

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
      <form onSubmit={handleSubmit} className={classes.root}>
        <p className={classes.title}>Sign in</p>
        <Input
          labelId="email"
          labelClassName={classes.label}
          id="email"
          name="email"
          type="email"
          inputClassName={classes.input}
          content="Email address"
          required
        />
        <Input
          labelId="password"
          labelClassName={classes.label}
          id="password"
          name="password"
          type="password"
          inputClassName={classes.input}
          content="Password"
          required
        />
        <Button
          type="submit"
          className={classes.button}
          buttonName="account__button"
          content="Sign in"
        />
      </form>
    </StaticPage>
  );
};
