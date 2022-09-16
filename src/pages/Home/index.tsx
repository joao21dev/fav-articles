import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
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
const Table = styled.div`
  background-color: #e7eaee;
  border-radius: 15px;
  width: 1122px;
  min-height: 60vh;
  padding: 30px;
`

const Article = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-bottom: 32px;
  border-radius: 15px;
  padding: 20px;
`
const InfoWrapper = styled.div`
  width: 80%;
`
const ArticleTitle = styled.h1`
  font-size: 24px;
  color: #282842;
`
const ArticleLink = styled.a`
  color: #4b96eb;
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
const EditButton = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
const DeleteButton = styled(EditButton)``
const AddWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #5cb85c;
  width: 150px;
  border-radius: 15px;
  height: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

const Home = () => {
  const [user, setUser] = useState<any>({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  return (
    <Container>
      <Title>Artigos do usuário: {user.email}</Title>
      <Table>
        <Article>
          <InfoWrapper>
            <ArticleTitle>Redux x Zustand</ArticleTitle>
            <ArticleLink href='https://stackshare.io/stackups/reduxjs-vs-zustand' target='_blank'>
              https://stackshare.io/stackups/reduxjs-vs-zustand
            </ArticleLink>
          </InfoWrapper>
          <EditButton>
            <AiFillEdit size={32} color='#f0ad4e' />
          </EditButton>
          <DeleteButton>
            <AiFillDelete size={32} color='#d9534f' />
          </DeleteButton>
        </Article>
        <AddWrapper>
          <AddButton>Novo Artigo</AddButton>
        </AddWrapper>
      </Table>
    </Container>
  )
}

export default Home
