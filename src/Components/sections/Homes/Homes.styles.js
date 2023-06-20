import { createUseStyles } from 'react-jss';

export const homesStyles = {
  root: {
    backgroundColor: 'var(--light-white)',
  },
  list: {
    ' @media (max-width: 1024px)': {
      display: 'flex',
      flexWrap: 'nowrap',
    },
  },
};

export const useHomesStyles = createUseStyles(homesStyles);
