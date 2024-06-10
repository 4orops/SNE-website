import React, { useRef, useState, useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-video.css';

const VideoGallery = () => {
  const lightGalleryRef = useRef(null);
  const containerRef = useRef(null);
  const [galleryContainer, setGalleryContainer] = useState(null);

  const videos = [
    { src: 'https://www.youtube.com/watch?v=7Kjz81E9eK0', subHtml: '<h4>Peck Pocketed by Kevin Herron</h4>' },
    { src: 'https://www.youtube.com/watch?v=ttLu7ygaN6I', subHtml: '<h4>Forest Path - Unreal Engine 5 Cinematic</h4>' },
    // Add more video objects as needed
  ];

  useEffect(() => {
    if (containerRef.current) {
      setGalleryContainer(containerRef.current);
    }
  }, []);

  return (
    <>
      <div ref={containerRef} />
      <LightGallery
        container={galleryContainer}
        plugins={[lgThumbnail, lgVideo]}
        closable={false}
        showMaximizeIcon={true}
        slideDelay={400}
        thumbWidth={130}
        thumbHeight={'100px'}
        thumbMargin={6}
        appendSubHtmlTo={'.lg-item'}
        dynamic={true}
        dynamicEl={videos}
      />
    </>
  );
};

export default VideoGallery;
