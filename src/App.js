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
import Playlist from './components/Playlist';
import PlaylistItem from './components/PlaylistItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  const showToast = () => {
    // Replace this with your actual code to show the toaster message
  
    toast.error('Please click on the search icon!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "colored",
      });
  };
 console.log('app here : ',searchInput);
 let pathloc = searchInput;
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar searchvalue = {search} showToast = {showToast}/><ToastContainer  position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"/><Feed data={apiData} /> <Footer/></>,
    },
    {
      path: '/Player/:videoId',
      element: <><Navbar searchvalue = {search} showToast = {showToast}/><ToastContainer position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"/><Player /> <Footer/></>,
    },
    {
      path: `/SearchResult/:name`,
      element: <> <Navbar searchvalue = {search} showToast = {showToast}/><ToastContainer position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"/><SearchResult searchInput={searchInput} /> <Footer/></>,
    },
    {
      path: `/SearchResult/:name/:playlist`,
      element: <> <Navbar searchvalue = {search} showToast = {showToast}/><ToastContainer position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"/><Playlist searchInput={searchInput} /> <Footer/></>,
    },
    {
      path: `/playlist/:playlistId`,
      element: <> <Navbar searchvalue = {search} showToast = {showToast}/><ToastContainer position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"/><PlaylistItem  /> <Footer/></>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
