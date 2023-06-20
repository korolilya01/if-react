import { createUseStyles } from 'react-jss';

export const headerStyles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 480px)': {
      width: '100%',
      height: 48,
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  items: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    marginLeft: 48,
    position: 'relative',
    '@media (max-width: 1024px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 24,
      marginLeft: 48,
    },
    '@media (max-width: 768px)': {
      gap: 16,
    },
  },
  link: {
    textDecoration: 'none',
    color: 'var(--white)',
    position: 'relative',
    '&::after': {
      content: '""',
      visibility: 'hidden',
      position: 'absolute',
      top: '100%',
      left: '10%',
      width: '80%',
      height: 4,
      backgroundColor: 'var(--dark-yellow)',
      marginTop: 8,
    },
    '&:hover::after': {
      visibility: 'visible',
      animation: 'under-line 0.7s ease-out 0.3s both',
    },
    '@media (max-width: 1024px)': {
      fontSize: 20,
    },
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  '@keyframes under-line': {
    from: {
      opacity: 0,
      width: 0,
    },
    to: {
      opacity: 1,
      width: '80%',
    },
  },
};

export const useHeaderStyles = createUseStyles(headerStyles);
