import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Player.css';
import VideoComments from './VideoComments';
import Download from './Download';

const Player = () => {
  const { videoId } = useParams();
  const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

  // State to manage loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        videoId: videoId,
        playerVars: {
          controls: 1,
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
        },
        events: {
          onReady: () => setLoading(false),
        },
      });
    };
  }, [videoId]);

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
        <div id="youtube-player"></div>
      </div>

      <div className="d-flex justify-content-center">
        <Download videoId={videoId} />
      </div>
      <VideoComments videoId={videoId} />
    </div>
  );
};

export default Player;
