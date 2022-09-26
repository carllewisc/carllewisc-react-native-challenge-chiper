import axios from 'axios';
import config from '../config';

const instanceAxios = axios.create({
  baseURL: config.API_URL,
});

export default instanceAxios;
