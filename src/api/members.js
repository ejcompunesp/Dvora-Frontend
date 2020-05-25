import api from './api';

const membersApi = {
  store: (data, id) => api.post(`/jes/${id}/members/signup`, data)
};

export default membersApi;