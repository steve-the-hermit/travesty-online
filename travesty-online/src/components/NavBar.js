import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <NavLink exact to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/bucketlist" className="nav-link" activeClassName="active">
          BucketList
        </NavLink>
        <NavLink to="/add" className="nav-link" activeClassName="active">
          Add Destination
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
