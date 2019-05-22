import React from 'react';
import Cards from './Cards/Cards.jsx'
import './Gallery.css';
import Carousel from './Carousel.jsx'

export default function Gallery() {
  return (
    <div className='layout'>
      <Carousel></Carousel>
      <Cards></Cards>
    </div>
  );
}
