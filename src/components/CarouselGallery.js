// components/CarouselGallery.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const CarouselGallery = ({ images }) => {
  return (
    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000} showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={image.alt} />
          <p className="legend">{image.caption}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselGallery;
