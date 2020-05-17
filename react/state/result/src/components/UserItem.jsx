import React, { Component } from "react";

export default class UserItem extends Component {
  render() {
    const { id, name, position, email, phone, avatar } = this.props.user;
    const { onDelete } = this.props;
    return (
      <div className="flex bg-white rounded-lg p-6 m-6 shadow-md">
        <div>
          <img
            className="h-24 w-24 mx-0 mr-6 rounded-full object-cover"
            src={avatar} alt={name}
          />
        </div>
        <div className="text-left">
          <h2 className="text-lg">{name}</h2>
          <div className="text-purple-500">{position}</div>
          <div className="text-gray-600">{email}</div>
          <div className="text-gray-600">{phone}</div>
          <button onClick={() => onDelete(id)}>Delete</button>  
        </div>
      </div>
    );
  }
}
