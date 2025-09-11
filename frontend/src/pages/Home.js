import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then(res => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
