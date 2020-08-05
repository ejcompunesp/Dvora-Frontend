import api from './api';

const feedbacksApi = {
  create : (dutyId, data) => api.post(`/duties/${dutyId}/feedback`, data),
  get : (memberId) => api.get(`/member/${memberId}/feedback`, ),
  index : () => api.get(`/feedback`),
};

export default feedbacksApi;