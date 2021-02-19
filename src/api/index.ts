import Axios from 'axios';

export const API = Axios.create({
  baseURL: 'https://fakerapi.it/api/v1',
});
