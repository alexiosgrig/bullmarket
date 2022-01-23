// A Component that displays news about the market

import React from "react";
import { useState, useEffect } from "react";
import { finnhubApikey } from "../apikey/apikey";

export default function News(props) {
  const [news, setNews] = useState({
    category: "",
    headline: "",
    image: "",
    source: "",
    summary: "",
    url: "",
  });
  async function fetchNews() {
    const res = await fetch(
      `https://finnhub.io/api/v1/news?category=general&token=${finnhubApikey}`
    );
    const data = await res.json();
    let news1, news2, news3, news4;
    [news1, news2, news3, news4] = [data[0], data[1], data[2], data[3]];

    setNews({
      category: {
        news1: news1.category,
        news2: news2.category,
        news3: news3.category,
        news4: news4.category,
      },
      headline: {
        news1: news1.headline,
        news2: news2.headline,
        news3: news3.headline,
        news4: news4.headline,
      },
      image: {
        news1: news1.image,
        news2: news2.image,
        news3: news3.image,
        news4: news4.image,
      },
      source: {
        news1: news1.source,
        news2: news2.source,
        news3: news3.source,
        news4: news4.source,
      },
      summary: {
        news1: news1.summary,
        news2: news2.summary,
        news3: news3.summary,
        news4: news4.summary,
      },
      url: {
        news1: news1.url,
        news2: news2.url,
        news3: news3.url,
        news4: news4.url,
      },
    });
  }
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        {" "}
        {news.headline.news1}
        <div> {news.source.news1}</div>
      </div>
      <div className="News">
        <div className="NewsBorder">
          <img src={news.image.news1} width="500" height="366" />
        </div>

        <div className="NewsBorderSide">
          <img src={news.image.news2} width="100" height="100"></img>
          <div style={{ textAlign: "center" }}>
            {news.headline.news2 + " "}{" "}
            <div style={{ marginTop: "10px", color: "gray" }}>
              {" "}
              {news.source.news2}
            </div>
          </div>
          <img src={news.image.news3} width="100" height="100"></img>
          <div style={{ textAlign: "center" }}>
            {" "}
            {news.headline.news2}
            <div style={{ marginTop: "10px", color: "gray" }}>
              {" "}
              {news.source.news3}
            </div>
          </div>
          <img
            src={news.image.news4 + " "}
            width="100"
            height="100"
            style={{ marginTop: "100x", color: "gray" }}
          ></img>
          <div style={{ textAlign: "center" }}>
            {news.headline.news4 + " "}
            <div style={{ marginTop: "10px", color: "gray" }}>
              {" "}
              {news.source.news4}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
