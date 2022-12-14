/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useArticles } from '../../context/ArticleContext'
import { useAuth } from '../../context/AuthContext'
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
const RefreshButton = styled(AddButton)`
  background-color: #282842;
  margin-bottom: 10px;
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
  const [articleName, setArticleName] = useState('')
  const [articleLink, setArticleLink] = useState('')
  const [articleId, setArticleId] = useState('')
  const { getArticles, deleteArticle, registerArticle, editArticle } = useArticles()
  const { user } = useAuth()
  const [error, setError] = useState('')

  const fetchData = async () => {
    const data = await getArticles()
    setArticles(data)
  }

  const handleRegister = async () => {
    try {
      setLoading(true)
      setTimeout(async () => {
        await registerArticle(articleLink, articleName)
        getArticles()
        reset()
        setLoading(false)
      }, 1000)
    } catch (e: any) {
      setError(e.message)
      console.log(e.message)
    }
  }

  const handleEdit = (articleId: string, articleName: string, articleLink: string) => {
    try {
      setLoading(true)
      setTimeout(async () => {
        await editArticle(articleId, articleLink, articleName)

        reset()
        setLoading(false)
        window.location.href = '/'
      }, 1000)
    } catch (e: any) {
      setError(e.message)
      console.log(e.message)
    }
  }

  const handleDelete = async (articleId: string | undefined) => {
    try {
      setLoading(true)
      setTimeout(async () => {
        await deleteArticle(articleId)
        setLoading(false)
        window.location.href = '/'
      }, 1000)
    } catch (e: any) {
      setError(e.message)
      console.log(e.message)
    }
  }

  const getArticleId = (id: any, name: string, link: string) => {
    setArticleId(id)
    setArticleName(name)
    setArticleLink(link)
  }

  const reset = () => {
    setArticleName('')
    setArticleLink('')
    setArticleId('')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <RefreshButton onClick={() => (window.location.href = '/')}>
        {' '}
        {!loading && 'Atualizar Lista'}
        {loading && (
          <span className='indicator-progress' style={{ display: 'block' }}>
            Carregando...{' '}
            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
          </span>
        )}
      </RefreshButton>
      {articles
        .filter((article) => article.user_uid === user.uid)
        .map((article: IArticleModel) => {
          return (
            <Article key={article.id}>
              <InfoWrapper>
                <ArticleName>{article.article_name}</ArticleName>
                <ArticleLink href={article.article_link} target='_blank'>
                  {article.article_link}
                </ArticleLink>
              </InfoWrapper>
              <EditButton
                onClick={() => getArticleId(article.id, article.article_name, article.article_link)}
              >
                <AiFillEdit size={32} color='#f0ad4e' />
              </EditButton>
              <DeleteButton onClick={() => handleDelete(article.id)}>
                <AiFillDelete size={32} color='#d9534f' />
              </DeleteButton>
            </Article>
          )
        })}
      <ArticleInputWrapper>
        <InfoInputWrapper>
          <ArticleNameInput
            value={articleName}
            onChange={(e) => setArticleName(e.target.value)}
            placeholder={articleId ? articleName : 'Nome do artigo a ser adicionado'}
          />
          <ArticleLinkInput
            value={articleLink}
            onChange={(e) => setArticleLink(e.target.value)}
            placeholder={articleId ? articleLink : 'Link do artigo a ser adicionado'}
          />
        </InfoInputWrapper>
      </ArticleInputWrapper>
      <AddWrapper>
        <AddButton
          onClick={
            !articleId ? handleRegister : () => handleEdit(articleId, articleLink, articleName)
          }
        >
          {' '}
          {!loading && !articleId && 'Salvar Artigo'}
          {!loading && articleId && 'Editar Artigo'}
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
