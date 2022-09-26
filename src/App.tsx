import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

import MainLyoutRoutes from './routes/PrivateRoutes'
import Login from './pages/Login'
import Register from './pages/Register'
import { AuthContextProvider } from './context/AuthContext'
import { ArticleContextProvider } from './context/ArticleContext'

function App() {
  return (
    <>
      <AuthContextProvider>
        <ArticleContextProvider>
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
        </ArticleContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
