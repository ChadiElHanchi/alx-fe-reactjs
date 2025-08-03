// src/services/github.js
import axios from 'axios';

const API_URL = 'https://api.github.com/users';

export const getUser = async (username) => {
  const headers = {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  };

  const response = await axios.get(`${API_URL}/${username}`, { headers });
  return response.data;
};
