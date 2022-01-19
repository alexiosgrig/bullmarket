import React, { useState } from "react";
import "./css/App.css";
import NavBar from "./NavBar/NavBar";
import News from "../src/News/News";
import ChartLine from "./Charts/ChartLine";
import { Context } from "./Context/Context";
import { RevenueEarning } from "./Charts/RevenueEarning";
import { Recommendation } from "./Financials/Recommendation";
import { CashFlow } from "./Financials/IncomeStatement";
import { BrowseBar } from "./Financials/BrowseBar";
import { BrowseFinancial } from "./NavBar/BrowseFinancial";
import InputForm from "../src/InputForm/InputForm";
function App() {
  const [context, setContext] = useState("AAPL");
  return (
    <div className="App">
      <Context.Provider value={[context, setContext]}>
        <InputForm></InputForm>
        <BrowseBar></BrowseBar>
        <ChartLine></ChartLine>
        <RevenueEarning></RevenueEarning>
        <Recommendation></Recommendation>
        {/* <StockScreener></StockScreener> */}
        {/* <NavBar></NavBar> */}
        {/* <News></News> */}
      </Context.Provider>
    </div>
  );
}

export default App;
