import api from './api';

const membersApi = {
  store: (jeId, data) => {
    for (var value of data.values()) {    
      console.log(value);  
    }
    return api.post(`/jes/${jeId}/members/signup`, data, {headers:{'Content-Type': 'multipart/form-data'}})},
  list: (jeId) => api.get(`/jes/${jeId}/members`),
  delete: (jeId, memberId) => api.delete(`jes/${jeId}/members/delete`, { data : memberId }),
  update: (jeId, data) => api.put(`jes/${jeId}/members/update`, data)
};

export default membersApi;