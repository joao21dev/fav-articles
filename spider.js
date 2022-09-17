/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

request('https://www.showmetech.com.br/noticias/', (error, response, body) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(body)

    $('.cs-entry-default').each(function (i, element) {
      const title = $(element).find('h2.cs-entry__title a').text()
      const link = $(element).find('h2.cs-entry__title a').attr('href')
      console.log(title, link)
      const articlesList = [title, link]

      fs.appendFile('imdb.json', JSON.stringify(articlesList, null, 2), function (err) {
        if (err) throw err
        console.log('Arquivo salvo com sucesso!')
      })
    })
  }
})
