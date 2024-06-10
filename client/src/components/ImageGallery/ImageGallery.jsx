// ImageGallery.js
import React from 'react';
import './ImageGallery.css'; 


const ImageGallery = ({ images }) => {
    return (
      <div className="gallery-container">
        {images.map((im) => (
          <img
            key={im.id}
            src={im.imageUrl}
            alt={`Image ${im.id}`}
            className="gallery-image"
          />
        ))}
      </div>
    );
  };
  
  export default ImageGallery;
  