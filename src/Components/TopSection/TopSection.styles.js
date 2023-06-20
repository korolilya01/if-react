import { createUseStyles } from 'react-jss';

export const topSectionStyles = createUseStyles(( ) => ({
  root: {
    backgroundSize: 'cover',
    backgroundPosition: '0 25%',
    minHeight: '100vh',
    position: 'relative',
    '@media (max-width: 768px)': {
      height: '100%',
    },
  },
}));
