//Maybe i won't include this

import React from "react";
import Border from "../Border/Border";
import { useState, useEffect, useContext } from "react";
import "../css/App.css";
import { Context } from "../Context/Context";
import { finnhubApikey } from "../apikey/apikey";

export default function StockScreener() {
  const [context, setContext] = useContext(Context);
  const [stockInfo, setStockInfo] = useState({
    country: "",
    currency: "",
    exchange: "",
    ipo: "",
    marketCap: "",
    logo: "",
    industry: "",
  });
  useEffect(() => {
    fetchStockInfo();
  }, [context]);
  async function fetchStockInfo() {
    const res = await fetch(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${context}&token=${finnhubApikey}`
    );
    const data = await res.json();
    console.log(data.country);
    setStockInfo({
      country: data.country,
      currency: data.currency,
      exchange: data.exchange,
      industry: data.finnhubIndustry,
      ipo: data.ipo,
      logo: data.logo,
      marketCap: data.marketCapitalization,
    });
  }
  return (
    <Border nameClass="BorderScreener">
      <div className="Info">
        <p style={{ marginLeft: "100px" }}> Price Info: </p>
        <table className="stockTable">
          <tbody>
            <tr>
              <th> Country </th>
              <th> Currency </th>
              <th> Exchange </th>
              <th> Industry </th>
              <th> IPO </th>
              <th> Market Cap </th>
            </tr>
            <tr>
              <td> {stockInfo.country} </td>
              <td> {stockInfo.currency}</td>
              <td> {stockInfo.exchange}</td>
              <td> {stockInfo.industry}</td>
              <td> {stockInfo.ipo}</td>
              <td> {stockInfo.marketCap}</td>
            </tr>
          </tbody>
        </table>
        <img src={stockInfo.logo} className="logoStock"></img>
      </div>
    </Border>
  );
}
