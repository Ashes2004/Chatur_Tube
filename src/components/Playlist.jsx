import React, { useEffect, useState } from 'react';
import './Playlist.css';

import './SearchResult.css';
import { Link } from 'react-router-dom';

const Playlist = ({ searchInput }) => {
 let [searchResults, setSearchResults] = useState([]);
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchInput) {
        console.log('null input');
      }
console.log('result here: ',searchInput);
const API_LIST = [
 
  'AIzaSyA-xoSvUcnAYUK2v6sTeJtQT4NG9JxWrQg',
  'AIzaSyDwCaQVTwJsau514qhaWTMBlZ80iQgKLtM',
  'AIzaSyAL0JOXST4YMX_e6lpMbG2-vd1kOQCOEAs',
  'AIzaSyCfscBsyvhAIjMzb8JSr95Ub2bgNvnYwZc',
  'AIzaSyB-9_ZEDWXvVl5_Mc9PQ3FTUxgHMA5qCs4',
];


const randomIndex = Math.floor(Math.random() * API_LIST.length);


const API_KEY = API_LIST[randomIndex];
console.log('key:',API_KEY);
const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=playlist&maxResults=21&q=${searchInput}&key=${API_KEY}`;

      try {
        const response = await fetch(API_URL);
        const data = await response.json();
    // Update state with the fetched items
    console.log(data);
    setSearchResults(data.items)
    setLoading(false);
      } catch (error) {
        setLoading(true);
        console.error('Error fetching data:', error);
        // Handle the error
      }
    };
    setLoading(true);
    fetchData();
  }, [searchInput]);
  if(loading){
    return (
      <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="loader-container">
      <div className="loader ">
        </div>
      </div>
      </div>
    )
  }

  if (!searchInput) {
    return <p>Please enter a search query.</p>;
  }

  return (
    <div>
      <br />
      <br />
      <br/>
      <div className="link-container1">
      <Link to={`/SearchResult/${searchInput}`} className="link">Videos</Link>
       <div className="mt-2">
        |
       </div>
      <Link to={`/SearchResult/${searchInput}/playlist`} className="link">Playlists</Link>
    </div>
      
<hr/>
      <div className="container">
        <div className="row">
          {searchResults.map((item) => (
            <div key={item.id.playlistId} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              
                <div className="card">
              <Link to={`/playlist/${item.id.playlistId}`}>
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    className="card-img-top"
                    alt={item.snippet.title}
                  />
                 </Link>
                  <div className="card-body">
                    <h5 className="card-title maincard1" >{item.snippet.title} (Playlist)</h5> 
                    <p className="font-weight-bold">{item.snippet.channelTitle}</p>
                  </div>
                </div>
             
            </div>
          ))}
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default Playlist;