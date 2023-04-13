export const selectAge = (count) => {
  const childContainer = document.querySelector(
    '.filter-form__children--container',
  );
  childContainer.innerHTML = '';

  for (let i = 1; i <= count; i++) {
    const selectForm = document.createElement('select');
    selectForm.setAttribute('class', 'filter_select-form');

    let str = ' ';
    for (let j = 0; j <= 17; j++) {
      str += `<option class="child" value = ${j}>${j} years old</option>`;
    }
    selectForm.innerHTML = str;
    childContainer.appendChild(selectForm);
  }
};
