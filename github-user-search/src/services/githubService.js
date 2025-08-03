import axios from 'axios';

const GITHUB_SEARCH_USERS = 'https://api.github.com/search/users';

export async function searchUsersAdvanced({ username, location, minRepos, page = 1 }) {
  // Build query string parts:
  const queryParts = [];

  if (username) queryParts.push(username);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join('+');
  const perPage = 30;

  // Explicit full URL with query string:
  const url = `${GITHUB_SEARCH_USERS}?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`;

  const response = await axios.get(url);

  return response.data; // { total_count, incomplete_results, items: [...] }
}
