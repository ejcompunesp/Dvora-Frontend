import api from './api';
export const TOKEN_KEY = "@dvora-token";
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);

  if (!token) return false;
  try {
    const { exp } = JSON.parse(atob(token.split('.')[1]));
    if (exp < new Date().getTime() / 1000) {
      localStorage.removeItem(TOKEN_KEY);
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
}

export const isLoginMember = () => {
  const user = JSON.parse(localStorage.getItem("state"));
  if(user) {
    if(user.member){
      if (user.member.id) {
        return true;
      }
    }
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
