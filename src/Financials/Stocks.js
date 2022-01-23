import React from "react";

import { Search } from "../Search/Search";
import { StocksNavBar } from "./StocksNavBar";

export const Stocks = () => {
  return (
    <>
      <Search></Search>
      <StocksNavBar></StocksNavBar>
    </>
  );
};
