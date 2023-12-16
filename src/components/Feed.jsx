import React from 'react';
import { Link } from 'react-router-dom';
import './Feed.css';

const Feed = ({ data }) => {
  // Use data instead of randomVideos
  return (
    <div>
      <br />
      <br />
     

      <div className="container">
        <div className="row">
          {data ? ( // Use data instead of randomVideos
            data.items.map((item) => ( // Change items to item
              <div key={item.id.videoId} className="col-lg-4 col-md-6 col-sm-12 mb-4">
               
                  <div className="card">
                  <Link  to={`/Player/${item.id.videoId}`} >
                    <img
                      src={item.snippet.thumbnails.medium.url}
                      className="card-img-top"
                      alt={item.snippet.title}
                    />
                     </Link>
                    <div className="card-body">
                          <Link  to={`/Player/${item.id.videoId}`}  className="maincard "> <h5 className="card-title">{item.snippet.title}</h5></Link>
                           <p className=" font-weight-bold italic">{item.snippet.channelTitle}</p>
                    </div>
                  </div>
               
              </div>
            ))
          ) : (
            <div className="d-flex justify-content-center  align-center">
            <div className="loader "></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;
