import { createUseStyles } from 'react-jss';

export const cardStyles = {
  page: {
    backgroundColor: 'var(--dark-blue)',
    minHeight: '100vh',
    '@media (max-width: 1024px)': {
      minHeight: '85vh',
    },
    '@media (max-width: 768px)': {
      minHeight: '70vh',
    },
  },
  img: {
    backgroundPosition: 'center',
    objectFit: 'cover',
    aspectRatio: '1/1',
    maxWidth: '400px',
    minWidth: '400px',
    width: '100%',
    '@media (max-width: 1024px)': {
      maxWidth: '300px',
      minWidth: '300px',
    },
    '@media (max-width: 480px)': {
      maxWidth: '250px',
      minWidth: '250px',
    },
  },
  content: {
    marginTop: '100px',
  },
  text: {
    color: 'var(--white)',
    marginTop: '8px',
    '@media (max-width: 1024px)': {
      fontSize: '20px',
    },
  },
};

export const useCardStyles = createUseStyles(cardStyles);
