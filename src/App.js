import React, { useState } from "react";
import "./css/App.css";
import News from "../src/News/News";
import ChartLine from "./Charts/ChartLine";
import { Context } from "./Context/Context";
import { RevenueEarning } from "./Charts/RevenueEarning";
import { Recommendation } from "./Financials/Recommendation";
import { CashFlow } from "./Financials/IncomeStatement";
import { BrowseBar } from "./Financials/BrowseBar";
import { BrowseFinancial } from "./NavBar/BrowseFinancial";
import InputForm from "../src/InputForm/InputForm";
// import { Search } from "./Search/Search";
import { NavBar } from "./NavBar/NavBar";
import { Banner } from "./Banner/Banner";
import { MergerNews } from "./News/MergerNews";
import { Stocks } from "./Financials/Stocks";
import { Outlet } from "react-router-dom";
import { RoutesComponent } from "./Router/RoutesComponent";
function App() {
  const [context, setContext] = useState("AAPL");
  return (
    <div className="App">
      <Context.Provider value={[context, setContext]}>
        <Banner></Banner>
        <NavBar></NavBar>
        {/* <Search></Search> */}
        {/* <MergerNews></MergerNews> */}
        {/* <InputForm></InputForm> */}
        {/* <BrowseBar></BrowseBar> */}
        {/* <ChartLine></ChartLine> */}
        {/* <RevenueEarning></RevenueEarning> */}
        {/* <Recommendation></Recommendation> */}
        {/* <StockScreener></StockScreener> */}
        {/* <News></News> */}
        <RoutesComponent></RoutesComponent>
      </Context.Provider>
    </div>
  );
}

export default App;
