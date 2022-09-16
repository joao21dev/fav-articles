/* eslint-disable camelcase */
import { addDoc, collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { auth, db } from '../../firebase-config'
import { IArticleModel } from '../../models/Models'

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

const ArticleInputWrapper = styled(Article)`
  margin-bottom: 10px;
`
const InfoInputWrapper = styled(InfoWrapper)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const ArticleNameInput = styled.input`
  background: none;
  color: inherit;
  border: none;
  border-bottom: 2px solid #e7eaee;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 60%;
  cursor: text;
`
const ArticleLinkInput = styled(ArticleNameInput)`
  margin-top: 10px;
`

const ArticleCard = () => {
  const [articles, setArticles] = useState<IArticleModel[]>([])
  const [loading, setLoading] = useState(false)
  const articlesCollectionRef = collection(db, 'articles')
  const [articleName, setArticleName] = useState('')
  const [articleLink, setArticleLink] = useState('')

  const navigate = useNavigate()

  const createArticle = async () => {
    try {
      setLoading(true)
      setTimeout(async () => {
        const newArticle = {
          article_name: articleName,
          article_link: articleLink,
          user_uid: auth.currentUser?.uid,
        }
        await addDoc(articlesCollectionRef, newArticle)
        navigate('/')
        setLoading(false)
      }, 1000)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(articlesCollectionRef)
      setArticles(data.docs.map((doc) => ({ id: doc.id, ...doc.data() } as IArticleModel)))
    }
    getArticles()
  }, [])

  return (
    <>
      {articles
        .filter((article) => article.user_uid === `${auth.currentUser?.uid}`)
        .map((article: IArticleModel) => {
          return (
            <Article key={article.id}>
              <InfoWrapper>
                <ArticleName>{article.article_name}</ArticleName>
                <ArticleLink href={article.article_link} target='_blank'>
                  {article.article_link}
                </ArticleLink>
              </InfoWrapper>
              <EditButton>
                <AiFillEdit size={32} color='#f0ad4e' />
              </EditButton>
              <DeleteButton>
                <AiFillDelete size={32} color='#d9534f' />
              </DeleteButton>
            </Article>
          )
        })}
      <ArticleInputWrapper>
        <InfoInputWrapper>
          <ArticleNameInput
            onChange={(e) => setArticleName(e.target.value)}
            placeholder='Nome do artigo a ser adicionado'
          />
          <ArticleLinkInput
            onChange={(e) => setArticleLink(e.target.value)}
            placeholder='Link do artigo a ser adicionado'
          />
        </InfoInputWrapper>
      </ArticleInputWrapper>
      <AddWrapper>
        <AddButton onClick={createArticle}>
          {' '}
          {!loading && 'Salvar Artigo'}
          {loading && (
            <span className='indicator-progress' style={{ display: 'block' }}>
              Carregando...{' '}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </AddButton>
      </AddWrapper>
    </>
  )
}

export default ArticleCard
