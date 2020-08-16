import api from "./api";

const jesApi = {
    register : data => api.post('/jes/signup', data),
    update : data => api.put('/jes/update', data),
}
export default jesApi;