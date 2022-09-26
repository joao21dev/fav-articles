import { onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'

import styled from 'styled-components'
import ArticleCard from '../../components/home/ArticleCard'
import List from '../../components/home/List'
import { useAuth } from '../../context/AuthContext'
import { auth } from '../../firebase-config'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 100px;
`
const Title = styled.h1`
  font-size: 28px;
  color: #282842;
`

const Home = () => {
  const { user } = useAuth()

  return (
    <Container>
      <Title>Artigos do usuário: {user.email}</Title>
      <List>
        <ArticleCard />
      </List>
    </Container>
  )
}

export default Home
