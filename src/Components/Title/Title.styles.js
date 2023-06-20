import { createUseStyles } from 'react-jss';

export const titleStyles = {
  root: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: '0 auto 104px',
    width: 'fit-content',
    '@media (max-width: 1024px)': {
      fontSize: 36,
      marginBottom: 70,
    },
    '@media (max-width: 768px)': {
      fontSize: 32,
      marginBottom: 32,
    },
    '@media (max-width: 480px)': {
      fontSize: 28,
      marginBottom: 32,
    },
  },

};

export const useTitleStyles = createUseStyles(titleStyles);
