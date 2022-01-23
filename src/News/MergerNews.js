import React, { useState, useEffect } from "react";

import { finnhubApikey } from "../apikey/apikey";
export const MergerNews = () => {
  const [news, setNews] = useState({
    headline: "",
    image: [],
    url: [],
  });

  async function fetchMergerNews() {
    const res = await fetch(
      `https://finnhub.io/api/v1/news?category=merger&token=${finnhubApikey}`
    );
    const data = await res.json();
    setNews({
      headline: data,
      image: 2,
      url: 3,
    });
    console.log(news.headline);
  }

  useEffect(() => {
    fetchMergerNews();
  }, []);

  return (
    <div className="Merger">
      {}
      {/* <img> </img> */}
      <h1> ddede</h1>
      <h1> ddede</h1>
      <h1> ddede</h1>
      <h1> ddede</h1>
    </div>
  );
};
