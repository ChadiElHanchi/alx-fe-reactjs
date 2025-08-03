import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

const axiosInstance = axios.create({
  baseURL: GITHUB_API_URL,
  headers: apiKey ? { Authorization: `token ${apiKey}` } : {},
});

export const searchUsers = async (query) => {
  try {
    const response = await axiosInstance.get('/search/users', {
      params: { q: query },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
