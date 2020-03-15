# React Redux example

```bash
npx create-react-app .
```

```bash
npm i redux react-redux redux-thunk
```

Import `Provider` from `react-redux`.

Create action types.

Create `postReducer`.

Create `indexReducer`: combine other reducers with `combileReducers()` from `redux`.

Create store with `createStore(reducer, [preloadedState], [enhancer]))` from `redux`.

Wrap all application content into `<Provider>` with `store`.