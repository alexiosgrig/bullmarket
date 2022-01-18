import React, { useContext, useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Context } from "../Context/Context";

export const RevenueEarning = () => {
  const [context, setContext] = useContext(Context);
  const [fetchData, setFetchData] = useState({
    revenue: "",
    date: "",
  });
  const [period, setPeriod] = useState("Quarter");

  async function fetchRevenueEarningYear() {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/income-statement/${context}?limit=120&apikey=39caf286d742842fbd4649b05b6eff0d`
    );
    const data = await res.json();
    setFetchData({
      revenue: data
        .slice(0, 5)
        .map((element) => element.revenue.toFixed(1) / 1000000)
        .reverse(),
      date: data
        .slice(0, 5)
        .map((element) => element.date.slice(0, 4))
        .reverse(),
    });
  }
  console.log(fetchData.eps, fetchData.revenue);

  useEffect(() => {
    fetchRevenueEarningYear();
  }, [context]);

  const options = {
    responsive: true,
  };
  const labels = fetchData.date;

  const data = {
    labels,
    datasets: [
      {
        label: `${context} Revenue to Millions`,
        data: fetchData.revenue,
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  return (
    <div className="Revenue">
      <Bar options={options} data={data} />
    </div>
  );
};
