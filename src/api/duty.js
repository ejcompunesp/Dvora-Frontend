import api from './api';

const membersDuty = {
  create : data => api.post('/duties/register', data),
  list : jeId => api.get(`duties/${jeId}/today`),
  update : () => api.put('/duties/finish'),
  index : id => api.get(`duties/${id}`),
};

export default membersDuty;