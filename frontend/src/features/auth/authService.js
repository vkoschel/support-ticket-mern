import axios from 'axios';
import { response } from 'express';

const API_URL = '/api/users';

const register = async (userData) => {
  const reponse = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
};

export default authService;
