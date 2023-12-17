import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Player.css';
import VideoComments from './VideoComments';
import Download from './Download';

const Player = () => {
  const { videoId } = useParams();
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}&rel=0`;

  // State to manage loading
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && (
        <div className="loader-container">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div className={`player-container ${loading ? 'hidden' : ''}`}>
        <ReactPlayer
          className="react-player"
          url={videoUrl}
          controls={true}
          width="100%"
          height="100%"
          showRelated={false}
          onReady={() => setLoading(false)} // Set loading to false when the video is ready
        />
      </div>

      <div className="d-flex justify-content-center">    
<Download

 videoId={videoId}/>
 </div>
      <VideoComments videoId={videoId} />
    </div>
  );
};

export default Player;