// pages/TourPackages.jsx

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
            id: 2,
            name: 'Package 2',
            itinerary: 'Detailed itinerary for Package 2',
            price: '$1200',
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
        
        // Add more tour packages as needed
    ];

    return (
        <div className='section'>
            <Layouts>
               
            <h1 className="text-3xl font-bold mb-8">List of Tour Packages</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tourPackages.map(tourPackage => (
                        <div key={tourPackage.id} className="border rounded-lg p-4">
                            <Link href={`/tour/${tourPackage.id}`}>
                                <span>
                                    <div className="relative h-40 overflow-hidden rounded-lg">
                                        <Image
                                            src={tourPackage.image}
                                            alt={tourPackage.name}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className="mt-4 font-semibold">{tourPackage.name}</div>
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </Layouts>
        </div>
    );
};

export default TourPackages;
