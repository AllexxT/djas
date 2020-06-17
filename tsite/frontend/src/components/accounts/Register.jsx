import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../actions/auth";

const Register = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.authReducer);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });
  const [passMatch, setPassMatch] = useState(null);
  const onSubmit = e => {
    e.preventDefault();
    const {username, email, password, password2} = userData
    if (password !== password2) {
      console.log('passwords not match')
      setPassMatch(false)
    } else {
      console.log('submit')
      setPassMatch(true)
      const newUser = {
        username,
        password,
        email,
      }
      dispatch(register(newUser))
    }
    dispatch(register);
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
      <h2>Регистрация</h2>
      <br />
      <form onSubmit={e => onSubmit(e)}>
        <div style={{ display: "flex", flexFlow: "column", width: "300px" }}>
          <label>
            Username <br />
            <input
              type="text"
              name="username"
              onChange={e => onChange(e)}
              value={userData.username}
            />
          </label>
          <label>
            Email <br />
            <input
              type="email"
              name="email"
              onChange={e => onChange(e)}
              value={userData.email}
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
          <label>
            Подтвердите пароль <br />
            <input
              type="password"
              name="password2"
              onChange={e => onChange(e)}
              value={userData.password2}
            />
            {passMatch == false && "Не совпадает"}
          </label>
        </div>
        <div className="button">
          <button type="submit" style={{ background: "lightblue" }}>
            Зарегистрироваться
          </button>
        </div>
        <p>
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
