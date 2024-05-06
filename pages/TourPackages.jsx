import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layouts from '@/src/layout/Layouty';

const TourPackages = () => {

    // Assuming you have a list of tour packages with image URLs
    const tourPackages = [
        {
            id: 1,
            name: 'Package 1',
            itinerary: 'Detailed itinerary for Package 1',
            price: '$1000',
            inclusions: '...',
            exclusions: '...',
            image: '/colombo.jpg' // Example image URL, replace with actual image URL
        },
        {
            id: 2,
            name: 'Package 2',
            itinerary: 'Detailed itinerary for Package 2',
            price: '$1200',
            inclusions: '...',
            exclusions: '...',
            image: '/colombo.jpg' // Example image URL, replace with actual image URL
        },
        {
            id: 3,
            name: 'Package 2',
            itinerary: 'Detailed itinerary for Package 2',
            price: '$1200',
            inclusions: '...',
            exclusions: '...',
            image: '/colombo.jpg' // Example image URL, replace with actual image URL
        },
        // Add more tour packages as needed
        // Add more tour packages as needed

    ];

    return (
        <div className='min-h-screen'>
            <Layouts className='min-h-screen'>
                <div className='min-h-screen py-10'>
                <h1 className="text-3xl font-bold mb-8">List of Tour Packages</h1>
                <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
                    {tourPackages.map(tourPackage => (
                        <div style={{borderRadius:'16px', boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)',border:'1px solid rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',}}  key={tourPackage.id} className="border rounded-lg overflow-hidden">
                            <Link  className="block" href={`/tour/${tourPackage.id}`}>
                                <>
                                    <div className="relative h-48">
                                        <Image
                                            src={tourPackage.image}
                                            alt={tourPackage.name}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className="p-4 text-white">
                                        <h2 className="text-xl text-white font-semibold mb-2">{tourPackage.name}</h2>
                                        <p className="text-gray-700">{tourPackage.itinerary}</p>
                                        <p className="mt-2 text-gray-600">Price: {tourPackage.price}</p>
                                    </div>
                                </>
                            </Link>
                        </div>
                    ))}
                </div>
                </div>
            </Layouts>
        </div>
    );
};

export default TourPackages;
