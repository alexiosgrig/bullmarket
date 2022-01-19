import React, { useState } from "react";
import "./css/App.css";
import InputForm from "./InputForm/InputForm";
import StockScreener from "./StockScreener/StockScreener";
import NavBar from "./NavBar/NavBar";
import News from "../src/News/News";
import ChartLine from "./Charts/ChartLine";
import { Context } from "./Context/Context";
import { RevenueEarning } from "./Charts/RevenueEarning";
import { Recommendation } from "./Financials/Recommendation";
import { CashFlow } from "./Financials/IncomeStatement";
import { BrowseBar } from "./Financials/BrowseBar";
import { BrowseFinancial } from "./NavBar/BrowseFinancial";
function App() {
  const [context, setContext] = useState("AAPL");
  return (
    <div className="App">
      <Context.Provider value={[context, setContext]}>
        <InputForm></InputForm>
        {/* <StockScreener></StockScreener> */}
        <BrowseBar></BrowseBar>
        {/* <NavBar></NavBar> */}
        {/* <News></News> */}
        <ChartLine></ChartLine>
        <RevenueEarning></RevenueEarning>
        <Recommendation></Recommendation>
      </Context.Provider>
    </div>
  );
}

export default App;
