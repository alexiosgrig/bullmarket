// A Component that displays news about the market

import React from "react";
import { useState, useEffect } from "react";
import { finnhubApikey } from "../apikey/apikey";
import ClipLoader from "react-spinners/ClipLoader";

export default function News(props) {
  const [news, setNews] = useState({
    category: "",
    headline: "",
    image: "",
    source: "",
    summary: "",
    url: "",
  });
  const [spinner, setSpinner] = useState(true);
  async function fetchNews() {
    const res = await fetch(
      `https://finnhub.io/api/v1/news?category=general&token=${finnhubApikey}`
    );
    const data = await res.json();
    setSpinner(false);
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
      <div className="Financial">
        {spinner ? (
          <ClipLoader />
        ) : (
          <div>
            <div style={{ marginTop: "50px", marginLeft: "100px" }}>
              {" "}
              {news.headline.news1}
              <div>
                <a href={news.url.news1}></a>
                {news.source.news1}
              </div>
              <div style={{ marginTop: "10px", color: "gray" }}>
                <a href={news.url.news1}>{news.source.news1}</a>
              </div>
            </div>
            <div className="News">
              <div className="NewsBorder">
                <a href={news.url.news1}>
                  <img src={news.image.news1} width="500" height="366"></img>
                </a>
              </div>

              <div className="NewsBorderSide">
                <a href={news.url.news2}>
                  <img src={news.image.news2} width="100" height="100"></img>
                </a>
                <div style={{ textAlign: "center" }}>
                  {news.headline.news2 + " "}{" "}
                  <div style={{ marginTop: "10px", color: "gray" }}>
                    {" "}
                    <a href={news.url.news2}> {news.source.news2} </a>
                  </div>
                </div>
                <a href={news.image.news3}>
                  <img src={news.image.news3} width="100" height="100"></img>
                </a>
                <div style={{ textAlign: "center" }}>
                  {" "}
                  {news.headline.news2}
                  <div style={{ marginTop: "10px", color: "gray" }}>
                    {" "}
                    <a href={news.image.news3}>{news.source.news3}</a>
                  </div>
                </div>
                <a href={news.url.news4}>
                  <img
                    src={news.image.news4 + " "}
                    width="100"
                    height="100"
                    style={{ marginTop: "100x", color: "gray" }}
                  ></img>
                </a>
                <div style={{ textAlign: "center" }}>
                  {news.headline.news4 + " "}
                  <div style={{ marginTop: "10px", color: "gray" }}>
                    {" "}
                    <a href={news.url.news4}>{news.source.news4} </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
