import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Home from '../pages/Home'

function MainLyoutRoutes() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default MainLyoutRoutes
