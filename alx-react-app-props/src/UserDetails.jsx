// src/components/UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '15px' }}>
      <h3>User Details (via Context)</h3>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;
