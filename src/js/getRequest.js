import { validation } from './filterForm.js';
import { searchHotels } from './searchHotels.js';
import { generateHotels } from './index.js';

const AdultsNumber = document.getElementById('adults');
const ChildrenNumber = document.getElementById('children');
const RoomsNumber = document.getElementById('rooms');
const FilterForm = document.getElementsByClassName('filter_select-form');
const SearchButton = document.querySelectorAll('.page__search-button');
const SearchField = document.getElementsByTagName('input')[1];

const getExtraOptionsInput = (element) => {
  const peopleCount = {
    adults: 0,
    children: 0,
    childrenAge: [],
    rooms: 0,
  };
  if (element.parentElement.classList.contains('page__search')) {
    peopleCount.adults = AdultsNumber.innerHTML;
    peopleCount.children = ChildrenNumber.innerHTML;
    if (peopleCount.children !== '0') {
      const arrayFromChildrenList = Array.from(FilterForm);
      arrayFromChildrenList.forEach((item) => {
        peopleCount.childrenAge.push(item.selectedOptions[0].value);
        return peopleCount.childrenAge.join(',');
      });
      peopleCount.rooms = RoomsNumber.innerHTML;
      return peopleCount;
    }
    peopleCount.adults = validation.adults.min;
    peopleCount.children = validation.children.min;
    peopleCount.rooms = validation.room.min;
    return peopleCount;
  }
};

SearchButton.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    const searchValue = SearchField.value;
    const countOptions = getExtraOptionsInput(element);
    searchHotels(searchValue, countOptions).then((result) =>
      generateHotels(result),
    );
  });
});
