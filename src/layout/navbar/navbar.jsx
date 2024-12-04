import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (<>
  <nav className="navbar">
      <NavLink to="/" className="nav-link" >
        Collapse
      </NavLink>
      <NavLink to="/drawer" className="nav-link" >
        Drawer
      </NavLink>
      <NavLink to="/tabs" className="nav-link" >
        Tabs
      </NavLink>
      <NavLink to="/bmi" className="nav-link" >
        Bmi
      </NavLink>
      <NavLink to="/coin" className="nav-link" >
        Coin
      </NavLink>
    </nav>
</>  )
}

export default Navbar