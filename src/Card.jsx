import "antd/dist/antd.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "./config";
import "./App.css";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setUsers(res.data);
    });
  }, []);
  // console.log(users);
  useEffect(() => {
    localStorage.setItem('userLocal', JSON.stringify(users));
  }, [users]);
  const userLocal=JSON.parse(localStorage.getItem('userLocal'));
  console.log(userLocal)
  return (
    <div className="main">
      {
        <ul className="userList">
          {users.map((user) => (
            <li>
              <UserCard
                user={user}
                id={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                website={user.website}
                avatar={user.avatar}
              />{" "}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Users;
