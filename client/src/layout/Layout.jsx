import React from "react";
import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children, hero = null }) => {
  return (
    <>
      <header>
        <Navbar />
        {hero}
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
