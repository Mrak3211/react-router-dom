import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navToPage = (url) => {
    navigate(url);
  };
  // const location = useLocation();
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the Home Page of the React-Router App</p>
      <Link to="/about">Go To About Page</Link>
      <br />
      <Link to="/filter/:age/:city">Go To filter Page</Link>
      <br />
      <button onClick={() => navToPage("/about")}>Go To About Page</button>
      <br />
      <button onClick={() => navToPage("/user")}>Go To User Page</button>
    </div>
  );
};

export default Home;
