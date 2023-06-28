import { createUseStyles } from 'react-jss';

export const peopleFilterForm = {
  filter: {
    position: 'absolute',
    zIndex: 1,
    width: 256,
    height: 'fit-content',
    padding: '22px 0',
    background: 'var(--white)',
    borderRadius: 8,
    flexDirection: 'column',
    gap: 12,
    display: 'flex',
    justifyContent: 'center',
    top: 'calc(100% + 12px)',
    left: '58%',
    color: 'var(--black)',
    '@media (max-width: 1024px)': {
      left: '10%',
    },
    '@media (max-width: 768px)': {
      top: '78%',
      left: '30%',
    },
  },
  filterForm: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterFormCounter: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    marginRight: 22,
  },
  filterFormProperty: {
    marginLeft: 22,
  },
  filterFormValue: {
    fontSize: 16,
    maxWidth: 8,
  },
  filterFormBtn: {
    width: 30,
    height: 30,
    color: 'var(--blue)',
    backgroundColor: 'var(--white)',
    fontSize: 18,
    border: '1px solid var(--blue)',
    cursor: 'pointer',
    '&:disabled': {
      cursor: 'default',
      border: '1px solid var(--light-grey)',
      color: 'var(--light-grey)',
    },
  },
  filterSelectForm: {
    width: 100,
    height: 32,
    fontSize: 12,
    border: '1px solid var(--light-blue)',
  },
  filterFormChildren: {
    fontSize: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: '22px 18px 0',
  },
  filterFormChildrenContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
};

export const usePeopleFilterFormStyles = createUseStyles(peopleFilterForm);
