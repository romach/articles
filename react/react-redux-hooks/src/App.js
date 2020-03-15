import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login, logout } from "./actions";

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLoggedIn = useSelector(state => state.isLoggedInReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <h1>{counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      {isLoggedIn ? (
        <div>
          <div>Only for logged in users</div>
          <button onClick={() => dispatch(logout())}>Log out</button>
        </div>
      ) : (
        <div>
          <button onClick={() => dispatch(login())}>Log in</button>
        </div>
      )}
    </div>
  );
}

export default App;
