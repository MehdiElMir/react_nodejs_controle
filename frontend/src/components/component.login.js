import { useState } from "react";
import { addProduct } from "../services/product.services";
import { Navigate, useNavigate } from "react-router-dom";
import { MdLogin } from "react-icons/md";

import "../Login.css";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleForm(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleForm}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" id="login">
          Login <MdLogin />
        </button>
      </form>
    </div>
  );
}
