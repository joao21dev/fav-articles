import React, { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { auth } from '../firebase-config'

interface Props {
  children?: ReactNode
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  const { user } = useAuth()
  if (!user) {
    return <Navigate to='/login' />
  } else {
    return <>{children}</>
  }
}

export default ProtectedRoute
