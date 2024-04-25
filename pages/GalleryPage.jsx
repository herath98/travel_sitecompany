// pages/ScrollableGalleryPage.js
import React from 'react';
import Gallery from '../src/components/Gallery';
import CarouselGallery from '@/src/components/CarouselGallery';
import Layout from '@/src/layout/Layouty';

const ScrollableGalleryPage = () => {
    // Assuming you have some images data
    const images = [
        { url: 'colombo.jpg', alt: 'Image 1' },
        { url: 'colombo.jpg', alt: 'Image 2' },
        { url: 'colombo.jpg', alt: 'Image 3' },
        // Add more images as needed
    ];

    return (
        <Layout>
        <div className='section min-h-screen'>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold my-8">Scrollable Gallery</h1>
                <div className="overflow-x-auto">
                    <CarouselGallery images={images} />
                </div>
            </div>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold my-8">Normal Photo Gallery</h1>
                <Gallery images={images} />
            </div>
        </div>
        </Layout>
    );
};

export default ScrollableGalleryPage;
