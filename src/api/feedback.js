import api from './api';

const feedbacksApi = {
  create : (dutyId, data) => api.post(`/duties/${dutyId}/feedback`, data),
  index : (jeId) => api.get('/feedback', { data: jeId }),
};

export default feedbacksApi;