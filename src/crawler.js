/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const getArticles = async () => {
  try {
    const { data } = await axios.get('https://www.showmetech.com.br/noticias/')
    const $ = cheerio.load(data)
    const articlesList = []

    $('.cs-entry-default').each((_idx, el) => {
      const articleName = $(el).find('h2.cs-entry__title a').text()
      const articleLink = $(el).find('h2.cs-entry__title a').attr('href')
      articlesList.push({ title: articleName, link: articleLink })
    })
    const articlesData = 'export const TrendingData =' + JSON.stringify(articlesList, null, 1)
    fs.appendFile('articlesData.js', articlesData, function (err) {
      if (err) throw err
      console.log('Arquivo salvo com sucesso!')
    })

    return articlesList
  } catch (error) {
    throw error
  }
}

getArticles().then((articlesList) => console.log(articlesList))
