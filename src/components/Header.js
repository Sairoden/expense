import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active">
        Dashboard
      </NavLink>
      <NavLink activeClassName="is-active" to="/create">
        Create Expense
      </NavLink>
      <NavLink activeClassName="is-active" to="/help">
        Help
      </NavLink>
    </header>
  );
}

export default Header;
