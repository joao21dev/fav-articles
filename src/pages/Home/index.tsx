import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../../firebase-config'

const Home = () => {
  const [user, setUser] = useState<any>({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  return <div className='text-primary'>Welcome, {user?.email}</div>
}

export default Home
