import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    // <Outlet>
    <div>
      <div className="NavBar">
        <ul className="NavBarList">
          <NavLink to="news" className="NavBarLi">
            Market News
          </NavLink>
          <NavLink to="stocks" className="NavBarLi">
            Stocks
          </NavLink>
          <NavLink to="crypto" className="NavBarLi">
            Crypto
          </NavLink>
        </ul>
      </div>
    </div>
    // </Outlet>
  );
};
