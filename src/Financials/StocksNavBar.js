import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export const StocksNavBar = () => {
  return (
    <>
      <div>
        <div>
          <nav className="SearchBar">
            <NavLink to="news" className="SearchBarLink">
              News
            </NavLink>
            <NavLink to="balancesheet" className="SearchBarLink">
              BalanceSheet
            </NavLink>
            <NavLink to="incomestatement" className="SearchBarLink">
              IncomeStatement
            </NavLink>
            <NavLink to="cashflow" className="SearchBarLink">
              Cash Flow
            </NavLink>
            <NavLink to="revenue" className="SearchBarLink">
              Revenue Chart
            </NavLink>
            <NavLink to="chart" className="SearchBarLink">
              Price Chart
            </NavLink>
            <NavLink to="ratio" className="SearchBarLink">
              Ratios
            </NavLink>
          </nav>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};
