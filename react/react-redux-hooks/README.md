# Redux example with hooks

Initialize application

```bash
npx create-react-app .
```

Install dependencies

```bash
npm i redux react-redux
```

## Redux basics

Import `createStore` function from `react-redux`.

Create reducer.

Create store with `createStore` function, pass reducer as parameter.

Throw **action** (can be created with object literal or action creator) to **store** with `store.dispatch(action)` method. Action will be processed by reducer.

## Directories structure

```
- src
  - actions
  - reducers
```

## Reducers

- create reducers for counter and log-in status

Combine reducers with `combineReducers` from `redux` 

## Main logic

- import `createStore` from `redux` package
- import combined reducer
- create store
- wrap `App` into `Provider` from `react-redux` so that inner components could have access to store
  - pass store to `Provider`

## Usage of Redux store

- import `useSelector` function from `react-redux`
- use `useSelector()` with callback `state => state.reducer` (for combined reducer) or `state => state` (for single reducer)  to get value from store

## How to dispatch actions

