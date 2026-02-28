import { useState } from "react";
import { apiPost } from "../api/client";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("");

    try {
      // adjust based on your backend route: /api/auth/login or /api/login etc.
      const data = await apiPost("/login", { email, password });
      setMsg("Logged in! " + JSON.stringify(data));
    } catch (e) {
      setMsg("Login route not ready or credentials wrong.");
    }
  }

  return (
    <div style={{ maxWidth: 360 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
        <button type="submit">Login</button>
      </form>
      {msg && <p style={{ marginTop: 10 }}>{msg}</p>}
    </div>
  );
}