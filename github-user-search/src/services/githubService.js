import axios from 'axios';

const GITHUB_SEARCH_USERS = 'https://api.github.com/search/users?q=';  // note the "?q=" here

export async function searchUsersAdvanced({ username, location, minRepos, page = 1 }) {
  const queryParts = [];

  if (username) queryParts.push(username);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join('+');
  const perPage = 30;

  // Use the constant with "?q=" included
  const url = `${GITHUB_SEARCH_USERS}${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`;

  const response = await axios.get(url);

  return response.data;
}
