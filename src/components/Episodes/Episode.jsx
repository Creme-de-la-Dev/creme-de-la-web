// Episode.js
import React from 'react';

const Episode = ({ title, url, date, description, thumb }) => {
  return (
    <div className="episode flex flex-row items-center p-2 hover:bg-cdln-blue-800 hover:rounded-md">
      <a href={url} target="_blank" rel="noopener noreferrer" className='flex flex-row text-white no-underline'>
        <div>
          <img src={thumb} alt={title} className='rounded-md hover:shadow-md max-w-64' />
        </div>
        <div className='pl-5'>
          <h2 className='no-underline font-semibold hover:underline text-2xl'>{title}</h2>
          <p>Data de lançamento: {date}</p>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default Episode;
