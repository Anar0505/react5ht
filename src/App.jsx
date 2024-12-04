import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/mainlayout'
import Drawer from './pages/drawer.jsx'
import Home from './pages/home.jsx'
import Tabs from './components/Tabs/tabs.jsx'
import Bmi from './pages/BMI/index.jsx'
import Coin from './pages/coin/index.jsx'

function App() {
  

  return (
    <>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
           <Route path="/drawer" element={<Drawer />} />
          <Route path="/tabs" element={<Tabs />} />  
          <Route path="/bmi" element={<Bmi />} />  
          <Route path="/coin" element={<Coin />} />  
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
