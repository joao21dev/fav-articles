# Devnology - Teste Programa de Trainee

Projeto desenvolvido para o desafio Devnology - Teste Programa de Trainee.

O que foi pedido: 
Você deve construir um sistema para salvar links de artigos de tecnologia. 
- Desenvolva uma API gerenciar links, com a URL e um título/label. Os links também podem ser editados e excluídos.
- Construa uma interface, como quiser, para que um usuário possa ver e gerenciar os links manualmente
- Automatize este processo de salvar links com um web crawler que importe artigos de seus blogs favoritos, como a [devGo](https://devgo.com.br/).
- Hospede sua aplicação em algum servidor.


O que foi entregue: O usuário consegue criar e logar com sua conta. Toda a autenticação foi feita utilizando [Firebase Auth](https://firebase.google.com/firebase/authentication
). Após logado a primeira página mostra um lista de artigos existentes (nome do artigo e link do artigo) adicionados pelo usuário e um input para criar novos artigos. Os artigos criados são salvos numa collection do firebase chamada articles que possui três fields: article_name, article_link e user_uid (id do usuário logado que criou o artigo). A outra página chamada Trending se refere a segunda parte do projeto, onde deveria ser criado um web crawler para mostrar artigos novos de blogs favoritos do usuário. Acabei fahando nessa parte, consegui criar o script usando o cheerio, retornando uma lista de artigos (título e url) do site https://www.showmetech.com.br/noticias/ e os colocando em uma nova file chamada articlesData.js, mas ficou faltando subir essa funcionalidade, pois só está rodando localmente. Já rodei o script então esse arquivo já existe e fornece os dados para página Trending. O usuário pode adicionar automaticmanete arquivos a partir dessa lista na pagina trending. Além de criar novos artigos o usuário também pode editar e deletar os seus artigos.

## Desenvolvimento

### Desenvolvido com
- React
- Styled Components
- [Firebase](https://firebase.google.com/firebase) (Firestore, Auth, Hosting)

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[git](https://git-scm.com) e [node.js](https://nodejs.org/en/).
Você também vai precisar de um editor de código, recomendo o [VS Code](https://code.visualstudio.com/).

### Rodando o projeto:

```shell
# Clone este repositório (ou download )
$ git clone git@github.com:joao21dev/fav-articles.git

# Acesse a pasta do projeto no terminal/cmd
$ cd fav-articles/

# Abra a pasta no editor de código (VS Code ou outro de sua preferência).

# Instale as dependências
$ yarn install

# Após a instalação, execute o comando para rodar a aplicação
$ yarn start

# Para rodar o web crawler:
$ cd src/
$ node crawler.js
```
