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
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    background-color: #3638b8;
    text-decoration: none;
    color: white;
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
      </SidebarNav>
    </>
  )
}

export default Sidebar
