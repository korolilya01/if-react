import { createUseStyles } from 'react-jss';

export const styles = createUseStyles(() => ({
  root: {
    height: 432,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    '@media (max-width: 480px) ': {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));
