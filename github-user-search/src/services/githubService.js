import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com/users';

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${GITHUB_API_BASE}/${username}`);
    return response.data;
  } catch (error) {
    // Throw error to be caught in component
    throw new Error('User not found');
  }
}
