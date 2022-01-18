import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
export default function News() {
  const [news, setNews] = useState({
    category: "",
    headline: "",
    img: "",
    source: "",
    summary: "",
    url: "",
  });
  async function fetchNews() {
    const res = await fetch(
      "https://finnhub.io/api/v1/news?category=crypto&token=c7eaef2ad3ifpe0p8dkg"
    );
    const data = await res.json();
    setNews({
      category: data[0].category,
      headline: data[0].headline,
      img: data[0].image,
      source: data[0].source,
      summary: data[0].summary,
      url: data[0].url,
    });
    console.log(news.url);
  }
  useEffect(() => {
    fetchNews();
  }, []);
  //   fetchNews();
  return (
    <div>
      <NavBar></NavBar>
      <div className="NewsBorder">
        <h1> Category : {news.category.toUpperCase()}</h1>
        <h3> Headline : {news.headline}</h3>
        <p> {news.summary}</p>
        <h6> Source from: {news.source}</h6>
        <a href={news.url}>
          <img src={news.img} width="500px"></img>
        </a>
      </div>
    </div>
  );
}
