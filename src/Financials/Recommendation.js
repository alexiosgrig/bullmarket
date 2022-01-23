import React, { useState, useEffect, useContext } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Context } from "../Context/Context";
import { finnhubApikey } from "../apikey/apikey";

export const Recommendation = () => {
  const [context] = useContext(Context);
  const [dataRecommend, setDataRecommend] = useState({
    buy: "",
    hold: "",
    strongBuy: "",
    strongSell: "",
    date: "",
  });
  async function fetchRecommendations() {
    const res = await fetch(
      `https://finnhub.io/api/v1/stock/recommendation?symbol=${context}&token=${finnhubApikey}`
    );
    const data = await res.json();
    setDataRecommend({
      buy: data
        .map((data) => {
          return data.buy;
        })
        .reverse(),
      hold: data
        .map((data) => {
          return data.hold;
        })
        .reverse(),
      strongBuy: data
        .map((data) => {
          return data.strongBuy;
        })
        .reverse(),
      strongSell: data
        .map((data) => {
          return data.strongSell;
        })
        .reverse(),
      date: data
        .map((data) => {
          return data.period;
        })
        .reverse(),
    });
  }
  useEffect(() => fetchRecommendations(), [context]);
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = dataRecommend.date;
  const data = {
    labels,
    datasets: [
      {
        label: "Strong Sell",
        data: dataRecommend.strongSell,
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Hold",
        data: dataRecommend.hold,
        backgroundColor: "rgb(255, 255, 102)",
      },
      {
        label: "Buy",
        data: dataRecommend.buy,
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Strong Buy",
        data: dataRecommend.strongBuy,
        backgroundColor: "rgb(0, 255, 0)",
      },
    ],
  };
  return (
    <div>
      <Bar options={options} data={data}></Bar>
    </div>
  );
};
