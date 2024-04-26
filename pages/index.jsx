import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import DestinationCard from '../src/components/DestinationCard';
import { destinations } from '../data/destinations';
import CarouselGallery from '../src/components/CarouselGallery';
import MapContainer from '../src/components/Map';
import { Button, Dropdown } from 'flowbite-react';
import Footer from './Footer/Footer';




const options = [
  { label: 'Item 1', url: '#' },
  { label: 'Item 2', url: '#' },
  { label: 'Item 3', url: '#' },
];

const HomePage = () => {


  const [faqs, setFaqs] = useState([
    {
      question: 'How to book a tour?',
      answer: 'To book a tour with Tabroscape, simply browse our tour packages, select your preferred one, and follow the booking instructions on our website. You can also contact our customer support for assistance.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'Our cancellation policy varies depending on the tour package and booking time. Please refer to the specific tour details or contact us for more information.',
    },
    {
      question: "What destinations are available?",
      answer: "Tabroscape offers tours to popular locations in Sri Lanka, including Colombo, Kandy, Galle, Sigiriya, and more. Check out our tour packages to explore these amazing destinations."

    },
    {
      question: "Are meals included?",
      answer: "Yes, most of our tour packages include meals. The specific details about meals and dining options are mentioned in the package description. Feel free to contact us for any dietary restrictions or special requests."
    },
    {
      question: "What is the cancellation policy?",
      answer: "Our cancellation policy varies depending on the tour package and the time of cancellation. Please refer to our Terms and Conditions for detailed information. If you have any specific questions, our customer support team is here to assist you."
    },
    {
      question: "Is travel insurance included?",
      answer: 'No, travel insurance is not included in our tour packages. We highly recommend purchasing travel insurance to protect yourself against any unforeseen circumstances. Our team can provide recommendations for reliable travel insurance providers.'
    }
  ]);

  const toggleFaq = (index) => {
    setFaqs(
      faqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };
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
        backgroundImage: `url(/bg2.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        imageOrientation: ' from-image',
        fontFamily: 'bagea',
      }} className='section'>

       
          <div  style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',backdropFilter: 'blur(14.2px)',webkitbackdropFilter: 'blur(14.2px)'
        }} className="navbar bg-none pb-10  text-white z-50 fixed w-full lg:px-20">
            <div className="navbar-start">
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <Button style={{ backgroundColor: 'none', border: 'none', color: 'white' }}
                    className="  rounded focus:outline-none focus:bg-blue-600">
                    <li><a className="">Item 1</a></li></Button>
                  <li className="relative">
                    <Dropdown style={{ backgroundColor: 'none', border: 'none', color: 'white' }} className='bg-none' label="Dropdown button" dismissOnClick={false}>
                      <Dropdown.Item style={{ color: 'white' }} >Dashboard</Dropdown.Item>
                      <Dropdown.Item style={{ color: 'white' }}>Settings</Dropdown.Item>
                      <Dropdown.Item style={{ color: 'white' }}>Earnings</Dropdown.Item>
                      <Dropdown.Item style={{ color: 'white' }}>Sign out</Dropdown.Item>
                    </Dropdown>
                  </li>
                  <Button style={{ backgroundColor: 'none', border: 'none', color: 'white' }}
                    className="  rounded focus:outline-none focus:bg-blue-600">
                    <li><a className="">Item 3</a></li></Button>
                </ul>
              </div>

              <div style={{ backgroundColor: 'none', border: 'none', color: 'white' }} className="dropdown lg:hidden">
                <div tabIndex={0} role="button" className="btn  btn-ghost">
                  <div className='flex justify-start text-4xl md:text-6xl  text-black'>≡</div>



                </div>
                <ul style={{ backgroundColor: 'none', border: 'none', color: 'white' }} tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-gray-800 rounded-lg w-52">
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

            <div className="navbar-end ">
              <a className="btn bg-[#082b49] px-5 hover:bg-[#006362]">Button</a>
            </div>
         
     
          </div>
          <nav  className="bg-none fixed w-full z-50 mt-16    md:flex justify-center text-center lg:px-20">
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
        <nav className="bg-[#006362]  md:flex justify-center text-center lg:px-20">
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


        <div className='bg-white pb-20 grid grid-cols-1 md:grid-cols-2 justify-start text-left lg:px-20'>
          <div className='container grid col-span-1 md:col-span-1 m-auto lg:py-5 lg:px-5'>
            <h1 className='text-3xl lg:text-5xl text-black font-bold p-5'>Discover the beauty of Sri Lanka with us</h1>
            <p className='text-black py-2 px-5'>Experience the wonder of Sri lankas breathitaking destination and create memories that will latas a lifetime </p>
            <div className='flex justify-start text-left lg:px-10 py-2 px-5 gap-2'>
              <Button className='bg-[#082b49]'>Book</Button>
              <Button className='bg-none text-black border-spacing-0'>Explore</Button>
            </div>
          </div>
          <div className=' m-2 grid col-span-1 md:col-span-1'>
            <img  src='./colombo.jpg' alt="" />
          </div>

        </div>
        <div className='bg-white grid pb-20 grid-cols-1 md:grid-cols-2 justify-start text-start lg:px-20'>
          <div className='container grid col-span-1 md:col-span-1 m-auto lg:py-5 '>
            <h1 className='text-3xl lg:text-5xl text-black font-bold p-5'>Discover Unforgettable Wildlife Encounters, Cultural Journeys, and Beach Escapes</h1>
            <p className='text-black py-2 px-5'>Immerse yourself in the wonders of Sri Lanka with Tabroscape. Our tour agency offers a variety of unique experiences, including thrilling wildlife tours, enriching cultural trips, and relaxing beach vacations. Whether you are seeking adventure, history, or relaxation, we have the perfect package for you. Start planning your dream vacation today! </p>

          </div>
          <div className=' m-2 grid col-span-1 md:col-span-1'>
            <img  src='./colombo.jpg' alt="" />
          </div>

        </div>
        <div className='bg-white py-5 pb-20 justify-start text-start lg:px-10 xl:px-20'>
          <div >
            <div className='mx-auto w-2/3 text-center pb-20  md:text-3xl lg:text-5xl  text-xl text-black font-extrabold'>Explore the Beauty of Sri Lanka with Our Guided Tours</div>
          </div>
          <div className='bg-white grid pb-5 grid-cols-1 md:grid-cols-3'>
            <div className=' grid col-span-1 md:col-span-1 m-auto'>
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
            <div className=' grid col-span-1 md:col-span-1 m-auto '>
              <h1 className='text-xl text-start lg:text-3xl text-black font-bold'>Book Your Ideal Accommodation
                for a Memorable Stay</h1>
              <p className='text-black text-start py-2 '>We offer a variety of services including hotel bookings, guided tours, and transportation facilities.  </p>

              <button className='text-black text-start justify-start flex '> Learn More &gt;&gt; </button>

            </div>

          </div>
        </div>
 
        <div className=' grid grid-cols-1 md:grid-cols-2 m-auto px-5 pb-10 bg-white gap-5 justify-start text-start lg:px-20'>
          <div className='grid col-span-1 '>
            <div className='flex justify-start text-start text-2xl lg:text-3xl  font-extrabold text-black'>
              <h1 className='text-start justify-start'>Discover the Beauty of Sri Lanka with Tabroscapes Exciting Tour Packages</h1>
            </div>
          </div>
          <div className='grid col-span-1 pr-5 bg-white text-black'>
            <p>Experience the wonders of Sri Lankas tourism industry with Tabroscape. With our wide range of tour packages and exceptional services, we ensure an unforgettable journey.</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 py-10'>
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
        <div className='grid grid-cols-1 pb-5 px-5 bg-white justify-center text-center lg:px-20'>
          <div className='h-auto'><img className='w-full ' src="./colombo.jpg" alt="" /></div>
        </div>

        <section className=" bg-white mx-auto px-5 py-8 justify-center text-center lg:px-20">
          <h2 className="text-3xl text-black text-center font-bold mb-2">FAQs</h2>
          <p className='text-center text-black pb-5'>Find the answer common quetions abot travl planning,packages, and services offerend by Tabroscape.</p>

          <div className="grid grid-cols-1  gap-4 justify-center text-center lg:px-10">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out ${faq.isOpen ? 'border border-blue-500' : ''
                  }`}
              >
                <button
                  className="w-full text-left text-lg font-medium text-gray-900 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  {!faq.isOpen && <span className="float-right text-blue-500">&#9660;</span>} {/* Down arrow indicator */}
                  {faq.isOpen && <span className="float-right text-blue-500">&#9650;</span>} {/* Up arrow indicator */}
                </button>
                {faq.isOpen && (
                  <div className="mt-2">
                    <p className="text-base text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <h2 className="text-3xl text-black text-center font-bold mt-5 mb-2">Still have questions?</h2>
          <p className='text-center text-black'>Contract us for more information</p>
          <Link href="/ContactUs">
            <div className=" flex justify-center mt-2  ">
              <Button className='justify-center text-center  border-2 border-slate-800 text-black hover:bg-cyan-700 hover:border-none' >Contact</Button>
            </div>
          </Link>

        </section>



        <div className='justify-center text-center bg-white lg:px-20'>
          <MapContainer />
        </div>





        <div className='card bg-white lg:px-20 '>
          <div className="container justify-center text-center mx-auto bg-white p-10">

            <CarouselGallery images={images} />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-8 mt-5 lg:px-10">All Destinations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 lg:px-20">
          {destinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2  gap-8 bg-white lg:px-20'>
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
                <img  src="/webflow.svg" alt="Webflow" className="h-6 w-6" />
              </div>
              <div className='grid col-span-1'>
                <img  src="/webflow.svg" alt="Webflow" className="h-6 w-6" />

              </div>
              <div className='grid col-span-1'>
                <img  src="/webflow.svg" alt="Webflow" className="h-6 w-6" />

              </div>
              <div className='grid col-span-1'>
                <img  src="/webflow.svg" alt="Webflow" className="h-6 w-6" />

              </div>

            </div>

          </div>
        </div>

        <Footer />




      </div>
    </div>

  )
}
export default HomePage;