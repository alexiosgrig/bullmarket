import React, { useContext, useState, useEffect } from "react";
// import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Context } from "../Context/Context";
import { financialmodelingprepApikey } from "../apikey/apikey";

//Imports Hooks, Bar Chart, Context and API key
export const RevenueEarning = () => {
  const [context, setContext] = useContext(Context);
  const [fetchData, setFetchData] = useState({
    revenue: "",
    date: "",
  });
  async function fetchRevenueEarningYear() {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/income-statement/${context}?limit=120&apikey=${financialmodelingprepApikey}`
    );
    const data = await res.json();
    //fetch data from financial modeling API
    //
    setFetchData({
      revenue: data
        .slice(0, 4)
        .map((element) => element.revenue.toFixed(1) / 1000000)
        .reverse(),
      date: data
        .slice(0, 4)
        .map((element) => element.date.slice(0, 4))
        .reverse(),
    });
    // Sets the state for date and revenue. Date is always for 4 years and revenue is to Millions
    //
  }
  useEffect(() => {
    fetchRevenueEarningYear();
  }, [context]);
  // Fetch only if the context change

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
    // Bar Chart
    <div className="Revenue">
      <Bar options={options} data={data} />
    </div>
  );
};
