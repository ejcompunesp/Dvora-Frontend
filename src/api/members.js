import api from './api';

const membersApi = {
  store: (data) => api.post(`/jes/members/signup`, data, {headers:{'Content-Type': 'multipart/form-data'}}),
  list: (jeId) => api.get(`/jes/${jeId}/members`),
  delete: (memberId) => api.delete(`jes/members/delete`, { data : memberId }),
  update: (data) => api.put(`/jes/members/update`, data)
};

export default membersApi;