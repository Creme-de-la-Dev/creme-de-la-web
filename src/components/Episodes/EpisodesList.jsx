// EpisodesList.js
import React from 'react';
import Episode from './Episode';

const EpisodesList = ({ episodes }) => {
  console.log(episodes)
  return ( 
    <div className="episodes-list py-8">
      {episodes.map((episode, index) => (
        <Episode
          key={index}
          title={episode.title}
          url={episode.url}
          date={episode.date}
          description={episode.description}
          thumb={episode.thumb}
        />
      ))}
    </div>
  );
};

export default EpisodesList;
