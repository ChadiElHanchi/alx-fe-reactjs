import React, { useState } from 'react';
import Search from './components/Search';
import UserList from './components/UserList';
import Loading from './components/Loading';
import { searchUsers } from './services/githubApi';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchUsers(query);
      setUsers(results);
      if (results.length === 0) {
        setError('No users found.');
      }
    } catch (error) {
      setUsers([]);
      setError('Error fetching users.');
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {loading && <Loading />}
      {!loading && error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && <UserList users={users} />}
    </div>
  );
}

export default App;
