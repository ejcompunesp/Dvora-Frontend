import api from './api';

const boardsApi = {
  create : (jeId, data) => api.post(`/jes/${jeId}/boards/register`, data),
  index : jeId => api.get(`jes/${jeId}/boards`),
  update : (jeId, data) => api.put(`/jes/${jeId}/boards/update`, data),
  delete : (jeId, boardId)  => api.delete(`jes/${jeId}/boards/delete`, { data : boardId}),
};

export default boardsApi;