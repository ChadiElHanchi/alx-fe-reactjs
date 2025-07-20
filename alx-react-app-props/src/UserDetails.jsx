import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Info (from Context)</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;
