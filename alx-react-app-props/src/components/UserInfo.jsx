// src/components/UserInfo.jsx
import { useContext } from 'react';
import UserContext from '../UserContext';

function UserInfo() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserInfo;
