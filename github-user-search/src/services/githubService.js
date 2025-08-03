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

  const response = await axios.get(GITHUB_SEARCH_USERS, {
    params: {
      q: query,
      page,
      per_page: perPage,
    },
  });

  return response.data; // { total_count, incomplete_results, items: [...] }
}
