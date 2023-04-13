import { selectAge } from './childrensAges.js';

export function childrenFormAppear() {
  const countOfChildren = document.querySelector(
    '.filter-form__value--children',
  );
  const count = Number(countOfChildren.textContent);
  createChildrenList(count);
}

const createChildrenList = (count) => {
  const childrenForm = document.querySelector('.filter-form__children');
  const filterForm = document.querySelector('.filter');
  if (count !== 0) {
    childrenForm.classList.remove('filter-form__children--hidden');
    filterForm.style.height = 'fit-content';
    selectAge(count);
    return;
  }
  childrenForm.classList.add('filter-form__children--hidden');
  filterForm.style.height = 'fit-content';
};
