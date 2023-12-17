import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.css';

const SearchResult = ({ searchInput }) => {
 let [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchInput) {
        console.log('null input');
      }
console.log('result here: ',searchInput);
      const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=18&q=${searchInput}&videoDuration=long&key=AIzaSyDwCaQVTwJsau514qhaWTMBlZ80iQgKLtM`;

      try {
        const response = await fetch(API_URL);
        const data = await response.json();
    // Update state with the fetched items
    setSearchResults(data.items)
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error
      }
    };

    fetchData();
  }, [searchInput]);

  if (!searchInput) {
    return <p>Please enter a search query.</p>;
  }

  return (
    <div>
      <br />
      <br />
      <br />

      <div className="container">
        <div className="row">
          {searchResults.map((item) => (
            <div key={item.id.videoId} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              
                <div className="card">
                <Link to={`/Player/${item.id.videoId}`} >
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    className="card-img-top"
                    alt={item.snippet.title}
                  />
                   </Link>
                  <div className="card-body">
                  <Link to={`/Player/${item.id.videoId}`} className="maincard1">  <h5 className="card-title">{item.snippet.title}</h5> </Link>
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

export default SearchResult;