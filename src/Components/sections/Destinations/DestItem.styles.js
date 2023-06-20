import { createUseStyles } from 'react-jss';

export const destItemStyles = {
  item: {
    height: 432,
    width: 296,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    '@media (max-width: 1200px)': {
      width: 230,
      height: 300,
    },
    '&:nth-child(4)': {
      '@media (max-width: 1024px)': {
        display: 'none',
      },
    },
    '&:nth-child(3)': {
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
  },
  butDest: {
    position: 'absolute',
    width: 128,
    height: 48,
    top: 'calc(50% - 48px / 2)',
    left: 'calc(50% - 128px / 2)',
    background: 'var(--white)',
    border: '1px solid var(--blue)',
    borderRadius: 8,
    fontSize: 18,
    textAlign: 'center',
    color: 'var(--blue)',
    visibility: 'hidden',
    '@media (max-width: 1024px)': {
      display: 'none',
    },
  },
  itemLink: {
    position: 'relative',
    '&:hover button': {
      visibility: 'visible',
    },
    '&:hover img': {
      filter: 'brightness(80%)',
      transition: '0.5s ease-in 0.3s',
      '@media (max-width: 1024px)': {
        filter: 'none',
      },
    },
  },
  destImg: {
    aspectRatio: '1/1',
    maxWidth: '100%',
  },
};

export const useDestItemStyles = createUseStyles(destItemStyles);
