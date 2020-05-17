# Use state in React components

To use state you need to create class and extend it from `React.Component`.

You need to add `render()` method to you component. This method will return content of your component.

```react
class ComponentWithState extends React.Component {
  render() {
    return <div>Component with state</div>;
  }
}
```

Component state is located in `this.state` variable.

Let's create button in our component that will toggle the visibility of hidden content in our component.

Add hidden content and button to our component:

```react
class ComponentWithState extends React.Component {
  render() {
    return (
      <div>
        <div>Component with state</div>
        <div>Hiddent content</div>
        <button>Toggle hidden content</button>
      </div>
    );
  }
}
```

To initialize state we need to create constructor and assign our state to `this.state` variable.

Our state will contain `showHiddenContent` field with value `false`.

```react
constructor() {
  super();
  this.state = {
    showHiddenContent: false
  };
}
```

After that we  need to modify `render()` method so that `Hidden content` show only if `showHiddenContent` equals `true`. 

```react
render() {
  return (
    <div>
      <div>Component with state</div>
      {this.state.showHiddenContent && <div>Hiddent content</div>}
      <button>Toggle hidden content</button>
    </div>
  );
}
```

To toggle component state we need to add listener to our button.

Inside this listener we need to invoke `this.setState()` method and pass object with changed properties. This object will be merged with `this.state`.

If we use function declaration we need to bind handler to `this` or to copy `this` property (`_this = this`). If we will invoke `this` inside `onClick` handler, `this` will be `undefined`.

```react
render() {
  const _this = this;
  return (
    <div>
      <div>Component with state</div>
      {this.state.showHiddenContent && <div>Hiddent content</div>}
      <button
        type="button"
        onClick={function() {
          _this.setState({
 		    showHiddenContent: !_this.state.showHiddenContent
		  });
        }}
      >
        Toggle hidden content
      </button>
    </div>
  );
}
```

Another option - use arrow function - so we can use `this` inside it.

```react
render() {
  return (
    <div>
      <div>Component with state</div>
      {this.state.showHiddenContent && <div>Hiddent content</div>}
      <button
        type="button"
        onClick={() => {
          this.setState({
            showHiddenContent: !this.state.showHiddenContent
          });
        }}
      >
        Toggle hidden content
      </button>
    </div>
  );
}
```

