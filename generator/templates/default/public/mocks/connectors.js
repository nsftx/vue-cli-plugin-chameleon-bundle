export default {
  '9c199b8e-6aea-4e21-aa8c-fe736101e44f': {
    id: '9c199b8e-6aea-4e21-aa8c-fe736101e44f',
    name: 'Sample Generic Connector',
    type: {
      name: 'genericHttp',
      type: 'rest',
      description: 'Generic HTTP Connector',
      disabled: false,
      multipleInstances: true,
    },
    options: {
      endpoint: 'https://chameleon-generic-http-api.herokuapp.com',
      auth: {},
    },
    sources: {
      articles: {
        name: 'articles',
        id: 'articles',
        model: 'Article',
      },
      'articles-extended': {
        name: 'articles-extended',
        id: 'articles-extended',
        model: 'Article-extended',
      },
      categories: {
        name: 'categories',
        id: 'categories',
        model: 'Category',
      },
      'categories-extended': {
        name: 'categories-extended',
        id: 'categories-extended',
        model: 'Category-extended',
      },
    },
  },
};
