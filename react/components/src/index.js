import ReactDOM from "react-dom";
import React from "react";

function Child({ name, age }) {
  return (
    <div>
      Hello! I'm child component. My name is {name}. May age is {age}
    </div>
  );
}

function Destructured({ data: { name, age } }) {
  return (
    <div>
      Hello! I'm component with destructured props. My name is {name}. May age
      is {age}
    </div>
  );
}

const element = { name: "Destructured", age: 10 };

function MyComponent() {
  return (
    <div>
      <h1>First React component</h1>
      <Child name="First" age={5} />
      <Child name="Second" age={6} />
      <Destructured data={element} />
    </div>
  );
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
