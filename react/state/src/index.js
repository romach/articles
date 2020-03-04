import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class ComponentWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      showHiddenContent: false,
      isLiked: false
    };
  }

  toggleHiddenContent = () => {
    this.setState({
      showHiddenContent: !this.state.showHiddenContent
    });
  };

  toggleLike = () => {
    this.setState({
      isLiked: !this.state.isLiked
    });
  };

  render() {
    return (
      <div style={{ width: "250px" }}>
        <div>Component with state</div>
        {this.state.showHiddenContent && <div>Hiddent content</div>}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleHiddenContent}>
            {this.state.showHiddenContent ? "Hide" : "Show"}
          </button>
          <button
            type="button"
            className = {this.state.isLiked && "btn--liked"}
            // style={{ backgroundColor: this.state.isLiked ? "palegreen" : null }}
            onClick={this.toggleLike}
          >
            {this.state.isLiked ? "Unlike" : "Like"}
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ComponentWithState />, document.getElementById("root"));
