import redux from "redux";

const countReducer = (state = { counter: 0 }, action) => {
  console.log(action);
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "increasy by 10") {
    return { counter: state.counter + action.amount };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
};

const store = redux.createStore(countReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increasy by 10", amount: 10 });

store.dispatch({ type: "decrement" });
