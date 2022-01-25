import React, { useContext, useEffect, useState } from "react";
import { finnhubApikey } from "../apikey/apikey";
import { Context } from "../Context/Context";
import ClipLoader from "react-spinners/ClipLoader";
export const StockNews = () => {
  const [context, setContext] = useContext(Context);
  const [spinner, setSpinner] = useState(true);
  const [news, setNews] = useState({
    headline: "",
    image: "",
    source: "",
    url: "",
    summary: "",
  });
  async function fetchStockNews() {
    const res = await fetch(
      `https://finnhub.io/api/v1/company-news?symbol=${context}&from=2021-09-01&to=2021-09-09&token=${finnhubApikey}`
    );
    const data = await res.json();
    const [news1, news2, news3, news4] = [data[0], data[1], data[2], data[3]];
    setSpinner(false);
    setNews({
      headline: {
        headline1: news1.headline,
        headline2: news2.headline,
        headline3: news3.headline,
        headline4: news4.headline,
      },
      image: {
        image1: news1.image,
        image2: news2.image,
        image3: news3.image,
        image4: news4.image,
      },
      summary: {
        summary1: news1.summary,
        summary2: news2.summary,
        summary3: news3.summary,
        summary4: news4.summary,
      },
    });
  }
  useEffect(() => {
    fetchStockNews();
  }, [context]);
  return (
    <div className="Financial">
      {" "}
      {spinner ? (
        <ClipLoader />
      ) : (
        <div style={{ margin: "100px" }}>
          <div>
            <img src={news.image.image1} width="200" height="200"></img>
            <div> {news.headline.headline1}</div>
            <div> {news.summary.summary1}</div>
          </div>
          <div className="News"></div>
        </div>
      )}
    </div>
  );
};
