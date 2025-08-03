import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export async function searchUsersAdvanced({ username, location, minRepos, page = 1 }) {
  const queryParts = [];

  if (username) queryParts.push(username);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join('+');
  const perPage = 30;

  // Full URL with query parameters (literal string includes "?q=")
  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`;

  const response = await axios.get(url);

  // response.data has shape: { total_count, incomplete_results, items: [...] }
  return response.data;
}
