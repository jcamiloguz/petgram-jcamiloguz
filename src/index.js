import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import Context from './Context'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-jcamiloguz.jcamiloguz.vercel.app/graphql',
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
