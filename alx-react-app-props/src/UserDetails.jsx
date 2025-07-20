import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const user = useContext(UserContext);

  return (
    <>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </>
  );
}

export default UserDetails;
