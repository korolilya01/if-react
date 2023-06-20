export const searchCityStyles = {
  searchCity: {
    width: 512,
    color: 'var(--black)',
    border: '3px solid var(--dark-white)',
    borderRadius: 8,
    paddingLeft: 24,
    '@media (max-width: 1024px)': {
      gridColumn: '1 / span 6',
      gridRow: 1,
      paddingLeft: 36,
      borderRadius: 4,
      border: 0,
      width: 'auto',
    },
    '@media (max-width: 768px)': {
      gridColumn: '1 / span 8',
      gridRow: 1,
    },
    '@media (max-width: 480px)': {
      gridColumn: '1 / span 8',
    },
    '&:focus' :{
      borderColor: 'var(--dark-yellow)',
    }
  },
};
