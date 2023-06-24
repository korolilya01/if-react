// import { darkTheme } from '../../Components/Themes/darkTheme.styles';
// import { lightTheme } from '../../Components/Themes/lightTheme.styles';

import { lightTheme } from '../../Components/Themes/lightTheme.styles';

export const INITIAL_STATE = {
  authState: null,
  availableState: {
    search: '',
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    rooms: 1,
    childrenAges: [],
  },
  topSectionForm: {
    search: '',
    dateFrom: null,
    dateTo: null,
    adults: 1,
    children: 0,
    rooms: 1,
    childrenAges: null,
  },
  destination: 'regions',
  theme: {
    themeStyle: 'light',
    themeParams: lightTheme,
  },
};
