import { bubbleSortHotels } from './sortHotel.js';

const homesGLName = 'homes';
export const url = 'https://if-student-api.onrender.com/api/hotels';

export const addBlock = (itemClassName, listClassName, result) => {
  result.forEach((elem) => {
    const hotelName = elem.name;
    const hotelLocation = `${elem.city}, ${elem.country}`;
    const hotelImgUrl = elem.imageUrl;

    const itemHotel = `<div class = "swiper-slide"><div class="${itemClassName}">
      <img class="img-style" src="${hotelImgUrl}" alt="${hotelName}"/> 
      <a class="item__text" href="#">${hotelName}</a>
      <p class="item__text hostel-location">${hotelLocation}</p>
      </div></div>`;
    listClassName.innerHTML += itemHotel;
  });
};

const sortData = async (response) => {
  const result = await response.json();
  if (!sessionStorage.getItem(homesGLName)) {
    sessionStorage.setItem(homesGLName, JSON.stringify(result));
  }
  const homesGL = document.querySelector('.homes__list');
  bubbleSortHotels(result);
  addBlock('homes__item', homesGL, result);
};

const getResponse = () => {
  fetch(`${url}/popular`)
    .then((response) => sortData(response))
    .catch((error) => {
      console.log('Fetch Error: -S', error);
    });
};

getResponse();
