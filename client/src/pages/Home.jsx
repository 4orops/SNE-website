import React from "react";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import LatestRelease from "../components/LatestRelease/LatestRelease";
import NewsArticles from "../components/NewsArticle/NewsArticles";
import Hitsong2 from "../components/HitSong/Hitsong2";

function Home() {
  return (
    <>
      <HeroCarousel />
      <NewsArticles/>
      <LatestRelease />
      <Hitsong2 />
    </>
   );    
}
export default Home;
