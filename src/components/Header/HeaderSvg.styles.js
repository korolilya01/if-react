import { createUseStyles } from 'react-jss';

export const stylesSVG = createUseStyles(() => ({
  logo: {
    width: 208,
    height: 40,
    cursor: 'pointer',
    '@media (max-width: 1200px)': {
      width: 160,
      height: 32,
    },
    '@media (max-width: 768px) ': {
      width: 120,
      height: 30,
    },
    '@media (max-width: 480px)': {
      width: 122,
      height: 24,
    },
  },
  night: {
    width: 30,
    height: 30,
    cursor: 'pointer',
    '@media (max-width: 1200px)': {
      width: 24,
      height: 24,
    },
    '@media (max-width: 768px) ': {
      width: 20,
      height: 20,
    },
    '@media (max-width: 480px)': {
      width: 16,
      height: 16,
    },
  },
  accountIcon: {
    width: 40,
    height: 40,
    cursor: 'pointer',
    '@media (max-width: 1200px)': {
      width: 32,
      height: 32,
    },
    '@media (max-width: 768px) ': {
      width: 24,
      height: 24,
    },
    '@media (max-width: 480px)': {
      width: 24,
      height: 24,
    },
  },
  menu: {
    width: 24,
    height: 16,
    display: 'none',
    '@media (max-width: 1200px)': {
      width: 24,
      height: 24,
    },
    '@media (max-width: 768px) ': {
      display: 'flex',
      width: 28,
      height: 20,
    },
    '@media (max-width: 480px)': {
      width: 24,
      height: 16,
    },
  },
}));
