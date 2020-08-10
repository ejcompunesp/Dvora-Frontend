import api from './api';

const feedbacksApi = {
  create : (dutyId, data) => api.post(`/duties/${dutyId}/feedback`, data),
  get : (memberId) => api.get(`/member/${memberId}/feedback`, ),
  put : (feedbackId) => api.put(`/duties/feedback/monitoring`, { feedbackId }),
  index : (jeId) => api.get(`/feedback`),
};

export default feedbacksApi;