import React from 'react';


function Download({ videoId }) {
  const handleDownloadClick = () => {
    const downloadUrl = `https://video.genyt.net/${videoId}`;
    window.location.href = downloadUrl;
  };

  return (
    <div className="d-flex justify-center items-center ">
      <button className='btn mt-2 text-white my-2 bg-primary' onClick={handleDownloadClick}>
        Download
      </button>
    </div>
  );
}

export default Download;
