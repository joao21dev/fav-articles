import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import Submneu from './Submenu'

const SidebarNav = styled.div<{ sidebar: boolean }>`
  background-color: #0064ff;
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
    background-color: #035ae0;
    text-decoration: none;
  }
`

const SidebarWrap = styled.div``

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
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
