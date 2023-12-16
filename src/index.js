// index.js
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store1/store';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Layout from './components/Layout';
// import Feed from './components/Feed';




// import Player from './components/Player';
// import SearchResult from './components/SearchResult';

// const handleSearch = (searchInput) => {
//   console.log('Search input:', searchInput);

//   // You can update the state or perform any other action here
// };

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout ><Feed /></Layout>,
//   },
//   {
//     path: '/Player/:videoId',
//     element: <Layout><Player /></Layout>,
//   },
//   {
//     path: '/SearchResult/:name',
//     element: <Layout  onSearch={handleSearch}><SearchResult /></Layout>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//     </React.StrictMode>
 
// );



 ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store = {store}>
    <App/>
    </Provider>
     );
    