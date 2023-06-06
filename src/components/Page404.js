import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h1>404 Page not found</h1>
      <Link to="/">Go To Home Page</Link>
    </div>
  );
};

export default Page404;
