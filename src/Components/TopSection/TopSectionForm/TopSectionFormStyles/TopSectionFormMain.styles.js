import { createUseStyles } from 'react-jss';

import { searchButtonStyles } from './SearchButton.styles';
import { searchCityStyles } from './SearchCity.styles';
import { searchFilterStyles } from './SearchFilter.styles';
import { topSectionFormStyles } from './TopSectionForm.styles';
import { peopleFilterForm } from '../FilterForm/PeopleFilterForm/ChildrenFilterForm/PeopleFilterForm.styles';

const sharedTextStyles = {
  position: 'absolute',
  top: -48,
  color: 'var(--white)',
  '@media (max-width: 1200px)': {
    paddingBottom: 10,
  },
  '@media (max-width: 1024px)': {
    display: 'none',
  },
};
export const styles = createUseStyles(() => ({
  ...searchButtonStyles,
  ...searchCityStyles,
  ...searchFilterStyles,
  ...topSectionFormStyles,
  ...peopleFilterForm,
  pageText: {
    fontSize: 18,
    outlineColor: 'var(--white)',
    color: 'var(--black)',
    '@media (max-width: 1200px)': {
      fontSize: 15,
    },
  },
  textCity: {
    ...sharedTextStyles,
    left: 24,
  },
  textDate: {
    ...sharedTextStyles,
    left: '40%',
  },
  searchIcon: {
    display: 'none',
    width: 16,
    height: 16,
    '@media (max-width: 1024px)': {
      display: 'flex',
      position: 'relative',
      top: -95,
      left: 12,
    },
    '@media (max-width: 768px)': {
      top: -208,
    },
  },
}));
