import NavBar from "../NavBar/NavBar";
import InputFormStock from "./InputFormStock";
import React from "react";
import Border from "../Borders/Border";
import Screener from "./Screener";
const StockScreener = () => {
  return (
    <>
      <Border>
        <InputFormStock></InputFormStock>
        <Border>
          <Screener></Screener>
        </Border>
      </Border>
    </>
  );
};

export default StockScreener;
