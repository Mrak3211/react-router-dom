import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });
  return (
    <div>
      <h1>Login Page</h1> <br />
      <input type="text" /> <br />
      <input type="password" /> <br />
      <button onClick={login}>Login</button>
      <Outlet />
    </div>
  );
};

export default Login;
