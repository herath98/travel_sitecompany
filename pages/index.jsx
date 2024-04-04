import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import DestinationCard from '../src/components/DestinationCard';
import { destinations } from '../data/destinations';
import CarouselGallery from '../src/components/CarouselGallery';
import MapContainer from '../src/components/Map';
import { Button, Dropdown } from 'flowbite-react';
import Testimonial from '../src/components/Testimonial';



const options = [
  { label: 'Item 1', url: '#' },
  { label: 'Item 2', url: '#' },
  { label: 'Item 3', url: '#' },
];

const HomePage = () => {

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
        setFontSize('40px');
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
    { url: 'colombo.jpg', alt: 'Image 1', caption: 'Caption 1' },
    { url: 'bg.jpg', alt: 'Image 2', caption: 'Caption 2' },
    { url: 'bg1.jpg', alt: 'Image 3', caption: 'Caption 3' },
    // Add more images as needed
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>

      <div style={{
        backgroundImage: `url(/bg2.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        imageOrientation: ' from-image',
      }} className='section'>

        <div className="navbar bg-white text-black">
          <div className="navbar-start">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <Button style={{ backgroundColor: 'none', border: 'none', color: 'black' }}
                  className="  rounded focus:outline-none focus:bg-blue-600">
                  <li><a className="">Item 1</a></li></Button>
                <li className="relative">
                  <Dropdown style={{ backgroundColor: 'none', border: 'none', color: 'black' }} label="Dropdown  button" dismissOnClick={false}>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Item>Sign out</Dropdown.Item>
                  </Dropdown>
                </li>
                <Button style={{ backgroundColor: 'none', border: 'none', color: 'black' }}
                  className="  rounded focus:outline-none focus:bg-blue-600">
                  <li><a className="">Item 3</a></li></Button>
              </ul>
            </div>

            <div style={{ backgroundColor: 'none', border: 'none', color: 'black' }} className="dropdown lg:hidden">
              <div tabIndex={0} role="button" className="btn  btn-ghost">
                <div className='flex justify-start text-4xl md:text-6xl  text-black'>≡</div>



              </div>
              <ul style={{ backgroundColor: 'none', border: 'none', color: 'black' }} tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-gray-800 rounded-lg w-52">
                <Button> <li><a className="text-white">Item 1</a></li></Button>
                <li>
                  <a className="text-white">Parent</a>
                  <ul className="p-2">
                    <li><a className="text-white">Submenu 1</a></li>
                    <li><a className="text-white">Submenu 2</a></li>
                  </ul>
                </li>
                <li><a className="text-white">Item 3</a></li>
              </ul>
            </div>

          </div>

          <div className='navbar-center justify-between'>
            <div className='justify-center'>LOGO</div>
          </div>

          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>


        <div className="relative">
          {/* Video player */}
          <video className="w-full h-auto" style={{ objectFit: 'cover' }} muted autoPlay loop>
            <source autoPlay loop src="slV.mp4" type="video/mp4" />

            Your browser does not support the video tag.
          </video>


          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">

            <div className="text-center text-white">

              <h1 style={{ fontSize: fontSize }} className="text-5xl lg:text-9xl font-bold mb-4">Taproscapes</h1>
              <p style={{ fontSize: isMobile }} className="text-lg">Discover the beauty of Sri Lanka with us!</p>
            </div>
          </div>
        </div>
        <nav style={{ backgroundColor: '#0097f1' }} className="bg-gray-800  md:flex justify-center text-center">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link href="/">
                  <span className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Homepage</span>
                </Link>
                <Link href="/about">
                  <span className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">About Us</span>
                </Link>
                <Link href="/Destinations">
                  <span className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Destinations</span>
                </Link>
                <Link href="/TourPackages">
                  <span className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Tour Packages</span>
                </Link>
                <Link href="/ContactUs">
                  <span className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Contact Us</span>
                </Link>
                <Link href="/GalleryPage">
                  <span className="text-gray-300 ml-4 hover:text-white cursor-pointer hidden md:inline-block">Gallery</span>
                </Link>
              </div>
              {/* Responsive Menu */}
              <div className="md:hidden">
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


        <div className='bg-white pb-5 grid grid-cols-1 md:grid-cols-2'>
          <div className='container grid col-span-1 md:col-span-1 m-auto lg:py-5 lg:px-5'>
            <h1 className='text-3xl lg:text-5xl text-black font-bold p-5'>Discover the beauty of Sri Lanka with us</h1>
            <p className='text-black py-2 px-5'>Experience the wonder of Sri lanka`s breathitaking destination and create memories that will latas a lifetime </p>
            <div className='flex py-2 px-5 gap-2'>
              <Button className='bg-black'>Book</Button>
              <Button className='bg-none text-black border-spacing-0'>Explore</Button>
            </div>
          </div>
          <div className=' m-2 grid col-span-1 md:col-span-1'>
            <img src='./colombo.jpg' alt="" />
          </div>

        </div>
        <div className='bg-white grid pb-5 grid-cols-1 md:grid-cols-2'>
          <div className='container grid col-span-1 md:col-span-1 m-auto lg:py-5 lg:px-5'>
            <h1 className='text-3xl lg:text-5xl text-black font-bold p-5'>Discover Unforgettable Wildlife Encounters, Cultural Journeys, and Beach Escapes</h1>
            <p className='text-black py-2 px-5'>Immerse yourself in the wonders of Sri Lanka with Tabroscape. Our tour agency offers a variety of unique experiences, including thrilling wildlife tours, enriching cultural trips, and relaxing beach vacations. Whether you're seeking adventure, history, or relaxation, we have the perfect package for you. Start planning your dream vacation today! </p>

          </div>
          <div className=' m-2 grid col-span-1 md:col-span-1'>
            <img src='./colombo.jpg' alt="" />
          </div>

        </div>
        <div className='bg-white py-5'>
          <div >
          <div className='mx-auto w-2/3 mb-5 text-center  md:text-3xl lg:text-5xl px-2 text-xl text-black font-extrabold'>Explore the Beauty of Sri Lanka with Our Guided Tours</div>
          </div>
          <div className='bg-white grid pb-5 grid-cols-1 md:grid-cols-3'>
            <div className=' grid col-span-1 md:col-span-1 m-auto'>
              <h1 className='text-xl text-center lg:text-3xl text-black font-bold px-2 py-5 lg:p-5'>Book Your Ideal Accommodation
                for a Memorable Stay</h1>
              <p className='text-black text-center py-2 px-2'>We offer a variety of services including hotel bookings, guided tours, and transportation facilities.  </p>

              <Button className='text-black mx-auto   w-1/2 '>Learn More </Button>

            </div>
            <div className='grid col-span-1 md:col-span-1 m-auto '>
              <h1 className='text-xl text-center lg:text-3xl text-black font-bold p-5'>Book Your Ideal Accommodation
                for a Memorable Stay</h1>
              <p className='text-black text-center py-2 px-5'>We offer a variety of services including hotel bookings, guided tours, and transportation facilities.  </p>

              <Button className='text-black mx-auto   w-1/2 '>Learn More </Button>

            </div>
            <div className=' grid col-span-1 md:col-span-1 m-auto '>
              <h1 className='text-xl text-center lg:text-3xl text-black font-bold p-5'>Book Your Ideal Accommodation
                for a Memorable Stay</h1>
              <p className='text-black text-center py-2 px-5'>We offer a variety of services including hotel bookings, guided tours, and transportation facilities.  </p>

              <Button className='text-black mx-auto   w-1/2 '>Learn More </Button>

            </div>

          </div>
        </div>
        {/* <div className="container mx-auto px-4 py-16">
          <Testimonial
            name="John Doe"
            quote="Tabroscape provided an amazing tour experience! The guides were knowledgeable and the locations were breathtaking."
            title="Tour Guide, Tabroscape"
          />
              <Testimonial
            name="John Doe"
            quote="Tabroscape provided an amazing tour experience! The guides were knowledgeable and the locations were breathtaking."
            title="Tour Guide, Tabroscape"
          />
              <Testimonial
            name="John Doe"
            quote="Tabroscape provided an amazing tour experience! The guides were knowledgeable and the locations were breathtaking."
            title="Tour Guide, Tabroscape"
          />
        </div> */}


        
    


        <MapContainer />



        <div className='card'>
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold my-8">Carousel Gallery</h1>
            <CarouselGallery images={images} />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-8 mt-5">All Destinations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {destinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <footer className="bg-slate-800">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com/" className="flex items-center">
                  <img src="/t1.png" className="h-8 me-3" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Taproscapes</span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                    </li>
                    <li>
                      <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                    </li>
                    <li>
                      <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span className="sr-only">Discord community</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">

                  <span className="sr-only">GitHub account</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Dribbble account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>

  )
}
export default HomePage;