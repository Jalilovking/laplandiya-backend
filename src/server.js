const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const app = express()
const modules = require('./modules')

const server = new ApolloServer({ 
    modules
})

server.applyMiddleware({ app })

app.listen({ port: 8000 }, () => {
    console.log('http://localhost:8000' + server.graphqlPath)
    console.log('ws://localhost:8000' + server.subscriptionsPath)
})