/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react'
import { auth, db } from '../firebase-config'
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore'

const ArticleContext = createContext()
const articlesCollectionRef = collection(db, 'articles')

export const ArticleContextProvider = ({ children }) => {
  const getArticles = async () => {
    const data = await getDocs(articlesCollectionRef)
    return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  }

  const registerArticle = async (articleLink, articleName) => {
    await addDoc(articlesCollectionRef, {
      article_link: articleLink,
      article_name: articleName,
      user_uid: auth.currentUser.uid,
    })
  }

  const editArticle = async (articleId, articleLink, articleName) => {
    const articleDocRef = doc(db, 'articles', articleId)
    await setDoc(articleDocRef, {
      article_link: articleLink,
      article_name: articleName,
      user_uid: auth.currentUser.uid,
    })
  }

  const deleteArticle = async (articleId) => {
    const articleDocRef = doc(db, 'articles', articleId)
    await deleteDoc(articleDocRef)
  }

  return (
    <ArticleContext.Provider value={{ getArticles, registerArticle, deleteArticle, editArticle }}>
      {children}
    </ArticleContext.Provider>
  )
}

export const useArticles = () => {
  return useContext(ArticleContext)
}
