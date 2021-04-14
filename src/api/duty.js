import api from './api';

const membersDuty = {
  create : data => api.post('/duties/register', data),
  list : jeId => api.get(`duties/${jeId}/today`),
  finish : data => api.put('/duties/finish', data),
  index : id => api.get(`/duties/${id}`),
};

export default membersDuty;