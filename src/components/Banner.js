import React from 'react';
import { Carousel } from 'antd';

const Banner = () => {
  const images = [
    'https://via.placeholder.com/800x300?text=Video+1',
    'https://via.placeholder.com/800x300?text=Video+2',
    'https://via.placeholder.com/800x300?text=Video+3',
  ];

  return (
    <Carousel autoplay>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Banner ${index + 1}`} style={{ width: '100%' }} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;