import React from "react";
import { Link, useParams } from "react-router-dom";
const Userpage = () => {
  const params = useParams();
  const { name } = params;
  return (
    <div>
      <h1> This is {name}'s Page... </h1>
      <p>
        <Link to="/"> Go To Home Page</Link>{" "}
      </p>
    </div>
  );
};

export default Userpage;
