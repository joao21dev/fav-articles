import React, { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import Submneu from './Submenu'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase-config'
import { Button } from 'react-bootstrap'

const Nav = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f0f0;
`
const SidebarNav = styled.div<{ sidebar: boolean }>`
  background-color: #f1f0f0;
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
`
const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  font-size: 2rem;
  margin-left: 2rem;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    background-color: #585856;
    text-decoration: none;
  }
`

const SidebarWrap = styled.div``

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
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
      <Nav>
        <NavIcon onClick={showSidebar} to='#'>
          <AiOutlineMenu color='#fff' />
        </NavIcon>
        <Button
          onClick={handleLogout}
          className='btn btn-danger btn-lg btn-block me-4'
          type='submit'
        >
          {!loading && 'Logout'}
          {loading && (
            <span className='indicator-progress' style={{ display: 'block' }}>
              Carregando...{' '}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </Button>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon onClick={showSidebar} to='#'>
            <AiOutlineClose color='#fff' />
          </NavIcon>
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
      </SidebarNav>
    </>
  )
}

export default Sidebar
