import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import MainLyoutRoutes from './layouts/MainLyoutRoutes'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<MainLyoutRoutes />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
