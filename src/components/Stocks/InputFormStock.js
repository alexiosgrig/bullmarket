import "../../css/Styles.css";
import React, { useState } from "react";
import StockInfo from "./StockInfo";
const InputFormStock = () => {
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const [current, setCurrent] = useState("");
  const [stockCountry, setStockCountry] = useState("");

  const currentPrice = current;
  const getValue = (e) => {
    const a = e.target.value;
    setName(a);
    if (name.length > 4) {
      setErr("Enter less letters");
    }
    if (name.length < 4) {
      setErr("");
    }
    console.log(a);
  };

  async function fetchPrice() {
    const res = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${name}&token=c7eaef2ad3ifpe0p8dkg`
    );
    const data = await res.json();
    setCurrent(data);
  }
  async function fetchInfo() {
    const res = await fetch(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${name}&token=c7eaef2ad3ifpe0p8dkg`
    );
    const data = await res.json();
    console.log(data);
    setStockCountry(data);
  }
  const onSubmit = () => {
    fetchPrice();
    fetchInfo();
  };
  return (
    <>
      <div>
        <h6 style={{ color: "red" }}>{err}</h6>
        Enter a stock symbol :
        <input onChange={getValue} className="InputFormStock"></input>
        <input type="submit" onClick={onSubmit}></input>
      </div>
      <StockInfo
        price={currentPrice.c}
        country={stockCountry.country}
        industry={stockCountry.finnhubIndustry}
        currency={stockCountry.currency}
      ></StockInfo>
    </>
  );
};

export default InputFormStock;
