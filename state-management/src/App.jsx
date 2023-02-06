import { useContext } from "react";
import PriceDetail from "./components/PriceDetail";
import { MyContext } from "./context/MyContext";

function App() {
  const valueFromContext = useContext(MyContext);
  return (
    <div>
      <PriceDetail />
    </div>
  );
}

export default App;
