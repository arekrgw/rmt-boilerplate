import { API } from '@api';

export const fetchPosts = async () => {
  return API.get('/users');
};
