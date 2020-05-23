import api from './api';


const authApi = {
    register : data => api.post('/jes/update', data),
  };

  export default authApi;