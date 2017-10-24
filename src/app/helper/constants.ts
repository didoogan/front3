// export const API_SERVER = 'http://192.168.1.13:8000';
export const API_SERVER = 'http://127.0.0.1:8000';
export const MAIN_PAGE = '/user/profile';
export const LOGIN_PAGE = '/user/signin';

export const ENDPOINTS = {
  userList: `${API_SERVER}/api/users/`,
  userInfo: `${API_SERVER}/rest-auth/user/`,
  registration: `${API_SERVER}/rest-auth/registration/`,
  login: `${API_SERVER}/rest-auth/login/`,
  ancestors: `${API_SERVER}/api/ancestors/`
};
