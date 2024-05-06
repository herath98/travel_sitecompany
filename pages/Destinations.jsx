// pages/Destinations.js
import React from 'react';
import Link from 'next/link';
import DestinationCard from '../src/components/DestinationCard';
import { destinations } from '../data/destinations'; 
import Layouts from '@/src/layout/LayoutDesttination';

const Destinations = () => {
  return (
    <Layouts>
    <div className=' min-h-screen pt-5 pb-10'>
      
      <h1 className="text-3xl font-bold mb-8">All Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {destinations.map(destination => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    
    </div>
    </Layouts>
  );
};

export default Destinations;
