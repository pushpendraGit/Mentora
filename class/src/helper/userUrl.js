const API_ROOT = `http://localhost:8000`;

export const user_url = {
  login: () => `${API_ROOT}/user/signin`,
  signup: () => `${API_ROOT}/user/createUser`,
};
