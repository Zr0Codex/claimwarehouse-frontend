/* Authetifacation actions */
import { message } from "antd";
import axios from "axios";
// import React, { useEffect, useState } from 'react'
// LOGIN

export const login = (props, d) => {
  if (d.username && d.password) {
    let user = {
      username: d.username,
      password: d.password,
    };
    console.log(process.env.REACT_APP_API_ENDPOINT);
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}`, user)
      .then((res) => {
        console.log("data res", res);
        console.log(res.data);
        localStorage.setItem("auth", res.data.token);
        localStorage.setItem("emp_id", res.data.employee_id);
        localStorage.setItem("firstName", res.data.firstName);
        localStorage.setItem("lastName", res.data.lastName);
        localStorage.setItem("role", res.data.group_code);
        localStorage.setItem("group_code", res.data.group_code);
        localStorage.setItem("group_menu", JSON.stringify(res.data.group_menu));
        // setUser(res.data)
        props.history.push("/home");
        message.success("Login Success");
      })
      .catch((err) => {
        message.error("Login Failed");
      });
  } else {
    message.error("Field Must Not Empty");
  }
};

// LOGOUT
export const logout = () => {
  localStorage.removeItem("auth");
  localStorage.removeItem("firstName");
  localStorage.removeItem("lastName");
  localStorage.removeItem("role");
  localStorage.removeItem("group_menu");
  localStorage.removeItem("group_code");
  localStorage.removeItem("emp_id");
  localStorage.removeItem("path");
  message.success("Logout Success");
};

// LOGIN STATUS
export const isLogin = () => {
  if (localStorage.getItem("auth")) return true;
  return false;
};

// export const isAuthen = () => {
//     const [state, setState] = useState(false)
//     const [user, setUser] = useState({})
//     useEffect(() => setState(isLogin()), [props])
//     if()
// }
