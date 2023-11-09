import React from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import NotFound from '../../pages/Error/404'

const RenderEpisode = ({ episodes }) => {
  const { episodeId } = useParams();
  const selectedEpisode = episodes.find((episode) => episode.id === episodeId);

  if (!selectedEpisode) {
    return <NotFound />;
  }

  return (
    <div>
        <section className="header h-screen" id="main-section">
            <h1>{selectedEpisode.title}</h1>
            <ReactPlayer url={selectedEpisode.url} controls />
            <p>{selectedEpisode.description}</p>
        </section>
    </div>
  );
};

export default RenderEpisode;
