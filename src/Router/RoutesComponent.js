import React from "react";
import { Route, Routes } from "react-router-dom";
import { Stocks } from "../Financials/Stocks";
import { BalanceSheet } from "../Financials/BalanceSheet";
import { CashFlow } from "../Financials/CashFlow";
import { IncomeStatement } from "../Financials/IncomeStatement";
import News from "../News/News";
import ChartLine from "../Charts/ChartLine";
import { RevenueEarning } from "../Charts/RevenueEarning";
import { StockNews } from "../News/StockNews";
import { Ratio } from "../Financials/Ratios";
export const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<News />}></Route>
        <Route path="news" element={<News />} />
        <Route path="stocks" element={<Stocks />}>
          <Route path="/stocks" element={<StockNews />} />
          <Route path="news" element={<StockNews />} />
          <Route path="cashflow" element={<CashFlow />} />
          <Route path="incomestatement" element={<IncomeStatement />} />
          <Route path="balancesheet" element={<BalanceSheet />} />
          <Route path="chart" element={<ChartLine />} />
          <Route path="revenue" element={<RevenueEarning />} />
          <Route path="ratio" element={<Ratio />} />
        </Route>
      </Routes>
    </>
  );
};
