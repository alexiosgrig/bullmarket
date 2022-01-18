import { useState } from "react";
import "../../css/Styles.css";
import React from "react";
const TopTenStocks = (props) => {
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [exchange, setExchange] = useState("");
  const [logo, setLogo] = useState("");

  async function Stock() {
    const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${props.name}&token=c7eaef2ad3ifpe0p8dkg`;
    const res = await fetch(url);
    const data = await res.json();
    let { country, currency, exchange, logo } = data;
    console.log(logo);
    setCountry(country);
    setCurrency(currency);
    setExchange(exchange);
    setLogo(logo);

    console.log(country, currency, exchange);
  }

  Stock();
  return (
    <div className="Stocks">
      <h6>{props.name} </h6>
      <h6> Country : {country} </h6>
      <h6> Currency : {currency} </h6>
      <h6> Exchange : {exchange} </h6>
      <img src={logo} width="50px"></img>
    </div>
  );
};

export default TopTenStocks;
