import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DestinationCard = ({ destination }) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-lg border-gray-300 backdrop-blur-lg p-4">
      <div className="relative h-48">
        <Image
          src={destination.image}
          alt={destination.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{destination.name}</h2>
        <p className="text-gray-800 mb-4">{destination.description}</p>
        <Link href={`/destinations/${destination.id}`}>
          <a className="text-blue-500 hover:underline">View Details</a>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
