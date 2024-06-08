import React from "react";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import LatestRelease from "../components/LatestRelease/LatestRelease";
import NewsArticles from "../components/NewsArticle/NewsArticles";
import Hitsong from "../components/HitSong/Hitsong";

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
