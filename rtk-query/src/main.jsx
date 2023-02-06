import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./feature/api/todo-slice";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
  // </React.StrictMode>
);
