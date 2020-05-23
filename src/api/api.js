import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-dvora.herokuapp.com',
    timeout: 100000
  });

  export default api;
