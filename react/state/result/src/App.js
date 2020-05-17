import React, { Component } from "react";
import "./tailwind.min.css";
import UserItem from "./components/UserItem";
import users from "./users.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users };
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(id) {
    console.log(this.state.users.filter((user) => user.id !== id));
    this.setState({ users: this.state.users.filter((user) => user.id !== id) });
    // this.setState((prevState) => ({ users: prevState.users.filter((user) => user.id !== id) }));
  }

  render() {
    return (
      <div className="bg-gray-200 flex">
        <div className="mx-auto" style={{ width: 600 }}>
          {this.state.users.map((user) => (
            <UserItem key={user.id} user={user} onDelete={this.deleteUser} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
