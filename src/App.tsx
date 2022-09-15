import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

import MainLyoutRoutes from './layouts/MainLyoutRoutes'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/*'
          element={
            <ProtectedRoute>
              <MainLyoutRoutes />
            </ProtectedRoute>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
