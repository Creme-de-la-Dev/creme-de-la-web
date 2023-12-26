import React from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import NotFound from "../../pages/Error/404";

const RenderEpisode = ({ episodes }) => {
  const { episodeId } = useParams();
  const selectedEpisode = episodes.find((episode) => episode.id === episodeId);

  if (!selectedEpisode) {
    return <NotFound />;
  }

  return (
    <div>
      <section className="header min-h-screen p-6 w-full" id="main-section">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-7xl text-cdln-blue-50 font-medium py-4 text-center">
            {selectedEpisode.title}
          </h1>
          <div className="flex flex-col items-center justify-center">
            <div className="player-wrapper md:w-auto md:h-auto mx-auto">
              <ReactPlayer
                url={selectedEpisode.url}
                controls
                width={"1280px"}
                height={"720px"}
                className="react-player border-4 border-cdln-blue-200 rounded-lg"
                playing={true}
              />
            </div>
            <p className="text-cdln-blue-100 text-sm md:text-xl">
              {selectedEpisode.date}
            </p>
            <p className="text-cdln-blue-50 text-md md:text-2xl">
              {selectedEpisode.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RenderEpisode;
