import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Filter = () => {
  const { age, city } = useParams();

  return (
    <div>
      <h1>Filter Page</h1>
      <h3>Age is: {age} </h3>
      <h3>City is: {city}</h3>
      <Link to="/">Go To Home Page</Link>
    </div>
  );
};

export default Filter;
