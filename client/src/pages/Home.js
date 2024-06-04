import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import LatestRelease from "../components/LatestRelease";
import NewsArticles from "../components/NewsArticles";
import Hitsong from "../components/Hitsong";

function Home() {
  return (
    <>
      <HeroCarousel />
      <NewsArticles/>
      <LatestRelease />
      <Hitsong />
    </>
   );    
}
export default Home;
