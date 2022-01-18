import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useState, useEffect } from "react";
import { Context } from "../Context/Context";
import { financialmodelingprepApikey } from "../apikey/apikey";
export default function ChartLine() {
  const [context, setContext] = useContext(Context);
  console.log(context);
  const [info, setInfo] = useState({});
  const [date, setDate] = useState("Week");
  async function fetchChartMonth() {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/historical-price-full/${context}?serietype=line&apikey=${financialmodelingprepApikey}`
    );
    const data = await res.json();
    const HistoricalData = data.historical;
    switch (date) {
      case "Week":
        setInfo({
          stockPrice: HistoricalData.slice(0, 8).map((price) => {
            return price.close;
          }),
          stockDate: HistoricalData.slice(0, 8).map((date) => {
            return date.date;
          }),
        });
        break;
      case "Month":
        setInfo({
          stockPrice: HistoricalData.slice(0, 31).map((price) => {
            return price.close;
          }),
          stockDate: HistoricalData.slice(0, 31).map((date) => {
            return date.date;
          }),
        });
        break;
      case "Year":
        setInfo({
          stockPrice: HistoricalData.slice(0, 366)
            .reverse()
            .map((price) => {
              return price.close;
            }),
          stockDate: HistoricalData.slice(0, 366)
            .reverse()
            .map((date) => {
              return date.date;
            }),
        });
        break;
    }
  }
  useEffect(() => {
    fetchChartMonth();
  }, [date, context]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };
  return (
    <div className="ChartLine">
      <select id="cars" name="cars" onChange={handleChange}>
        <option value="Week">Week</option>
        <option value="Month">Month</option>
        <option value="Year">Year</option>
      </select>
      <Line
        data={{
          labels: info.stockDate,
          datasets: [
            {
              label: `${context} Price:`,
              data: info.stockPrice,
              fill: true,
              borderColor: "rgb(75,192,192)",
              tension: 0.1,
            },
          ],
        }}
      ></Line>
    </div>
  );
}
