export const searchButtonStyles = {
  searchButton: {
    width: 216,
    fontWeight: 'bold',
    fontSize: 24,
    color: 'var(--white)',
    background: 'var(--blue)',
    borderRadius: 8,
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 0,
    cursor: 'pointer',
    lineHeight: 28,
    '@media (max-width: 1200px)': {
      fontSize: 20,
    },
    '@media (max-width: 1024px)': {
      gridColumn: '7 / span 4',
      gridRow: 2,
      borderRadius: 4,
      width: 'auto',
    },
    '@media (max-width: 768px)': {
      gridColumn: '1 / span 8',
      gridRow: 4,
    },
    '@media (max-width: 480px)': {
      gridRow: 4,
    },
  },
};
