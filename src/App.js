import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const loadusers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();

    setTimeout(() => {
      setUsers(jsonresponse.data);
      loadusers({ loading: false });
    }, 1000);
  };

  return (
    <div className="App">
      <div className="nav">
        <h1>LetsGrowMore</h1>
        <button onClick={loadusers}>Get users</button>
      </div>
      <div className="user">
        {users.map(({ email, first_name, last_name, avatar }) => {
          return (
            <div className="card">
              <div className="pic">
                <img src={avatar} about alt="..."></img>
              </div>
              <div className="details">
                <h2>
                  {first_name} {last_name}
                </h2>
                <h4>{email}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
