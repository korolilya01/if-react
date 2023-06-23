import { createUseStyles } from 'react-jss';

export const styles = createUseStyles(() => ({
  root: {
    position: 'absolute',
    top: '100%',
    right: 0,
    display: 'flex',
    alignItems: 'center',
    padding: 15,
    width: 195,
    height: 50,
    background: 'var(--white)',
    border: 'none',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    cursor: 'pointer',
    '@media (max-width: 1024px)': {
      fontSize: 18,
      width: 160,
      height: 40,
    },
    '@media (max-width: 768px)': {
      fontSize: 16,
      width: 144,
      height: 36,
      right: 40,
    },
    '@media (max-width: 480px)': {
      fontSize: 14,
      width: 104,
      height: 30,
      right: 40,
      top: '30%',
    },
    '&:hover': {
      opacity: 0.8,
    },
  },
  svg: {
    width: 20,
    height: 20,
  },
}));
