import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  let mystyle = {
    margin: "5px",
  };
  return (
    <div>
      <h2>Contact Page</h2>
      <h2>Here We Have Some Other Business</h2>
      <Link style={mystyle} to="company">
        Company
      </Link>
      <Link style={mystyle} to="channel">
        Channel
      </Link>
      <Link style={mystyle} to="other">
        Other
      </Link>
      <Outlet />
    </div>
  );
};

export default Contact;
