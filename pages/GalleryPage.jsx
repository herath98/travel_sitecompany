// pages/ScrollableGalleryPage.js
import React from 'react';
import Gallery from '../src/components/Gallery';

const ScrollableGalleryPage = () => {
    // Assuming you have some images data
    const images = [
        { url: 'colombo.jpg', alt: 'Image 1' },
        { url: 'colombo.jpg', alt: 'Image 2' },
        { url: 'colombo.jpg', alt: 'Image 3' },
        // Add more images as needed
    ];

    return (
        <div className='section'>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold my-8">Scrollable Gallery</h1>
                <div className="overflow-x-auto">
                    <Gallery images={images} />
                </div>
            </div>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold my-8">Normal Photo Gallery</h1>
                <Gallery images={images} />
            </div>
        </div>
    );
};

export default ScrollableGalleryPage;
