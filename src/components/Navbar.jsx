import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark d-flex justify-content-center bg-dark">
      <Link to="/" className="mb-0 h1 navbar-brand">
        Contact List
      </Link>
    </nav>
  );
}

export default Navbar;
