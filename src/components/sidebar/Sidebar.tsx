import React, { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import Submneu from './Submenu'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase-config'
import { Button } from 'react-bootstrap'

const SidebarNav = styled.div<{ sidebar: boolean }>`
  background-color: #8c8eee;
  width: 250px;
  height: 100vh;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
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
  const [sidebar, setSidebar] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      setLoading(true)
      setTimeout(async () => {
        await signOut(auth)
        navigate('/login')
        setLoading(false)
      }, 1000)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <>
      <SidebarNav sidebar={sidebar}>
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
