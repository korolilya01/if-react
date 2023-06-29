import { createUseStyles } from 'react-jss';

export const styles = createUseStyles(() => ({
  root: {
    margin: '0 auto',
    padding: '120px 104px',
    maxWidth: 1440,
    position: 'relative',
    fontSize: 24,
    fontWeight: 400,
    '@media (max-width: 1024px)': {
      padding: '60px 100px',
    },
    '@media (max-width: 768px)': {
      padding: '60px 50px',
      width: '95%',
      margin: '0 auto',
    },
    '@media (max-width: 480px)': {
      padding: '40px 0',
    },
  },
}));
