import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ selectedPath }) => {
  // Function to get image data based on selected path
  const getImageData = (pathId) => {
    switch (pathId) {
      case 'path1':
        return [
          { src: '/colombo.jpg', caption: 'Beautiful landscape' },
          { src: '/colombo2.jpg', caption: 'Colorful sunset' },
          { src: '/colombo3.jpg', caption: 'Snow-capped mountains' }
        ];
      case 'path2':
        return [
          { src: '/galle.jpg', caption: 'City skyline' },
          { src: '/galle1.jpg', caption: 'Tropical beach' },
          { src: '/galle2.jpg', caption: 'Forest trail' }
        ];
        case 'kandy':
          return [
            { src: '/galle.jpg', caption: 'City skyline' },
            { src: '/galle1.jpg', caption: 'Tropical beach' },
            { src: '/galle2.jpg', caption: 'Forest trail' }
          ];
          case 'Nuwaraeliya':
            return [
              { src: '/galle.jpg', caption: 'City skyline' },
              { src: '/galle1.jpg', caption: 'Tropical beach' },
              { src: '/galle2.jpg', caption: 'Forest trail' }
            ];
      default:
        return [
          { src: '/colombo.jpg', caption: 'Beautiful landscape' },
          { src: '/colombo2.jpg', caption: 'Colorful sunset' },
          { src: '/colombo3.jpg', caption: 'Snow-capped mountains' }
        ];
    }
  };

  // Get image data based on selected path
  const imageData = getImageData(selectedPath);
  const shouldShowImages = imageData.length > 0;
  return (
    <div className="carousel-container w-full h-full flex justify-center items-center">
    {/* Render carousel if there are images, otherwise show Colombo images */}
    {shouldShowImages ? (
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showThumbs={false}
      >
        {/* Map through image data to render each image slide */}
        {imageData.map((item, index) => (
          <div key={index} className="carousel-item mr-4">
            {/* Display image */}
            <img
              src={item.src}
              alt={`Image ${index + 1}`}
              style={{ height: '400px', objectFit: 'cover' }}
              className="carousel-image"
            />
            {/* Display image caption */}
            <p className="legend bg-none">{item.caption}</p>
          </div>
        ))}
      </Carousel>
    ) : (
      // Default to displaying Colombo images if no specific path matches or no images are found
      <div className="default-image-container">
        <img
          src="/colombo.jpg"
          alt="Default Colombo Image"
          style={{ height: '650px', objectFit: 'cover' }}
          className="default-image"
        />
        <p className="default-caption">Beautiful landscape</p>
      </div>
    )}
  </div>
  );
};

export default CarouselComponent;
