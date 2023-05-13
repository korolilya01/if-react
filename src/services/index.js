import axios from 'axios';

import { DATA_URL } from '../utils/utils';

export const getRequest = async (url, config) => {
  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHomesHotels = async () => {
  return getRequest(`${DATA_URL}/popular`);
};

export const getAvailableHotels = async (search) => {
  return getRequest(DATA_URL, {
    params: {
      search: search,
    },
  });
};
