import React, { useState } from 'react';
import { searchUsersAdvanced } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSearch = async (e, newPage = 1) => {
    if (e) e.preventDefault();

    // Trim inputs for better query
    const trimmedUsername = username.trim();
    const trimmedLocation = location.trim();
    const trimmedMinRepos = minRepos.toString().trim();

    // Require at least one search criteria
    if (!trimmedUsername && !trimmedLocation && !trimmedMinRepos) {
      setError('Please enter at least one search criteria');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { items, total_count } = await searchUsersAdvanced({
        username: trimmedUsername || undefined,
        location: trimmedLocation || undefined,
        minRepos: trimmedMinRepos ? Number(trimmedMinRepos) : undefined,
        page: newPage,
      });

      if (newPage === 1) {
        setUsers(items);
      } else {
        // Append new results on pagination
        setUsers((prev) => [...prev, ...items]);
      }

      setTotalCount(total_count);
      setPage(newPage);

      if (items.length === 0) setError('No users found.');
    } catch (err) {
      setError('Error fetching users.');
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (users.length === 0 || users.length >= totalCount) return;
    handleSearch(null, page + 1);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label htmlFor="username" className="block font-medium mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="GitHub username"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="location" className="block font-medium mb-1">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. San Francisco"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="minRepos" className="block font-medium mb-1">
            Minimum Repositories
          </label>
          <input
            id="minRepos"
            type="number"
            min="0"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="e.g. 10"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <p className="mt-4 text-red-600">{error}</p>}

      <ul className="mt-6 space-y-4">
        {users.map((user) => (
          <li key={user.id} className="flex items-center space-x-4 border p-3 rounded-md">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                {user.login}
              </a>
              <p>Score: {user.score.toFixed(2)}</p>
              {/* Note: Location and repo count require additional requests or embedding */}
            </div>
          </li>
        ))}
      </ul>

      {users.length > 0 && users.length < totalCount && (
        <button
          onClick={loadMore}
          disabled={loading}
          className="mt-4 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Load More
        </button>
      )}
    </div>
  );
}
