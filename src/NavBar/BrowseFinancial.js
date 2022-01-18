import React from "react";
import "../css/App.css";
import { BrowserRouter, Routes, Switch, Route, Link } from "react-router-dom";

export const BrowseFinancial = () => {
  return (
    <div>
      <ul className="BrowserUl">
        <Link to="/cashflow">
          <li className="BrowserLi"> CashFlow </li>
        </Link>
        <Link to="/incomestatement">
          <li className="BrowserLi"> Income Statement </li>
        </Link>

        <Link to="/balancesheet">
          <li className="BrowserLi"> Balance Sheet</li>
        </Link>
      </ul>
    </div>
  );
};
