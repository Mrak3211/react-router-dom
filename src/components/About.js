import React from "react";
import { Link } from "react-router-dom";

const about = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is About Page Of React-Router App</p>
      <Link to="/">Go To Home Page</Link>
    </div>
  );
};

export default about;
