import React, { useContext, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Context } from "../Context/Context";
import { financialmodelingprepApikey } from "../apikey/apikey";
import * as zoom from "chartjs-plugin-zoom";
import zoomPlugin from "chartjs-plugin-zoom";
import hammer from "hammerjs";
import { BasicInfo } from "../Financials/BasicInfo";
import ClipLoader from "react-spinners/ClipLoader";

Chart.register(zoomPlugin);
// import { zoom } from "chartjs-plugin-zoom";
// Importing Hooks, Context, API key, and Chart
//
//

export default function ChartLine() {
  const [context, setContext] = useContext(Context);
  const [spinner, setSpinner] = useState(true);
  const [info, setInfo] = useState({});
  const [date, setDate] = useState("Week");
  async function fetchChartMonth() {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/historical-price-full/${context}?serietype=line&apikey=${financialmodelingprepApikey}`
    );
    const data = await res.json();
    // fetching some data from financial modeling API
    const HistoricalData = data.historical;
    switch (date) {
      case "Week":
        setInfo({
          stockPrice: HistoricalData.slice(0, 8)
            .reverse()
            .map((price) => {
              return price.close;
            }),
          stockDate: HistoricalData.slice(0, 8)
            .reverse()
            .map((date) => {
              return date.date;
            }),
        });
        break;
      case "Month":
        setInfo({
          stockPrice: HistoricalData.slice(0, 31)
            .reverse()
            .map((price) => {
              return price.close;
            }),
          stockDate: HistoricalData.slice(0, 31)
            .reverse()
            .map((date) => {
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
      case "Max":
        setInfo({
          stockPrice: HistoricalData.reverse().map((price) => {
            return price.close;
          }),
          stockDate: HistoricalData.map((date) => {
            return date.date;
          }),
        });
    }
    setSpinner(false);
    // Checks if the user select to see a Line Chart for a year/month/week and displays the asking info
    //
  }

  useEffect(() => {
    fetchChartMonth();
  }, [date, context]);
  // using useEffect to fetch the API only when date or context changes

  const handleChange = (e) => {
    setDate(e.target.value);
  };
  // handleChange function sets the date according to what the user selects
  return (
    <div className="Financial">
      {spinner ? (
        <ClipLoader />
      ) : (
        <div>
          <select
            id="cars"
            name="cars"
            onChange={handleChange}
            style={{ marginLeft: "100px" }}
          >
            <option value="Week">Week</option>
            <option value="Month">Month</option>
            <option value="Year">Year</option>
            <option value="Max">Max</option>
          </select>
          <div className="ChartLine">
            <Line // Line Chart
              data={{
                labels: info.stockDate,
                datasets: [
                  {
                    label: `${context} Price:`, // Displays the the value the user Typed
                    data: info.stockPrice, // Displays the stock price's
                    fill: true,
                    borderColor: "rgb(75,192,192)",
                    tension: 0.1,
                  },
                ],
              }}
              options={{
                plugins: {
                  zoom: {
                    zoom: {
                      wheel: {
                        enabled: true, // SET SCROOL ZOOM TO TRUE
                      },
                      mode: "y",
                      speed: 0.2,
                      modifierKey: "shift",
                    },
                    pan: {
                      enabled: true,
                      mode: "xy",
                      threshold: 1,
                    },
                    pinch: {
                      enabled: true,
                    },
                    mode: "xy",
                  },
                },
              }}
            ></Line>
            <BasicInfo></BasicInfo>
          </div>
        </div>
      )}
    </div>
    //selection field
  );
}
