import api from './api';

const feedbacksApi = {
  create : (dutyId, data) => api.post(`/duties/${dutyId}/feedback`, data),
  index : (jeId) => api.get(`/feedback/${jeId}`),
};

export default feedbacksApi;