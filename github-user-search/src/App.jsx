import React, { useState } from 'react';
import Search from './components/Search';
import UserList from './components/UserList';
import Loading from './components/Loading';
import { searchUsers } from './services/githubApi';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const results = await searchUsers(query);
      setUsers(results);
    } catch (error) {
      setUsers([]);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {loading ? <Loading /> : <UserList users={users} />}
    </div>
  );
}

export default App;
