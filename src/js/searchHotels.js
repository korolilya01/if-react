import { url } from './homesGL.js';

export const searchHotels = (city, peopleCount) => {
  const params = new URLSearchParams({
    search: city.valueOf(),
    adults: parseInt(peopleCount.adults),
    children: peopleCount.childrenAge,
    rooms: parseInt(peopleCount.rooms),
  });

  return fetch(`${url}?${params.toString()}`).then((response) =>
    response.json(),
  );
};
