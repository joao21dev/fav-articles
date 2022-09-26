import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { SidebarData } from './SidebarData'
import Submneu from './Submenu'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase-config'
import { useAuth } from '../../context/AuthContext'

const SidebarNav = styled.div`
  background-color: #8c8eee;
  width: 250px;
  min-height: 100vh;
  top: 0;
`
const SidebarWrap = styled.div`
  height: 80%;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: 0.1s ease-in-out;
  &:hover {
    background-color: #282842;
    text-decoration: none;
    color: white;
  }
`
const LogoutButton = styled.div`
  position: fixed;
  top: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #282842;
  width: 150px;
  border-radius: 15px;
  height: 50px;
  cursor: pointer;
  margin-left: 2rem;

  &:hover {
    opacity: 0.8;
  }
`

const Sidebar: FC = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    try {
      setLoading(true)
      setTimeout(async () => {
        await logout()
        navigate('/login')
        console.log('You are logged out')
        setLoading(false)
      }, 1000)
    } catch (e: any) {
      console.log(e.message)
    }
  }

  return (
    <>
      <SidebarNav>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return (
              <>
                <Wrapper>
                  <Submneu item={item} key={index} />
                </Wrapper>
              </>
            )
          })}
        </SidebarWrap>
        <LogoutButton onClick={handleLogout}>
          {' '}
          {!loading && 'Logout'}
          {loading && (
            <span className='indicator-progress' style={{ display: 'block' }}>
              Carregando...{' '}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </LogoutButton>
      </SidebarNav>
    </>
  )
}

export default Sidebar
