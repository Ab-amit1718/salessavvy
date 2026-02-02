import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Auth() {
  const [mode, setMode] = useState("login");

  return (
    <div>
      {mode === "login" ? <Login /> : <Register />}

      <hr />

      {mode === "login" ? (
        <p>
          Don’t have an account?{" "}
          <button onClick={() => setMode("register")}>Register</button>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <button onClick={() => setMode("login")}>Login</button>
        </p>
      )}
    </div>
  );
}
