import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SearchResult.css';

const PlaylistItem = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [pageToken, setPageToken] = useState('');
  const { playlistId } = useParams();
  const API_LIST = [
    'AIzaSyAM9R1vr9t6GSrazqGtw5t8RBKmz2Q17dk',
    'AIzaSyCvaktMcshCgWbahXn7JuJcmhUlSR5ZxAA',
    'AIzaSyBboFo9umdEW03mwz8IdLsRVWXEeAyokdw',
    'AIzaSyAmw-1dYBqj1MIqccmtfeLWfgzYqROkylY',
    'AIzaSyBXaSHnkg1JHTCn8um-q4AfwlyDrC0g5ng',
    'AIzaSyA-xoSvUcnAYUK2v6sTeJtQT4NG9JxWrQg',
    'AIzaSyDwCaQVTwJsau514qhaWTMBlZ80iQgKLtM'
  ];
  
 
  const randomIndex = Math.floor(Math.random() * API_LIST.length);
  

  const API_KEY = API_LIST[randomIndex];
  console.log('key:',API_KEY);
  const maxResults = 50;

  useEffect(() => {
    const fetchData = async () => {
      if (!playlistId) {
        console.log('null input');
        return;
      }

      console.log('result here: ', playlistId);

      const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${API_KEY}&maxResults=${maxResults}&pageToken=${pageToken}`;

      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Update state with the fetched items
        setSearchResults(prevResults => [...prevResults, ...data.items]);
        
        // Update pageToken for the next page
        setPageToken(data.nextPageToken || '');
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error
      }
    };

    fetchData();
  }, [playlistId, pageToken]); // Include pageToken in the dependency array

  if (!playlistId) {
    return <p>not available.</p>;
  }

  return (
    <div>
      <br />
      <br />
      <br />
<h4 className="text-center text">Playlist</h4>
<hr/>
      <div className="container">
        <div className="row">
          {searchResults.map((item) => (
            <div key={item.id.videoId} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card">
                <Link to={`/Player/${item.snippet.resourceId.videoId}`}>
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    className="card-img-top"
                    alt={item.snippet.title}
                  />
                </Link>
                <div className="card-body">
                  <Link to={`/Player/${item.snippet.resourceId.videoId}`} className="maincard1">
                    <h5 className="card-title">{item.snippet.title}</h5>
                  </Link>
                  <p className="font-weight-bold">{item.snippet.channelTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
