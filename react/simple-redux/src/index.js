import { createStore } from "redux";

const reducer = function(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

const counter = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

incrementButton.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

decrementButton.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});

store.subscribe(() => (counter.textContent = store.getState()));
