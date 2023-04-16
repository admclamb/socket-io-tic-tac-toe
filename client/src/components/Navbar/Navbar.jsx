import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-4 border-b">
      <div className="max-w-4xl mx-auto flex items-center px-4">
        <Link to="/">
          <h1 className="font-lg font-semibold">Tic-Tac-Toe</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
