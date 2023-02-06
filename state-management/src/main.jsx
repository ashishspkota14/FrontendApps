import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MyContext } from "./context/MyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContext.Provider value={100}>
    <App />
  </MyContext.Provider>
);
