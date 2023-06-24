import { createUseStyles } from 'react-jss';

export const styles = createUseStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '104px',
    minWidth: '0',
    gap: '16px',
    '@media (max-width: 1024px)': {
      margin: '0',
      fontSize: '20px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '0',
    },
  },
}));
