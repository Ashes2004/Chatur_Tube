const API_KEY = 'AIzaSyA-xoSvUcnAYUK2v6sTeJtQT4NG9JxWrQg';
const url = 'https://www.googleapis.com/youtube/v3/search';
let searchQuery = 'coding';

export const fetchData = async () => {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=18&q=${searchQuery}&videoDuration=long&regionCode=IN&order=viewCount&key=${API_KEY}`;


  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data;
    
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to handle it elsewhere
  }
};
window.addEventListener('load', fetchData);