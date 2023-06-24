export const searchFilterStyles = {
  searchInfo: {
    width: 360,
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'var(--white)',
    color: 'var(--black)',
    borderRadius: 8,
    border: '3px solid var(--dark-white)',
    position: 'relative',
    cursor: 'pointer',
    '@media (max-width: 1024px)': {
      gridColumn: '1 / span 6',
      gridRow: 2,
      borderRadius: 4,
      border: 0,
      width: 'auto',
    },
    '@media (max-width: 768px)': {
      gridColumn: '1 / span 8',
      gridRow: 3,
      fontSize: 12,
      display: 'grid',
      gridTemplateColumns: 'repeat(9, 1fr)',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: 'repeat(6, 1fr)',
    },
  },
  infoColumn: {
    display: 'flex',
    alignItems: 'baseline',
    flexDirection: 'row-reverse',
    gap: 4,
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'start',
      paddingLeft: 8,
    },
  },
  infoNum: {
    width: 24,
    height: 20,
    borderRadius: 4,
  },
  infoNumValid: {
    border: 0,
  },
  columnAdults: {
    '@media (max-width: 768px)': {
      gridColumn: '1 / span 3',
      borderRight: '1px solid var(--grey)',
    },
    '@media (max-width: 480px)': {
      gridColumn: '1 / span 2',
    },
  },
  columnChildren: {
    '@media (max-width: 768px)': {
      gridColumn: '4 / span 3',
      borderRight: '1px solid var(--grey)',
    },
    '@media (max-width: 480px)': {
      gridColumn: '3 / span 2',
    },
  },
  columnRoom: {
    '@media (max-width: 768px)': {
      gridColumn: '7 / span 3',
    },
    '@media (max-width: 480px)': {
      gridColumn: '5 / span 2',
    },
  },
};
