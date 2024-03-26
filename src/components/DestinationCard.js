// components/DestinationCard.js
import React from 'react';
import Link from 'next/link';

const DestinationCard = ({ destination }) => {
  return (
    
    <div style={{boxShadow: '4px 4px 8px 4px rgba(0, 0, 0, 0.5) '}} className="border rounded-lg overflow-hidden text-black ">
      <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
      <div className="p-4 bg-white ">
        <h2 className="text-xl font-semibold mb-2">{destination.name}</h2>
        <p className="text-black mb-4">{destination.description}</p>
        <Link href={`/destinations/${destination.id}`}>
          <span className="text-blue-500 hover:underline">View Details</span>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
