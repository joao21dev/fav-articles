/* eslint-disable camelcase */
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import styled from 'styled-components'
import { ArticlesData } from '../../articlesData'
import { auth, db } from '../../firebase-config'

const Article = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: #fff;
  margin-bottom: 32px;
  border-radius: 15px;
  padding: 20px;
`
const InfoWrapper = styled.div`
  width: 85%;
`
const ArticleName = styled.h1`
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

const TrendingArticles = () => {
  const [loading, setLoading] = useState(false)
  const articlesCollectionRef = collection(db, 'articles')

  const createArticle = async (name: string, link: string) => {
    try {
      setLoading(true)
      setTimeout(async () => {
        const newArticle = {
          article_name: name,
          article_link: link,
          user_uid: auth.currentUser?.uid,
        }
        await addDoc(articlesCollectionRef, newArticle)

        setLoading(false)
      }, 1000)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <>
      {' '}
      {ArticlesData.map((article, index) => {
        return (
          <Article key={index}>
            <InfoWrapper>
              <ArticleName>{article.title}</ArticleName>
              <ArticleLink href={article.link} target='_blank'>
                {article.link}
              </ArticleLink>
            </InfoWrapper>

            <AddButton onClick={() => createArticle(article.title, article.title)}>
              {' '}
              {!loading && 'Salvar Artigo'}
              {loading && (
                <span className='indicator-progress' style={{ display: 'block' }}>
                  Carregando...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </AddButton>
          </Article>
        )
      })}
    </>
  )
}

export default TrendingArticles
