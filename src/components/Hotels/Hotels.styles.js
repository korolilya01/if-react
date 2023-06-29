import { createUseStyles } from 'react-jss';

export const styles = createUseStyles(() => ({
  root: {
    height: 432,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    '@media (max-width: 1200px) ': {
      height: 374,
    },
    '@media (max-width: 768px) ': {
      height: 332,
    },
    '@media (max-width: 480px) ': {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));
