import api from "./api";

const jesApi = {
    register : data => api.post('/jes/signup', data)
}
export default jesApi;