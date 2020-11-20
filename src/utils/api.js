import axios from 'axios';
import { setAuthorizationHeader } from '../helpers/auth';

export const get = async (url, params) => {
  setAuthorizationHeader();
  const result = await axios.get(url, params);
  return result.data;
};

export const post = async (url, params) => {
  setAuthorizationHeader();
  const result = await axios.post(url, params);
  return result.data;
};
