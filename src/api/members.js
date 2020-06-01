import api from './api';

const membersApi = {
  store: (data, id) => api.post(`/jes/${id}/members/signup`, data),
  list: (id) => api.get(`/jes/${id}/members`),
  delete: (id) => api.delete(`jes/${id}/members/delete`),
  update: (id) => api.put(`jes/${id}/members/update`)
};

export default membersApi;