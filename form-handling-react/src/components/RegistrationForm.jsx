import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempErrors = {};

    if (!username) tempErrors.username = "Username is required!";
    if (!email) tempErrors.email = "Email is required!";
    if (!password) tempErrors.password = "Password is required!";

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      setMessage(`User registered: ${username}, ${email}`);
      setUsername("");
      setEmail("");
      setPassword("");
    } else {
      setMessage("");
    }
  };

  return (
    <div>
      <h2>Registration Form (Controlled Component)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegistrationForm;
