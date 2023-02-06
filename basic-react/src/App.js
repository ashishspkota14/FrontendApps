// import styles from "./App.module.css";
// import { useState, useEffect } from "react";

import UserList from "./components/UserList/UserList";

// import "./App.css";
// import Service from "./components/Service";
// import getUser from "./services/getUser";


// https://api.github.com/users


function App() {
  const users = [];
  const data = fetch().then();
  // axios
  return (
    <>
      <UserList />
    </>
  );
}

export default App;
