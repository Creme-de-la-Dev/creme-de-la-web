import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

const RenderEpisode = ({ episodes }) => {
  const { episodeId } = useParams();
  const selectedEpisode = episodes.find((episode) => episode.id === episodeId);

  if (!selectedEpisode) {
    return <div>Episode not found</div>;
  }

  return (
    <div>
        <section className="header h-screen">
            <h1>{selectedEpisode.title}</h1>
            <ReactPlayer url={selectedEpisode.url} controls />
            <p>{selectedEpisode.description}</p>
        </section>
    </div>
  );
};

export default RenderEpisode;
