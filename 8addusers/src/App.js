import React from "react";
import AddUser from "./Components/Users/AddUser.js";
import UsersList from "./Components/Users/UsersList.js";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
