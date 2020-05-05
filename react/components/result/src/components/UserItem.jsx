import React, { Component } from "react";

export default class UserItem extends Component {
  render() {
    return (
      <div className="flex bg-white rounded-lg p-6 m-6 shadow-md">
        <div>
          <img
            className="h-24 w-24 mx-0 mr-6 rounded-full"
            src="avatar-1.jpeg"
          />
        </div>
        <div className="text-left">
          <h2 className="text-lg">Scott Reynolds</h2>
          <div className="text-purple-500">Customer Support</div>
          <div className="text-gray-600">scottreynolds@example.com</div>
          <div className="text-gray-600">(555) 765-4321</div>
        </div>
      </div>
    );
  }
}
