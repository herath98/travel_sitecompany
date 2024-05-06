import React, { useState, useEffect } from 'react';

export default function Videoview() {
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

    return (
        <div className="relative " style={{height:'500px',overflow:'hidden'}}>
            {/* Video player */}
            <video  className="w-full h-auto absolute top-0 left-0" autoPlay loop>
                <source autoPlay loop src="h.mp4" type="video/mp4" />
              
                Your browser does not support the video tag.
            </video>

           
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                
                <div className="text-center text-white">
                    
                    <h1 style={{ fontSize: fontSize }} className="text-5xl lg:text-9xl font-bold mb-4">About Us</h1>
                    <p style={{ fontSize: isMobile }} className="text-lg">Discover the beauty of Sri Lanka with us!</p>
                </div>
            </div>
        </div>
    );
}