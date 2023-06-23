import { createUseStyles } from 'react-jss';

export const styles = createUseStyles(() => ({
  root: {
    color: 'var(--white)',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 144,
    marginTop: 200,
    '@media (max-width: 1024px)': {
      fontSize: 44,
      marginBottom: 90,
    },
    '@media (max-width: 768px)': {
      fontSize: 32,
      marginBottom: 60,
      marginTop: 52,
    },
    '@media (max-width: 480px)': {
      fontSize: 30,
      marginBottom: 32,
      marginTop: 40,
    },
  },
  apps: {
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
    '@media (max-width: 1024px)': {
      paddingBottom: 40,
    },
  },
}));
