import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="title">
        <h1>Velaan</h1>
      </div>
      <div className="links">
        <a href="../Reg">Register</a>
        <a href="../product">Product</a>
        <a href="../Reg">Cart</a>
      </div>
    </nav>
  );
}

export default Nav;
