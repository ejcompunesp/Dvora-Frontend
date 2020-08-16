import api from './api';

const boardsApi = {
  create : (data) => api.post(`/boards/register`, data),
  index : () => api.get(`/boards`),
  update : (data) => api.put(`/boards/update`, data),
  delete : (boardId)  => api.delete(`/boards/delete`, { data : boardId}),
};

export default boardsApi;