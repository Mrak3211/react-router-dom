import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div>
      <li>
        <Link to="/user/ayush">Ayush</Link>
      </li>
      <li>
        <Link to="/user/Titus">Titus</Link>
      </li>
      <li>
        <Link to="/user/Raegan">Raegan</Link>
      </li>
      <li>
        <Link to="/user/Clayton">Clayton</Link>
      </li>
      <li>
        <Link to="/user/Blake">Blake</Link>
      </li>
    </div>
  );
};

export default User;
