import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/auth";

const Login = () => {
  const state = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });
  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(userData.username, userData.password));
  };
  const onChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
      {state.isAuthenticated && <Redirect to="/" />}
      <h2>Вход</h2>
      <br />
      <form onSubmit={e => onSubmit(e)}>
        <div style={{ display: "flex", flexFlow: "column", width: "300px" }}>
          <label>
            Логин <br />
            <input
              type="text"
              name="username"
              onChange={e => onChange(e)}
              value={userData.username}
            />
          </label>
          <label>
            Пароль <br />
            <input
              type="password"
              name="password"
              onChange={e => onChange(e)}
              value={userData.password}
            />
          </label>
        </div>
        <div className="button">
          <button type="submit" style={{ background: "lightblue" }}>
            Войти
          </button>
        </div>
        <p>
          Нет аккаунта? <Link to="/register">Зарегистрировать</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
