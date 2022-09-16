import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import styled from 'styled-components'
import { db } from '../../firebase-config'
import { IArticleModel } from '../../models/Models'

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
  const [articles, setArticles] = React.useState<IArticleModel[]>([])
  const articlesCollectionRef = collection(db, 'articles')

  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(articlesCollectionRef)
      setArticles(data.docs.map((doc) => ({ id: doc.id, ...doc.data() } as IArticleModel)))
    }
    getArticles()
  }, [])

  return (
    <>
      {articles.map((article: IArticleModel) => {
        return (
          <Article key={article.id}>
            <InfoWrapper>
              <ArticleTitle>{article.article_name}</ArticleTitle>
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
      <AddWrapper>
        <AddButton>Novo Artigo</AddButton>
      </AddWrapper>
    </>
  )
}

export default ArticleCard
