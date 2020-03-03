# Create component in React

To create **component** we need to declare *function* that will return React *element*. For simplicity we use JSX to create React element.

```react
function MyComponent() {
  return <div>First React component</div>;
}
```

Then, we need to use this function (we can use JSX) as a parameter of `ReactDOM.render()` method to render it into the DOM.

```react
ReactDOM.render(<MyComponent/>, document.getElementById("root"));
```

To use JSX we need to import `React` package from `react`.

## Child components

We can insert child components into our parent component.

For example, declare child component:

```react
function Child() {
  return <div>Hello! I'm child component.</div>
}
```

And insert two children into `MyComponent`:

```react
function MyComponent() {
  return (
    <div>
      <h1>First React component</h1>
      <Child />
      <Child />
    </div>
  );
}
```

## Pass properties to component

Every functional component receives `props` as argument. `props` is an object with properties what were passed to component while its creation.

In JSX you can pass properties like HTML attributes: `<Component property1="value1"/>`

To use `props` inside JSX you need to wrap them with curly braces: `<div>{props.property1}</div>`

Let's pass `name` property into our `Child` component:

```react
function Child(props) {
  return <div>Hello! I'm child component. My name is {props.name}.</div>
}

function MyComponent() {
  return (
    <div>
      <h1>First React component</h1>
      <Child name="First"/>
      <Child name="Second" />
    </div>
  );
}
```

Also, you can dereference `props`:

```react
function Child({name}) {
  return <div>Hello! I'm child component. My name is {name}.</div>
}
```

If you need to pass number in `props`, you need to wrap its value in curly braces: `<Child name="First", age={5}/>`

## Pass object to `props`

When we pass object to `props` we can destructure `props`, so it is more convenient to use separate fields instead of full property paths.

```react
const element = {name: "Destructured", age: 10}
```

```react
<Destructured data = {element}/>
```

```react
function Destructured({data: {name, age}}) {
  return <div>Hello! I'm component with destructured props. My name is {name}. May age is {age}</div>
}
```

