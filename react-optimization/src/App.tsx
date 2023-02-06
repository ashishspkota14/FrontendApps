import { useCallback, useMemo, useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [num, setNum] = useState(0);
  const [newNum, setNewNum] = useState(0);

  const handleUpdate = useCallback(() => {
    console.log("I am a part of function");
  }, [newNum]);

  const memoChild = useMemo(
    () => <ChildComponent handleUpdate={handleUpdate} />,
    [handleUpdate]
  );

  return (
    <div>
      <h1>{num}</h1>
      <h1>{newNum}</h1>
      {memoChild}
      {/* <ChildComponent /> */}
      <button onClick={() => setNum(num + 1)}> Addition </button>
      <button onClick={() => setNewNum(newNum - 1)}> Subtraction </button>
    </div>
  );
}

export default App;
