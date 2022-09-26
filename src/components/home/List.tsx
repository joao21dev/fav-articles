import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const Table = styled.div`
  background-color: #e7eaee;
  border-radius: 15px;
  width: 1122px;
  min-height: 60vh;
  padding: 30px;
`

interface Props {
  children?: ReactNode
}

const List: FC<Props> = ({ children }) => {
  return <Table>{children}</Table>
}

export default List
