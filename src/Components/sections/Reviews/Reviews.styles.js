import { createUseStyles } from 'react-jss';

const text = {
  position: 'absolute',
  left: 0,
  color: 'var(--blue)',
  textDecoration: 'none',
  '@media (max-width: 480px)': {
    position: 'absolute',
    bottom: 12,
  },
  '&:hover': {
    color: 'var(--light-blue)',
  },
};
export const reviewsStyles = {
  root: {
    order: 2,
    '@media (max-width: 768px)': {
      backgroundColor: 'var(--light-white)',
      order: 1,
    },
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    height: 760,
    minWidth: 0,
    background: 'var(--light-white)',
    '@media (max-width: 768px)': {
      margin: '0 auto',
      maxWidth: 352,
      height: 732,
    },
    '@media (max-width: 480px)': {
      width: 328,
      maxWidth: '100%',
    },
  },
  list: {
    display: 'flex',
    flexWrap: 'nowrap',
    minWidth: 0,
    '@media (max-width: 768px)': {
      margin: 0,
    },
  },

  // top
  blockTop: {
    position: 'relative',
  },
  text: {
    fontSize: 18,
    color: 'var(--black)',
    '@media (max-width: 1200px)': {
      fontSize: 16,
    },
    '@media (max-width: 1024px)': {
      fontSize: 14,
    },
    '@media (max-width: 768px)': {
      margin: 0,
    },
    '@media (max-width: 480px)': {
      fontSize: 15,
    },
  },
  img: {
    width: '100%',
  },
  decor: {
    width: '100%',
    position: 'absolute',
    background: 'rgb(56 56 56 / 70%)',
    color: 'white',
    bottom: 4,
    padding: '16px 0 12px 24px',
    '@media (max-width: 768px)': {
      visibility: 'hidden',
    },
  },

  //bot
  blockInfo: {
    height: 56,
    position: 'relative',
    margin: 24,
    '@media (max-width: 768px)': {
      margin: 0,
    },
    '@media (max-width: 480px)': {
      margin: '0 0 12px',
    },
  },
  textName: {
    ...text,
    top: 0,
    fontWeight: 'bold',
  },
  textLocation: {
    top: 40,
    ...text,
  },
  mark: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 48,
    height: 32,
    background: 'var(--dark-blue)',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      width: 40,
      height: 26,
    },
  },
  markText: {
    color: 'var(--white)',
    fontWeight: 600,
    fontSize: 18,
    '@media (max-width: 1200px)': {
      fontSize: 16,
    },
    '@media (max-width: 1024px)': {
      fontSize: 14,
    },
    '@media (max-width: 480px)': {
      fontSize: 15,
    },
  },
  score: {
    position: 'absolute',
    top: 40,
    right: 0,
    fontSize: 14,
    color: 'var(--grey)',
    '@media (max-width: 1200px)': {
      fontSize: 12,
    },
    '@media (max-width: 768px)': {
      fontSize: 10,
    },
    '@media (max-width: 480px)': {
      fontSize: 12,
    },
  },
  commit: {
    margin: '0 24px 24px',
    display: 'flex',
    '@media (max-width: 768px)': {
      margin: '24px 4px',
    },
    '@media (max-width: 480px)': {
      margin: '0 0 24px',
    },
  },
  iconCommit: {
    width: 52,
    height: 52,
    marginTop: 4,
    marginLeft: 4,
    '@media (max-width: 1024px)': {
      width: 48,
      height: 48,
    },
    '@media (max-width: 480px)': {
      width: 44,
      height: 44,
    },
  },
  commitPersonInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 24,
  },
  commitCountry: {
    color: 'var(--grey)',
    top: 36,
    display: 'flex',
    gap: 4,
  },
  textIndent: {
    margin: '0 24px',
    '@media (max-width: 480px)': {
      margin: 0,
      paddingBottom: 32,
    },
  },
  iconFlag: {
    width: 16,
    height: 20,
  },
};

export const useReviewsStyles = createUseStyles(reviewsStyles);
