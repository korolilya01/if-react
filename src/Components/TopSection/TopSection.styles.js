import { createUseStyles } from 'react-jss';

export const styles = createUseStyles((theme) => ({
  root: {
    backgroundColor: '#6495ed',
    backgroundSize: 'cover',
    backgroundPosition: '0 25%',
    minHeight: '100vh',
    position: 'relative',
    backgroundImage: theme.themeParams.backgroundImage,
    '@media (max-width: 768px)': {
      height: '100%',
    },
  },
}));
