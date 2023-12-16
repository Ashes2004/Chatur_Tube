// components/Layout.js
import React, { useState } from 'react';
import Navbar from './Navbar';

const Layout = ({ children },{onSearch}) => {
  
 console.log(onSearch)

  return (
    <div>
      <Navbar onSearch={ onSearch} />
     
      {children}
    </div>
  );
};

export default Layout;
