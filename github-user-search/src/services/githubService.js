import axios from 'axios';

const GITHUB_SEARCH_USERS = 'https://api.github.com/search/users';

export async function searchUsersAdvanced({ username = '', location = '', minRepos = 0, page = 1 }) {
  const queryParts = [];

  if (username.trim()) queryParts.push(`${username.trim()} in:login`);
  if (location.trim()) queryParts.push(`location:${location.trim()}`);
  if (minRepos > 0) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join('+') || 'type:user'; // fallback to general user search if empty

  const perPage = 30;

  const response = await axios.get(GITHUB_SEARCH_USERS, {
    params: {
      q: query,
      page,
      per_page: perPage,
    },
  });

  return response.data; // returns { total_count, incomplete_results, items: [...] }
}
