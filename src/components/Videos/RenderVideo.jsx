import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { getSecretUrlByCode } from './videoUtils';

const RenderVideo = () => {
 const { code } = useParams();

 const videoUrl = getSecretUrlByCode(code);

 return (
    <div className="bg-black">
      <section className="header min-h-screen p-6 w-full" id="main-section">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-7xl text-cdln-blue-50 font-medium py-4 text-center">
            {code}
          </h1>
          <div className="flex flex-col items-center justify-center">
            <div className="player-wrapper md:w-auto md:h-auto mx-auto">
              <ReactPlayer
                url={videoUrl}
                controls
                width={"1280px"}
                height={"720px"}
                className="react-player border-4 border-cdln-blue-200 rounded-lg"
                playing={true}
              />
            </div>
            <div className="mt-8">
                <a href="/2209626308100203jodoboioxocoocofaiafbaabgoog">
                <button class="ui-btn">
                <span>Voltar</span>
                </button>
            </a>
            </div>
          </div>
        </div>
      </section>
    </div>
 );
};

export default RenderVideo;