import React from 'react';
import StudioCard from './StudioCard';

const studios = [
  {
    id: 1,
    image: 'path/to/image1.jpg',
    name: 'Studio One',
    location: 'New York, NY',
    description: 'A modern studio with state-of-the-art equipment...',
  },
  {
    id: 2,
    image: 'path/to/image2.jpg',
    name: 'Studio Two',
    location: 'Los Angeles, CA',
    description: 'Perfect for high-end photoshoots with ample space...',
  },

];

const StudioList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {studios.map((studio) => (
        <StudioCard key={studio.id} {...studio} />
      ))}
    </div>
  );
};

export default StudioList;
