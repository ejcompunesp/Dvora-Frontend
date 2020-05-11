import api from './api';

const authApi = {
  login: data => api.post('/login', data),
};

export default authApi;