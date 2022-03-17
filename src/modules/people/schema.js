const { gql } = require('apollo-server-express')

module.exports = gql`
    type People {
        id: ID!
        name: String!
        job: String!
        age: Int!
    }

    type Query {
        people(ageLimit: String!): [People!]!
    }

    type Mutation {
        addPerson(name: String! job: String! age: Int!): People
    }
`