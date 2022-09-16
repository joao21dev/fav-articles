import React from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import styled from 'styled-components'

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
  width: 85%;
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

const ArticleCard = () => {
  return (
    <>
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
    </>
  )
}

export default ArticleCard
