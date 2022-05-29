import React from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <React.Fragment>
      <h1>Welcome to the Page!</h1>
      <Route path="/welcome/new-user">
        <p>Hello new user!</p>
      </Route>
    </React.Fragment>
  );
};

export default Welcome;
