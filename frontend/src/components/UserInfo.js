import React, { useState, useLayoutEffect } from "react";
import axios from "axios";
const UserInfo = ({ isAuthenticated }) => {
  const [user, setUser] = useState([]);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${localStorage.getItem("access")}`,
      Accept: "application/json",
    },
  };

  useLayoutEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config)
      .then((res) => setUser(res.data))
      .then(console.log(user))
      .catch((error) => console.log(error));
  }, [isAuthenticated]);

  return (
    <div className="text-center">
      {user.is_worker ? <h1>User is worker</h1> : <h1>User is not worker</h1>}
      <br /> <br /> <br />
      <h1>First name: {user.first_name}</h1>
      <h1>Last name: {user.last_name}</h1>
      <br /> <br />
      {user.is_staff ? <h1>User is staff</h1> : <h1>User is not staff</h1>}
      <br /> <br />
      <h1>Last login:{user.last_login}</h1>
    </div>
  );
};

export default UserInfo;
