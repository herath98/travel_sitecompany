import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { SlArrowRightCircle ,SlArrowLeftCircle} from "react-icons/sl"; // Importing icons from react-icons
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './CarouselGallery.module.css'; 

const CarouselGallery = ({ images }) => {
  const customArrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    outline: 'none',
  };

  return (
    <Carousel
      className="bg-white"
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      showThumbs={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button type="button" onClick={onClickHandler} title={label} style={{ ...customArrowStyles, left: 0 }}>
            <SlArrowLeftCircle size={30} color="#000" /> {/* Use the left arrow icon */}
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button type="button" onClick={onClickHandler} title={label} style={{ ...customArrowStyles, right: 0 }}>
            <SlArrowRightCircle size={30} color="#000" /> {/* Use the right arrow icon */}
          </button>
        )
      }
    >
      {images.map((image, index) => (
        <div className='justify-center bg-white px-10 ' key={index}>
          <div className='text-black flex justify-center w-1/12'>
            <img style={{ width: '100px', height: '100px',borderRadius: '9999px' }} src={image.url} className={styles.images} alt={image.caption} />
          </div>
          <div className='flex justify-center pb-10'>
            <h2 className={styles.caption}>{image.caption}</h2>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselGallery;
