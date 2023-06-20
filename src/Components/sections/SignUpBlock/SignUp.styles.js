import { createUseStyles } from 'react-jss';

export const SignUpStyles = {
  root: {
    order: 1,
    margin: '0 104px',
    '@media (max-width: 768px)': {
      order: 2,
      margin: 0,
    },
  },
  block: {
    background: 'var(--light-white)',
    padding: 0,
    position: 'relative',
    '@media (max-width: 768px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      height: 106,
      background: 'var(--white)',
    },
  },
  icon: {
    width: 88,
    height: 88,
    borderRadius: '50%',
    background: 'var(--white)',
    display: 'inline-block',
    margin: '56px 24px',
    position: 'relative',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  text: {
    top: 52,
    left: 134,
    position: 'absolute',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'var(--black)',
    '@media (max-width: 1024px)': {
      fontSize: 20,
    },
    '@media (max-width: 768px)': {
      fontWeight: 400,
      fontSize: 16,
      display: 'flex',
      position: 'static',
    },
    '@media (max-width: 480px)': {
      fontSize: 12,
    },
  },
  button: {
    width: 128,
    height: 48,
    background: 'var(--white)',
    border: '1px solid var(--blue)',
    borderRadius: 8,
    fontSize: 18,
    textAlign: 'center',
    color: 'var(--blue)',
    position: 'absolute',
    bottom: 52,
    left: 134,
    '@media (max-width: 1024px)': {
      width: 120,
      height: 40,
    },
    '@media (max-width: 768px)': {
      display: 'none',
    },
    '&:hover': {
      background: 'var(--blue)',
      color: 'var(--white)',
      transition: '0.5s ease 0.1s',
    },
  },
  iconPerson: {
    width: 32,
    height: 44,
    position: 'absolute',
    left: 18,
    top: 21,
  },
  iconPlus: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 48,
    top: 46,
  },
  iconCross: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 24,
    right: 24,
    cursor: 'pointer',
    '@media (max-width: 1024px)': {
      width: 20,
      height: 20,
    },
    '@media (max-width: 768px)': {
      width: 18,
      height: 18,
      display: 'inline-block',
      position: 'static',
    },
    '@media (max-width: 480px)': {
      width: 16,
      height: 16,
    },
  },
  link: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'flex',
      fontWeight: 500,
      fontSize: 16,
      color: 'var(--blue)',
    },
    '@media (max-width: 480)': {
      fontSize: 14,
    },
  },
  blockLogo: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 64,
      height: 64,
      background: 'var(--blue)',
      borderRadius: 4,
    },
    '@media (max-width: 480px)': {
      width: 58,
      height: 58,
    },
  },
  logo: {
    '@media (max-width: 768px)': {
      width: 52,
      height: 12,
    },
  },
};

export const useSignUpStyles = createUseStyles(SignUpStyles);
