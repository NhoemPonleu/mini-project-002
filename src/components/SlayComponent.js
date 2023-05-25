import { Carousel } from 'flowbite-react';
import React from 'react';

export default function SlayComponent(props) {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slideInterval={2000} slide={false}>
    <img
      src="https://www.lezzat.co.uk/wp-content/uploads/2021/03/Amazon-Product-Photography-Agency-UK-1.jpg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      alt="..."
    />
  </Carousel>
</div>

    );
}
