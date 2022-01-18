import "../css/Styles.css";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import TopTenStocks from "./Borders/TopTenStocks";
import Border from "./Borders/Border";
import TopTenCrypto from "./Borders/TopTenCrypto";
import Footer from "./Footer/Footer";
import React from "react";
import StockScreener from "./Stocks/StockScreener";
import { Route } from "react-router-dom";
function App() {
  const stocksArr = [
    "AAPL",
    "MSFT",
    "AMZN",
    "FB",
    "GOOGL",
    "TSLA",
    "NVDA",
    "BRK.B",
    "JPM",
  ];

  const cryptoArr = [];
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <StockScreener></StockScreener>

      {/* <Header></Header>
      <NavBar></NavBar>
      <h5> Top SP500 Companies </h5>
      <Border>
        {stocksArr.map((stock) => (
          <TopTenStocks name={stock}></TopTenStocks>
        ))}
      </Border>
      <h5> Top 10 Cryptocurrencies </h5>
      <Border>
        <TopTenCrypto></TopTenCrypto>
      </Border>
      <Footer></Footer> */}
    </>
  );
}

export default App;
