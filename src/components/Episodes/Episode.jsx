// Episode.js
import React from 'react';

const Episode = ({ title, url, date, description, thumb }) => {
  return (
    <div className="episode flex flex-row items-center p-2 hover:bg-cdln-blue-800 hover:rounded-md">
      <a href={url} target="_blank" rel="noopener noreferrer" className='flex flex-col bg-cdln-blue-800 items-center p-2 md:p-0 rounded-md md:bg-transparent hover:bg-transparent md:flex-row text-white no-underline'>
        <div>
          <img src={thumb} alt={title} className='mb-2 md:mb-0 rounded-md hover:shadow-md min-w-64' />
        </div>
        <div className='p-2 md:pl-5'>
          <h2 className='no-underline font-semibold hover:underline text-2xl'>{title}</h2>
          <p className='text-cdln-blue-100 text-sm md:text-lg'>[{date}]</p>
          <p className='text-md md:text-lg'>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default Episode;
