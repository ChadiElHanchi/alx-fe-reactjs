import axios from 'axios';

const GITHUB_SEARCH_USERS = 'https://api.github.com/search/users?q=';

export async function searchUsersAdvanced({ username, location, minRepos, page = 1 }) {
  const queryParts = [];

  if (username) queryParts.push(username);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join('+');
  const perPage = 30;

  const url = `${GITHUB_SEARCH_USERS}${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`;

  const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

  const response = await axios.get(url, {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  });

  return response.data;
}
