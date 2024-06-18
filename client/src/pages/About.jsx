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
    { id: 1, imageUrl: 'https://cdn.pixabay.com/photo/2016/11/19/14/56/backpack-1839705_1280.jpg' },
    { id: 2, imageUrl: 'https://cdn.pixabay.com/photo/2018/08/13/21/44/cranesbill-3604069_1280.jpg' },
    { id: 3, imageUrl: 'https://cdn.pixabay.com/photo/2020/05/08/15/12/cranesbill-5146131_1280.jpg' },
    { id: 4, imageUrl: 'https://cdn.pixabay.com/photo/2022/10/15/06/45/danube-river-7522608_960_720.jpg' },
    { id: 5, imageUrl: 'https://cdn.pixabay.com/photo/2016/06/06/23/49/parliament-1440679_960_720.jpg' },
    { id: 6, imageUrl: 'https://cdn.pixabay.com/photo/2018/05/20/22/44/architecture-3417022_1280.jpg' },
    { id: 7, imageUrl: 'https://cdn.pixabay.com/photo/2016/08/13/12/04/building-1590596_1280.jpg' },
    { id: 8, imageUrl: 'https://cdn.pixabay.com/photo/2020/09/23/14/38/woman-5596173_960_720.jpg' },
    { id: 9, imageUrl: 'https://cdn.pixabay.com/photo/2018/06/09/21/37/summer-thunder-storm-3465247_960_720.jpg' },
    { id: 10, imageUrl: 'https://cdn.pixabay.com/photo/2019/06/14/06/08/canyon-4272938_960_720.jpg' },
    { id: 11, imageUrl: 'https://cdn.pixabay.com/photo/2016/12/15/07/54/horseshoe-bend-1908283_960_720.jpg' },
    { id: 12, imageUrl: 'https://cdn.pixabay.com/photo/2016/11/22/19/25/man-1850181_960_720.jpg' },
    // Add more image objects as needed
  ];
  return (
    <>
    <Bio />
    {/* <Home2 /> */}
    <Music />
    <ImageGallery images={images} />
    <VideoGallery />
    <SocialEmbed />
    
  </>
    );
  }
export default About;