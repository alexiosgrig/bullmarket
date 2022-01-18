import React from "react";
import { BrowserRouter, Routes, Switch, Route, Link } from "react-router-dom";
import { BrowseFinancial } from "../NavBar/BrowseFinancial";
import { BalanceSheet } from "./BalanceSheet";
import { CashFlow } from "./CashFlow";
import { IncomeStatement } from "./IncomeStatement";
export const BrowseBar = () => {
  return (
    <BrowserRouter>
      <div>
        <BrowseFinancial />
        <Routes>
          <Route path="/cashflow" element={<CashFlow />} />
          <Route path="/incomestatement" element={<IncomeStatement />} />
          <Route path="/balancesheet" element={<BalanceSheet />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
