import axios from 'axios';

import { DATA_URL } from '../utils/utils';

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

export const getAvailableHotels = async (search) => {
  return fetchData(`${DATA_URL}?search=${search}`);
};
