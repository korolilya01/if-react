import { createUseStyles } from 'react-jss';

export const offersStyles = {
  title: {
    position: 'relative',
    marginBottom: 0,
    ' &::after': {
      content: '""',
      width: 'var(--line-width)',
      height: 4,
      backgroundColor: 'var(--dark-yellow)',
      position: 'absolute',
      top: 72,
      left: 'calc(50% - var(--line-width) / 2)',
      '@media (max-width: 1024px)': {
        display: 'none',
      },
    },
  },
  list: {
    '@media (max-width: 1024px)': {
      gap: 10,
      flexWrap: 'wrap',
    },
    '@media (max-width: 480px)': {
      gap: 36,
      marginTop: 0,
    },
  },
  item: {
    height: 176,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    '@media (max-width: 1024px)': {
      height: 152,
    },
    '@media (max-width: 768px)': {
      height: 130,
    },
    '@media (max-width: 480px)': {
      height: 104,
    },
  },
  description: {
    display: 'block',
    justifyContent: 'space-between',
    '@media (max-width: 1200px)': {
      fontSize: 22,
    },
    '@media (max-width: 1024px)': {
      fontSize: 18,
    },
    '@media (max-width: 768px)': {
      fontSize: 18,
    },
    '@media (max-width: 480px)': {
      fontSize: 15,
    },
  },
  iconSupport: {
    width: 76,
    height: 92,
  },
  iconCommunicate: {
    width: 84,
    height: 84,
  },
  iconDevices: {
    width: 100,
    height: 68,
  },
  iconLike: {
    width: 92,
    height: 84,
  },
  icon: {
    '@media (max-width: 1024px)': {
      width: 64,
    },
    '@media (max-width: 768px)': {
      width: 60,
    },
    '@media (max-width: 480px)': {
      width: 56,
    },
  },
};

export const useOffersStyles = createUseStyles(offersStyles);
