import axios from 'axios';
import { BASE_API_URL } from '@/utils/constants';

export default () => {
  const instance = axios.create({
    baseURL: BASE_API_URL,
    timeout: 10000,
  });

  return instance;
};
