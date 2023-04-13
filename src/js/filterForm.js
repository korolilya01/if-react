import { childrenFormAppear } from './childrenList.js';

export const validation = {
  adults: { min: 1, max: 30 },
  children: { min: 0, max: 10 },
  room: { min: 1, max: 30 },
};

const showFilterForm = () => {
  const form = document.getElementById('filter');
  form.classList.toggle('filter-hidden');
};

document.querySelectorAll('.info-column').forEach((btn) => {
  btn.addEventListener('click', showFilterForm);
});

const makePlusInFilter = (value, num) => {
  const numberFilter = document.querySelector(`.filter-form__value--${value}`);
  const minusBtn = document.querySelector(`.${value}-btn__minus`);
  const plusBtn = document.querySelector(`.${value}-btn__plus`);
  const numberForm = document.querySelector(`.info-num-${value}`);

  return (event) => {
    event.preventDefault();
    let count = Number(numberFilter.textContent);
    count++;
    numberFilter.textContent = count;
    if (count !== num.min) {
      minusBtn.removeAttribute('disabled');
    }
    if (count === num.max) {
      plusBtn.setAttribute('disabled', '');
    }
    numberForm.value = count;
  };
};

const makeMinusInFilter = (value, num) => {
  const numberFilter = document.querySelector(`.filter-form__value--${value}`);
  const minusBtn = document.querySelector(`.${value}-btn__minus`);
  const plusBtn = document.querySelector(`.${value}-btn__plus`);
  const numberForm = document.querySelector(`.info-num-${value}`);

  return (event) => {
    event.preventDefault();
    let count = Number(numberFilter.textContent);
    count--;
    numberFilter.textContent = count;
    if (count !== num.max) {
      plusBtn.removeAttribute('disabled');
    }
    if (count === num.min) {
      minusBtn.setAttribute('disabled', '');
    }
    numberForm.value = count;
  };
};

makePlusInFilter();
document
  .querySelector('.adults-btn__plus')
  .addEventListener('click', makePlusInFilter('adults', validation.adults));
document
  .querySelector('.adults-btn__minus')
  .addEventListener('click', makeMinusInFilter('adults', validation.adults));
document
  .querySelector('.children-btn__plus')
  .addEventListener('click', makePlusInFilter('children', validation.children));
document
  .querySelector('.children-btn__minus')
  .addEventListener(
    'click',
    makeMinusInFilter('children', validation.children),
  );
document
  .querySelector('.rooms-btn__plus')
  .addEventListener('click', makePlusInFilter('rooms', validation.room));
document
  .querySelector('.rooms-btn__minus')
  .addEventListener('click', makeMinusInFilter('rooms', validation.room));

document
  .querySelector('.children-btn__minus')
  .addEventListener('click', childrenFormAppear);
document
  .querySelector('.children-btn__plus')
  .addEventListener('click', childrenFormAppear);
