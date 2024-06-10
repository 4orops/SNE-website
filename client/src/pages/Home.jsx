import React from "react";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import LatestRelease from "../components/LatestRelease/LatestRelease";
import NewsArticles from "../components/NewsArticle/NewsArticles";
import Hitsong2 from "../components/HitSong/Hitsong2";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import MerchOffers from "../components/MerchOffers/MerchOffers";

function Home() {
  return (
    <>
      <HeroCarousel />
      <NewsArticles/>
      <LatestRelease />
      <MerchOffers />
      <Hitsong2 />
      <NewsLetter/>
    </>
   );    
}
export default Home;
