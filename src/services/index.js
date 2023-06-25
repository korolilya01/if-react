import axios from 'axios';

export const DATA_URL = 'https://if-student-api.onrender.com/api/hotels';

const cache = new Map();

export const fetchData = (url) => {
  if (!cache.has(url)) {
    cache.set(
      url,
      axios.get(url).then((response) => response.data),
    );
  }
  return cache.get(url);
};

export const getHomesHotels = async () => {
  return fetchData(`${DATA_URL}/popular`);
};
