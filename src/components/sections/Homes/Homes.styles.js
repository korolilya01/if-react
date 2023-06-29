import { createUseStyles } from 'react-jss';

export const styles = createUseStyles(() => ({
  root: {
    backgroundColor: 'var(--light-white)',
  },
  list: {
    ' @media (max-width: 1024px)': {
      display: 'flex',
      flexWrap: 'nowrap',
    },
  },
}));
