import React, { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase-config'

interface Props {
  children?: ReactNode
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  if (!auth.currentUser) {
    return <Navigate to='/login' />
  } else {
    return <>{children}</>
  }
}

export default ProtectedRoute
