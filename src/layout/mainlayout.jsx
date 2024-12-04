import React from 'react'
import Navbar from './navbar/navbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (<>
  <Navbar></Navbar>
  <Outlet></Outlet>
  </>)
}

export default MainLayout