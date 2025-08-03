import React from 'react';

function UserList({ users }) {
  if (!users || users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {users.map((user) => (
        <li key={user.id} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{ width: 50, height: 50, borderRadius: '50%', marginRight: '1rem' }}
          />
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            {user.login}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
