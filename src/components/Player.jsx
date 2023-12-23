import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import './Player.css';
import VideoComments from './VideoComments';
import Download from './Download';

const Player = () => {
  const { videoId } = useParams();
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}&rel=0`;

  // State to manage loading
  const [loading, setLoading] = useState(true);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      controls: 1,
      autoplay:1,
      modestbranding: 1,
      showRelated: false,
    },
  };

  return (
    <div>
      {loading && (
        <div>
          <br />
          <br />
          <br />
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        </div>
      )}

      <div className={`player-container ${loading ? 'hidden' : ''}`}>
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={() => setLoading(false)} // Set loading to false when the video is ready
        />
      </div>

      <div className="d-flex justify-content-center">
        <Download videoId={videoId} />
      </div>
      <VideoComments videoId={videoId} />
    </div>
  );
};

export default Player;
