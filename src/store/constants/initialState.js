import { lightTheme } from '../../components/Themes/lightTheme.styles';

export const INITIAL_STATE = {
  authState: null,
  topSectionForm: {
    search: '',
    dateFrom: null,
    dateTo: null,
    adults: 1,
    children: 0,
    rooms: 1,
    childrenAges: null,
  },
  theme: {
    themeStyle: 'light',
    themeParams: lightTheme,
  },
};
