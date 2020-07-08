import api from './api';
export const TOKEN_KEY = "@dvora-token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const isLoginMember = () => {
  const user = JSON.parse(localStorage.getItem("state"));
  if (user.member.id) {
    return true; 
  }
  return false;
};

export const loginDashboard = token => {
  localStorage.setItem(TOKEN_KEY, token);
  window.location.reload();
};

export const logoutDashboard = () => {
  localStorage.removeItem(TOKEN_KEY);
  window.location.reload();
};

const authApi = {
  login: data => api.post('/login', data),
};

export default authApi;
