import React, { useContext, useState, useEffect } from "react";
import { finnhubApikey } from "../apikey/apikey";
import { Context } from "../Context/Context";
export const BasicInfo = () => {
  const [context] = useContext(Context);
  const [price, setPrice] = useState({
    open: "",
    current: "",
    change: "",
    high: "",
    low: "",
    previousClose: "",
  });
  async function fetchOcPrice() {
    const res = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${context}&token=${finnhubApikey}`
    );
    const data = await res.json();
    setPrice({
      open: data.o.toFixed(2),
      current: data.c.toFixed(2),
      change: data.dp.toFixed(2),
      high: data.h.toFixed(2),
      low: data.l.toFixed(2),
      previousClose: data.pc.toFixed(2),
    });
  }
  useEffect(() => {
    fetchOcPrice();
  }, []);
  console.log(price.open);
  return (
    <div>
      <ul>
        <li> Open price : {price.open}</li>
        <li> Current price : {price.current}</li>
        <li> Percent change : {price.change + " " + "%"}</li>
        <li> Day highest price :{price.high}</li>
        <li> Day lowest price : {price.low}</li>
        <li> Previous close price : {price.previousClose}</li>
      </ul>
    </div>
  );
};
