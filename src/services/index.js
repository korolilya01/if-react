import axios from 'axios';

import { DATA_URL } from '../utils/utils';
import { useGetAvailableHotelsQuery } from '../store/slices/api.slice';

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

export const getAvailableHotels = async () => {
  return fetchData(`${useGetAvailableHotelsQuery}`);
};

