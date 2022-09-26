/* eslint-disable react/prop-types */
import { createContext, FC, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebase-config'

const UserContext = createContext()



export const AuthContextProvider= ({ children }) => {
  const [user, setUser] = useState({})

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <UserContext.Provider value={{ register, user, logout, login }}>
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(UserContext)
}
