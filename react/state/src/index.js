import React from "react";
import ReactDOM from "react-dom";

class ComponentWithState extends React.Component {
  render() {
    return <div>Component with state</div>;
  }
}

ReactDOM.render(<ComponentWithState />, document.getElementById("root"));
