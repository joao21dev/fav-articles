import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Home from '../pages/Home'
import Trending from '../pages/Trending'

function MainLyoutRoutes() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trending' element={<Trending />} />
        </Routes>
      </div>
    </>
  )
}

export default MainLyoutRoutes
