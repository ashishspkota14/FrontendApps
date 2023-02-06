export function countReducer(state, action) {
  // if (action.type === "increment") {
  //   return { ...state, count: state.count + action.step };
  // }

  // if (action.type === "decrement") {
  //   return { ...state, decCount: state.decCount - action.step };
  // }

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.step };
      break;
    case "decrement":
      return { ...state, decCount: state.decCount - action.step };
      break;
    default: {
      throw new Error("You need to have increment or decrement button only!");
    }
  }
}
