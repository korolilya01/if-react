import { createUseStyles } from 'react-jss';

const circleBut = {
  left: 'calc(50% - 20px)',
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: 'var(--dark-white)',
  border: 1,
  zIndex: 1,
  top: 'calc(50% - var(--circle-height) / 2)',
  boxShadow: '0 4px 4px rgb(0 0 0 / 25%)',
  position: 'relative',
};
const circleButAfter = {
  content: '""',
  width: 'var(--arrow-width)',
  height: 'var(--arrow-height)',
  border: '2px solid var(--black)',
  borderLeft: 0,
  borderTop: 0,
  zIndex: 25,
  position: 'absolute',
  top: 'calc(50% - var(--arrow-width) / 2)',
  left: 'calc(50% - var(--arrow-height) / 2)',
};

export const destStyles = {
  button: {
    padding: '16px 48px',
    width: 'fit-content',
    height: 'fit-content',
    background: 'var(--dark-white)',
    borderRadius: 8,
    fontWeight: 400,
    fontSize: 24,
    color: 'var(--black)',
    border: 'none',
    '@media (max-width: 1024px)': {
      padding: '12px 36px',
      fontSize: 20,
    },
    '@media (max-width: 768px)': {
      padding: '8px 24px',
      fontSize: 18,
      marginRight: 16,
    },
    '@media (max-width: 480px)': {
      padding: '4px 16px',
      marginBottom: 8,
    },
  },
  buttonActive: {
    background: 'var(--blue)',
    color: 'var(--white)',
  },
  list: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 104,
    minWidth: 0,
    gap: 16,
    '@media (max-width: 1024px)': {
      marginTop: 60,
      fontSize: 20,
    },
    '@media (max-width: 768px)': {
      marginTop: 40,
    },
    '@media (max-width: 480px)': {
      marginBottom: 0,
    },
  },
  listWrap: {
    flexWrap: 'wrap',
  },
  circleButDown: {
    ...circleBut,
    '&::after': {
      ...circleButAfter,
      transform: 'rotate(40deg) skewX(-10deg)',
    },
  },
  circleButUp: {
    ...circleBut,
    '&::after': {
      ...circleButAfter,
      transform: 'rotate(220deg) skewX(-15deg)',
    },
  },
};

export const useDestStyles = createUseStyles(destStyles);
