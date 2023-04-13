import { addBlock } from './homesGL.js';

export const generateHotels = async (result) => {
  const availableHotels = document.querySelector('.available__list');
  availableHotels.innerHTML = '';
  const isHotel = document.querySelector('.available-hotels');
  isHotel.classList.remove('available-hotels--hidden');
  if (!result.length) {
    availableHotels.innerHTML = `Sorry, either you mistyped the request or we deleted these items, <br/> but let's agree to blame this on you :(`;
    return;
  }
  await addBlock('available__item', availableHotels, result);
};
