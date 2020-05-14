import api from './api';
export const TOKEN_KEY = "@devora-token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const loginDashboard = token => {
  localStorage.setItem(TOKEN_KEY, token);
  console.log(token);
};

export const logoutDashboard = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const authApi = {
  login: data => api.post('/login', data),
};

export default authApi;