// Episode.js
import React from 'react';

const Episode = ({ title, url, date, description, thumb }) => {
  return (
    <div className="episode">
      <img src={thumb} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Link para o episódio</a>
      <p>Data de lançamento: {date}</p>
    </div>
  );
};

export default Episode;
