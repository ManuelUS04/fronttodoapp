import React from 'react';
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import { useState } from 'react';
import '../dashboard/css/style.css';
import Header from '../dashboard/Header';
import Sidebar from '../dashboard/Sidebar';
import Home from '../dashboard/Home';
import FormPeople from '../views/Peoples/Form';

const Layout = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/people" element={<FormPeople />}/>
        </Routes>
      
      
    </div>
  )
}

export default Layout