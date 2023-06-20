import { createUseStyles } from 'react-jss';

export const hotelsStyles = {
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
};

export const useHotelsStyles = createUseStyles(hotelsStyles);
