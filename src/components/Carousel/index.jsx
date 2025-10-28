import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Carousel = ({ children, itemsPerView = { desktop: 3, mobile: 1 } }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = React.Children.toArray(children);
  
  const getItemsPerView = () => {
    return window.innerWidth >= 1024 ? itemsPerView.desktop : itemsPerView.mobile;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsPerView());

  React.useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsPerView());
      if (currentIndex >= Math.ceil(items.length / getItemsPerView())) {
        setCurrentIndex(0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, items.length]);

  const totalSlides = Math.ceil(items.length / itemsToShow);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = () => {
    const startIndex = currentIndex * itemsToShow;
    return items.slice(startIndex, startIndex + itemsToShow);
  };

  if (items.length <= itemsToShow) {
    return (
      <div className="flex flex-col lg:flex-row p-5 lg:p-20 gap-8 lg:gap-0">
        {items}
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <button
        onClick={prevSlide}
        className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-cdln-blue-600 text-white hover:bg-cdln-blue-700 transition-colors"
        disabled={totalSlides <= 1}
      >
        <IoChevronBack size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-cdln-blue-600 text-white hover:bg-cdln-blue-700 transition-colors"
        disabled={totalSlides <= 1}
      >
        <IoChevronForward size={24} />
      </button>
      
      <div className="flex flex-col lg:flex-row p-5 lg:p-20 gap-8 lg:gap-0">
        {getCurrentItems()}
      </div>
      
      <div className="flex justify-center items-center gap-4 mt-8 lg:hidden">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-cdln-blue-600 text-white hover:bg-cdln-blue-700 transition-colors"
          disabled={totalSlides <= 1}
        >
          <IoChevronBack size={24} />
        </button>
        
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-cdln-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-cdln-blue-600 text-white hover:bg-cdln-blue-700 transition-colors"
          disabled={totalSlides <= 1}
        >
          <IoChevronForward size={24} />
        </button>
      </div>
      
      <div className="hidden lg:flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? 'bg-cdln-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;