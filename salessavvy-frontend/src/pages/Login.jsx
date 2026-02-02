import { useState } from "react";
import { apiFetch } from "../api/api";
import { saveToken } from "../auth/auth";

export default function Login({ onSwitchToRegister, onAuthSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
    setError(null);

    try {
      const data = await apiFetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });

      saveToken(data.token);
      localStorage.setItem("role", data.role);
      onAuthSuccess(); // 🔥 tells App we are logged in
    } catch (err) {
      setError("Invalid credentials");
    }
  }

  return (
    <div>
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>

      <p>
        No account?{" "}
        <button onClick={onSwitchToRegister}>Register</button>
      </p>
    </div>
  );
}
