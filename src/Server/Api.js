const API_LIST = [
  'AIzaSyAM9R1vr9t6GSrazqGtw5t8RBKmz2Q17dk',
  'AIzaSyCvaktMcshCgWbahXn7JuJcmhUlSR5ZxAA',
  'AIzaSyBboFo9umdEW03mwz8IdLsRVWXEeAyokdw',
  'AIzaSyChsjBvxWfkmXRuT32rGLLFPHpVUW3TWoY',
  'AIzaSyAmw-1dYBqj1MIqccmtfeLWfgzYqROkylY',
  
];


const randomIndex = Math.floor(Math.random() * API_LIST.length);


const API_KEY = API_LIST[randomIndex];
console.log('key:',API_KEY);
let Array = ['govt exam preparation','meditation','programming tutorial','software developer podcast','quick support best videos','vivekananda quoetes','mental health budhhism']
const randomTopic = Math.floor(Math.random() * Array.length);
let searchQuery = Array[randomTopic];

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