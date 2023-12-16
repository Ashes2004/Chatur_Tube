// App.js
import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Feed from './components/Feed';
import Player from './components/Player';
import {fetchData} from './Server/Api'
import SearchResult from './components/SearchResult';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [apiData, setApiData] = useState(null);
  let [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    // Replace fetchData with your actual data fetching function
    fetchData()
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const search = (input) =>{
    console.log(input);

    setSearchInput(input);
  }
 console.log('app here : ',searchInput);
 let pathloc = searchInput;
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar searchvalue = {search}/><Feed data={apiData} /> <Footer/></>,
    },
    {
      path: '/Player/:videoId',
      element: <><Navbar searchvalue = {search}/><Player /> <Footer/></>,
    },
    {
      path: `/SearchResult/:name`,
      element: <> <Navbar searchvalue = {search}/><SearchResult searchInput={searchInput} /> <Footer/></>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
