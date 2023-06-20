export const topSectionFormStyles = {
  pageSearch: {
    display: 'flex',
    height: 64,
    borderRadius: 8,
    backgroundColor: 'var(--white)',
    marginBottom: 120,
    position: 'relative',
    '@media (max-width: 1024px)': {
      display: 'grid',
      gap: 8,
      gridTemplateColumns: 'repeat(10, 1fr)',
      gridTemplateRows: 'repeat(2, 48px)',
      height: 115,
      background: 'var(--dark-yellow)',
      border: '5px solid var(--dark-yellow)',
      marginBottom: 80,
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(8, 1fr)',
      gridTemplateRows: 'repeat(4, 48px)',
      height: 224,
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: 'repeat(6, 1fr)',
      marginBottom: 32,
    },
  },
};
