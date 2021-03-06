/**
 * file: config.js
 * description: file responsible for all application configuration
 * date: 07/24/2020
 * author: Glaucia Lemos & Chris Noring
 */

module.exports = {
  base: '/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  logo: 'bit.png',
  title: 'Workshop about GraphQL + .NET Core + Azure Functions',
  description: 'Workshop about GraphQL + .NET Core + Azure Functions',
  markdown: {
    lineNumbers: true,
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Workshop about GraphQL + .NET Core + Azure Functions',
      description: 'Workshop about GraphQL + .NET Core + Azure Functions',
    },
    '/pt-br/': {
      lang: 'pt-BR',
      title: 'Workshop GraphQL + .NET Core + Azure Functions',
      description: 'Workshop GraphQL + .NET Core + Azure Functions',
    },
  },
  themeConfig: {
    repo: 'https://github.com/softchris/graphql-workshop-dotnet',
    editLinks: true,
    editLinkText: 'Do you found an error? So, help us to improve this worskhop',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Main Page', link: '/' },
          { text: 'Videos', link: 'https://channel9.msdn.com/Search?term=graphql&lang-en=true&WT.mc_id=workshop_graphql-github-chnoring' },
          { text: 'Doubts?', link: 'https://github.com/softchris/graphql-workshop-dotnet/issues' },
          { text: 'Code of Conduct', link: '/workshop/CODE_OF_CONDUCT' },
        ],
        sidebar: [
          { title: '🍕 Introduction - What is GraphQL and Serverless?', children: ['/workshop/1'] },
          { title: '🔎 The GraphQL API', children: ['/workshop/2'] },
          { title: '📦 Microservices and Docker', children: ['/workshop/3'] },
          { title: '☁️ Serverless Functions', children: ['/workshop/4'] },
          { title: '🚀 Deploy your app', children: ['/workshop/5'] }
        ],
      },
      '/pt-br/': {
        selectText: 'Idiomas',
        label: 'Português',
        nav: [
          { text: 'Página Principal', link: '/pt-br/' },
          { text: 'Videos', link: 'https://channel9.msdn.com/Search?term=graphql&lang-en=true&WT.mc_id=workshop_graphql-github-gllemos' },
          { text: 'Dúvidas', link: 'https://github.com/softchris/graphql-workshop-dotnet/issues' },
          { text: 'Código de Conduta', link: '/pt-br/CODE_OF_CONDUCT' },
        ],
        sidebar: [
          { title: '🍕 Introdução - O que é GraphQL e computação sem servidor?', children: ['/pt-br/workshop/1'] },
          { title: '🔎 API do GraphQL', children: ['/pt-br/workshop/2'] },
          { title: '📦 Microsserviços e o Docker', children: ['/pt-br/workshop/3'] },
          { title: '☁️ Funções sem servidor', children: ['/pt-br/workshop/4'] },
          { title: '🚀 Implantando sua aplicação', children: ['/pt-br/workshop/5'] }  
        ]
      },
    }, // fim colchete de locales
  }
}