import React from "react";
import "./tailwind.min.css";
import UserItem from "./components/UserItem";
import users from "./users.json";

function App() {
  return (
    <div className="bg-gray-200 flex">
      <div className="mx-auto" style={{width: 600}}>
        {users.map(user => <UserItem key={user.email} user={user}/>)}
      </div>
    </div>
  );
}

export default App;
