import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import Home2 from "../components/Home2";
import LatestRelease from "../components/LatestRelease";
import NewsArticles  from "../components/NewsArticles";

function Home() {
  return (
    <>
      <HeroCarousel />
      <Home2 />
      <LatestRelease />
      <NewsArticles />
    </>
   );    
}
export default Home;
