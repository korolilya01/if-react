import { createUseStyles } from 'react-jss';

export const authStyles = {
  root: {
    width: 400,
    backgroundColor: 'var(--white)',
    display: 'flex',
    flexDirection: 'column',
    margin: '176px auto',
    border: '1px solid var(--light-grey)',
    '@media (max-width: 1200px)': {
      fontSize: 20,
    },
    '@media (max-width: 768px)': {
      width: 320,
      margin: '50px auto',
    },
    '@media (max-width: 480px)': {
      fontSize: 16,
      width: 240,
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: 'var(--black)',
    marginTop: 36,
  },
  label: {
    display: 'flex',
    fontWeight: 300,
    fontSize: 16,
    textAlign: 'center',
    color: 'var(--black)',
    margin: '40px 0 8px 40px',
    '@media (max-width: 1200px)': {
      fontSize: 14,
    },
    '@media (max-width: 480px)': {
      fontSize: 12,
    },
  },
  input: {
    width: 320,
    height: 40,
    background: 'var(--white)',
    border: '2px solid var(--light-grey)',
    borderRadius: 8,
    margin: '0 auto',
    paddingLeft: 8,
    '@media (max-width: 768px)': {
      width: 240,
    },
    '@media (max-width: 480px)': {
      width: 160,
    },
  },
  button: {
    width: 320,
    height: 48,
    background: 'var(--blue)',
    borderRadius: 8,
    border: 'none',
    fontWeight: 500,
    fontSize: 24,
    textAlign: 'center',
    color: 'var(--white)',
    margin: '24px auto 36px',
    '@media (max-width: 1200px)': {
      fontSize: 18,
    },
    '@media (max-width: 768px)': {
      width: 240,
    },
    '@media (max-width: 480px)': {
      fontSize: 16,
      width: 160,
      marginBottom: 12,
    },
    '&:active': {
      background: 'var(--dark-yellow)',
    },
  },
};

export const useAuthStyles = createUseStyles(authStyles);
