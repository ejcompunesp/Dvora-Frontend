import api from './api';

const membersDuty = {
  create : data => api.post('/duties/register', data),
  list : id => api.get(`duties/${id}`),
  update : id => api.put(`/duties/${id}/finish`)
};

export default membersDuty;