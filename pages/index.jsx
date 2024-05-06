import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import DestinationCard from '../src/components/DestinationCard';
import { destinations } from '../data/destinations';
import CarouselGallery from '../src/components/CarouselGallery';
import { Button, Dropdown } from 'flowbite-react';
import Footer from './Footer/Footer';
import MySVGComponent from '@/src/components/MySVGComponent';
import ImageCarousel from '@/src/components/ImageCarousel.js';




const options = [
  { label: 'Item 1', url: '#' },
  { label: 'Item 2', url: '#' },
  { label: 'Item 3', url: '#' },
];

const HomePage = () => {
  const [selectedPath, setSelectedPath] = useState(null);

  const handlePathClick = (pathId) => {
    setSelectedPath(pathId);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth;

      let scrollThreshold;

      // Define different scroll thresholds based on screen width
      if (screenWidth < 325) {
        // For screens less than 325px (e.g., very small mobile devices)
        scrollThreshold = 50;
      } else if (screenWidth < 425) {
        // For screens between 325px and 425px (e.g., small mobile devices)
        scrollThreshold = 100;
      } else if (screenWidth < 768) {
        // For screens between 425px and 768px (e.g., medium-sized mobile devices)
        scrollThreshold = 150;
      } else if (screenWidth < 1024) {
        // For screens 768px and above (e.g., tablets, desktops)
        scrollThreshold = 300;
      }
      else {
        scrollThreshold = 700;
      }

      if (scrollPosition > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once after mounting



  const [fontSize, setFontSize] = useState('70px');
  const [isMobile, setIsMobile] = useState('20px');

  useEffect(() => {


    const handleResize = () => {
      if (window.innerWidth >= 2560) {
        setFontSize('190px');
        setIsMobile('40px');
      }
      else if (window.innerWidth >= 1024) {
        setFontSize('120px');
        setIsMobile('30px');
      }
      else if (window.innerWidth >= 768) {
        setFontSize('100px');
        setIsMobile('25px');
      }
      else if (window.innerWidth >= 425) {
        setFontSize('50px');
        setIsMobile('15px');
      }

      else {
        setFontSize('20px');
        setIsMobile('12px');
      }
    };


    window.addEventListener('resize', handleResize);


    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // Assuming you have some images data
  const images = [
    { url: 'colombo.jpg', alt: 'Image 1', caption: 'Tabroscape provided an amazing tour experience! The guides wereknowledgeable and the locations were breathtaking', caption2: 'john doe', caption3: 'tour guide,Tabroscape' },
    { url: 'bg.jpg', alt: 'Image 2', caption: 'Tabroscape provided an amazing tour experience! The guides were knowledgeable and the locations were breathtaking', caption2: 'john doe', caption3: 'tour guide,Tabroscape' },
    { url: 'bg1.jpg', alt: 'Image 3', caption: 'Tabroscape provided an amazing tour experience! The guides were knowledgeable and the locations were breathtaking', caption2: 'john doe', caption3: 'tour guide,Tabroscape' },
    // Add more images as needed
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div >

      <div style={{
        backgroundColor: 'white',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        imageOrientation: ' from-image',
        fontFamily: 'bagea',
      }} className='section'>

        <div
          className="navbar bg-none md:pb-10 text-black scroll-my-28:text-black z-50 fixed w-full lg:px-20"
          style={{

            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(30.2px)',
            webkitBackdropFilter: 'blur(14.2px)',
            color: isScrolled ? 'black' : 'white', // Change text color based on scroll
          }}
        >


          <div className='navbar-center justify-center mx-auto'>
            <div className='justify-center'><img src="/logo.png" alt="" style={{ height: '80px', width: '80px' }} /></div>
          </div>




        </div>
        <nav style={{ color: isScrolled ? 'black' : 'white', }} className="bg-none fixed w-full z-50 mt-20    md:flex justify-center text-center lg:px-20">
          <div className="max-w-7xl mx-auto px-4 py-2 gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <Link href="/">
                  <span style={{ color: isScrolled ? 'black' : 'white', }} className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Homepage</span>
                </Link>
                <Link href="/about">
                  <span style={{ color: isScrolled ? 'black' : 'white', }} className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">About Us</span>
                </Link>
                <Link href="/Destinations">
                  <span style={{ color: isScrolled ? 'black' : 'white', }} className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Destinations</span>
                </Link>
                <Link href="/TourPackages">
                  <span style={{ color: isScrolled ? 'black' : 'white', }} className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Tour Packages</span>
                </Link>
                <Link href="/ContactUs">
                  <span style={{ color: isScrolled ? 'black' : 'white', }} className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Contact Us</span>
                </Link>
                <Link href="/GalleryPage">
                  <span style={{ color: isScrolled ? 'black' : 'white', }} className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Gallery</span>
                </Link>
              </div>
              {/* Responsive Menu */}
              <div className="hidden">
                <button className="text-white" onClick={toggleMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Menu Details */}
            {isMenuOpen && (
              <div className="md:hidden">
                <div className="flex flex-col mt-2">
                  <Link href="/">
                    <span className="text-gray-300 ml-4 hover:text-white cursor-pointer">Home</span>
                  </Link>
                  <Link href="/about">
                    <span className="text-gray-300 ml-4 hover:text-white cursor-pointer">About Us</span>
                  </Link>
                  <Link href="/Destinations">
                    <span className="text-gray-300 ml-4 hover:text-white cursor-pointer">Destinations</span>
                  </Link>
                  <Link href="/TourPackages">
                    <span className="text-gray-300 ml-4 hover:text-white cursor-pointer">Tour Packages</span>
                  </Link>
                  <Link href="/ContactUs">
                    <span className="text-gray-300 ml-4 hover:text-white cursor-pointer">Contact Us</span>
                  </Link>
                  <Link href="/GalleryPage">
                    <span className="text-gray-300 ml-4 hover:text-white cursor-pointer">Gallery</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>



        <div className="relative">
          {/* Video player */}
          <video className="w-full h-auto" style={{ objectFit: 'cover' }} muted autoPlay loop>
            <source autoPlay loop src="slV.mp4" type="video/mp4" />

            Your browser does not support the video tag.
          </video>


          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 ">

            <div className="text-center text-white">

              <h1 style={{ fontSize: fontSize }} className="text-5xl lg:text-9xl font-bold mb-4">Taproscapes</h1>
              <p style={{ fontSize: isMobile }} className="text-lg">Discover the beauty of Sri Lanka with us!</p>
            </div>
          </div>
        </div>


        <div className='bg-white py-20 grid grid-cols-1 md:grid-cols-2 justify-start text-left lg:px-40'>
          <div className='container grid col-span-1 md:col-span-1 m-auto lg:py-5 '>
            <h1 style={{ lineHeight: '1.1' }} className='text-3xl lg:text-5xl text-black  font-bold '>Discover the beauty of Sri Lanka with us</h1>
            <p className='text-black py-2 '>Experience the wonder of Sri lankas breathitaking destination and create memories that will latas a lifetime </p>
            <div className='flex justify-start text-left lg:px-10 py-2  gap-2'>
              <Button className='bg-[#082b49]'>Book</Button>
              <Button className='bg-none text-black border-spacing-0'>Explore</Button>
            </div>
          </div>
          <div className=' m-2 grid col-span-1 md:col-span-1 pt-5'>
            <img className='rounded-3xl' src='./colombo.jpg' alt="" />
          </div>

        </div>
        <div className='bg-white grid pb-20 grid-cols-1 md:grid-cols-2 justify-start text-start lg:px-40'>
          <div className='container grid col-span-1 md:col-span-1 m-auto lg:py-5 '>
            <h1 style={{ lineHeight: '1.2' }} className='text-3xl lg:text-5xl text-black font-bold '> Unforgettable Cultural Journeys</h1>
            <p className='text-black py-2 '>Immerse yourself in the wonders of Sri Lanka with Tabroscape. Our tour agency offers a variety of unique experiences, including thrilling wildlife tours, enriching cultural trips, and relaxing beach vacations. Whether you are seeking adventure, history, or relaxation, we have the perfect package for you. Start planning your dream vacation today! </p>

          </div>
          <div className=' m-2 grid col-span-1 md:col-span-1'>
            <img className='rounded-3xl' src='./colombo.jpg' alt="" />
          </div>

        </div>
        <div className='bg-white py-5 pb-20 justify-start text-start lg:px-10 xl:px-40'>
          <div >
            <div className='mx-auto w-2/3 text-center pb-20  md:text-3xl lg:text-5xl  text-xl text-black font-extrabold'>Explore the Beauty of Sri Lanka with Our Guided Tours</div>
          </div>
          <div className='bg-white grid pb-5 grid-cols-1 gap-4 md:grid-cols-2'>
            <div className=' grid col-span-1 md:col-span-1 '>
              <h1 className='text-xl text-start lg:text-3xl text-black font-bold  '>Book Your Ideal Accommodation
                for a Memorable Stay</h1>
              <p className='text-black text-start py-2 '>We offer a variety of services including hotel bookings, guided tours, and transportation facilities.  </p>

              <button className="text-black flex justify-start">
                Learn More &gt;&gt;
              </button>


            </div>
            <div className='grid col-span-1 md:col-span-1 m-auto '>
              <h1 className='text-xl text-start lg:text-3xl text-black font-bold '>Book Your Ideal Accommodation
                for a Memorable Stay</h1>
              <p className='text-black text-start py-2 '>We offer a variety of services including hotel bookings, guided tours, and transportation facilities.  </p>

              <button className='text-black text-start justify-start flex '> Learn More &gt;&gt;</button>

            </div>
            {/* <div className=' grid col-span-1 md:col-span-1 m-auto '>
              <h1 className='text-xl text-start lg:text-3xl text-black font-bold'>Book Your Ideal Accommodation
                for a Memorable Stay</h1>
              <p className='text-black text-start py-2 '>We offer a variety of services including hotel bookings, guided tours, and transportation facilities.  </p>

              <button className='text-black text-start justify-start flex '> Learn More &gt;&gt; </button>

            </div> */}

          </div>
        </div>

        <div className=' grid grid-cols-1 md:grid-cols-2 m-auto px-5 pb-10 bg-white gap-5 justify-start text-start lg:px-40'>
          <div className='grid col-span-1 '>
            <div className='flex justify-start text-start text-2xl lg:text-3xl  font-extrabold text-black'>
              <h1 className='text-start justify-start'>Discover the Beauty of Sri Lanka with Tabroscapes Exciting Tour Packages</h1>
            </div>
          </div>
          <div className='grid col-span-1  bg-white text-black'>
            <p>Experience the wonders of Sri Lankas tourism industry with Tabroscape. With our wide range of tour packages and exceptional services, we ensure an unforgettable journey.</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-10'>
              <div className='grid col-span-1'>
                <h1 className='text-4xl font-extrabold'>50% Increase</h1>
                <p>in Tourist Arrivals to Sri Lanka in the Past</p>
              </div>
              <div className='grid col-span-1'>
                <h1 className='text-4xl font-extrabold'>50% Increase</h1>
                <p>in Tabroscapes Customer Base in the Last Year
                  Year</p>
              </div>

            </div>
          </div>
        </div>

        <div className="page-container lg:px-40 grid grid-cols-1 lg:grid-cols-2">
          <div className="svg-container">
            <MySVGComponent handlePathClick={handlePathClick} />
          </div>
          <div className="carousel-container">
            <ImageCarousel  selectedPath={selectedPath} />
          </div>
        </div>


        <h1 className="text-3xl font-bold mb-8 mt-5 lg:px-40">All Destinations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 lg:px-40">
          {destinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2  gap-8 bg-white lg:px-40'>
          <div className='grid grid-cols-1 py-10 px-5'>
            <div className="lg:text-start">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Establishing Industry Authority Through Awards and Recognitions
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Tabroscape is proud to have received numerous awards and recognitions for our exceptional services.
              </p>
            </div>
            <div className="mt-8 flex justify-start">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Learn More
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-start px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Book Now
                </a>
              </div>
            </div>

          </div>
          <div className='grid grid-cols-1 py-10 px-5'>
            <div className='grid grid-cols-2 px-10 w-full'>
              <div className='grid col-span-1'>
                <img src="/webflow.svg" alt="Webflow" className="h-6 w-6" />
              </div>
              <div className='grid col-span-1'>
                <img src="/webflow.svg" alt="Webflow" className="h-6 w-6" />

              </div>
              <div className='grid col-span-1'>
                <img src="/webflow.svg" alt="Webflow" className="h-6 w-6" />

              </div>
              <div className='grid col-span-1'>
                <img src="/webflow.svg" alt="Webflow" className="h-6 w-6" />

              </div>

            </div>

          </div>
        </div>

        <hr className='pb-5'/>

        <Footer />




      </div>
    </div>

  )
}
export default HomePage;