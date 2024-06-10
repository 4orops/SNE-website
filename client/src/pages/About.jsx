import React from "react";
import Bio from "../components/Bio/Bio";
import Home2 from "../components/Bio/Home2";
import Music from "../components/Music/Music";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import VideoGallery from "../components/VideoGallery/VideoGallery";
import SocialEmbed from "../components/SocialEmbed/SocialEmbed"

// import coverArt1 from '.../Assets/CoverArt1.png'
// import coverArt2 from '.../Assets/CoverArt2.png'
// import coverArt3 from '../Assets/CoverArt3.png'
  
function About() {
  const images = [
    { id: 1, imageUrl: '../Assets/CoverArt.png' },
    { id: 2, imageUrl: '/images/image2.jpg' },
    { id: 1, imageUrl: '/images/image1.jpg' },
    { id: 2, imageUrl: '/images/image2.jpg' },
    { id: 1, imageUrl: '/images/image1.jpg' },
    { id: 2, imageUrl: '/images/image2.jpg' },
    { id: 1, imageUrl: '/images/image1.jpg' },
    { id: 2, imageUrl: '/images/image2.jpg' },
    { id: 1, imageUrl: '/images/image1.jpg' },
    { id: 2, imageUrl: '/images/image2.jpg' },
    { id: 1, imageUrl: '/images/image1.jpg' },
    { id: 2, imageUrl: '/images/image2.jpg' },
    // Add more image objects as needed
  ];
  return (
    <>
    <Home2 />
    <Music />
    <ImageGallery images={images} />
    <VideoGallery />
    <SocialEmbed />
      {/* <Bio /> */}
  </>
    );
  }
export default About;