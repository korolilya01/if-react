import axios from 'axios';

import { DATA_URL } from './utils';

export const getHomesHotels = async () => {
  const { data: cards } = await axios.get(`${DATA_URL}/popular`);
  return cards;
};

export const getAvailableHotels = async (search) => {
  const { data: cards } = await axios.get(`${DATA_URL}?search=${search}`);
  return cards;
};
