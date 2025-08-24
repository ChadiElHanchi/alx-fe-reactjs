// Simulate authentication status
import { useState } from "react";

const useAuth = () => {
  // Change this to false to simulate unauthenticated user
  const [isAuthenticated] = useState(true);
  return { isAuthenticated };
};

export default useAuth;
