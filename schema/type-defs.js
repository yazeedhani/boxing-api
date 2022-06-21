// Require gql from Apollo Server library to be able to create the schema types
const { gql } = require("apollo-server")

// Create your types (data and queries)
const typeDefs = gql`
    type Boxer {
        id: ID!
        name: String!
        record: String!
        active: Boolean!
        nationality: String!
    }

    ###### REQUESTS ######
    type Query {
        boxers: [Boxer!]!
        boxer: Boxer!
    }

    
`

module.exports = { typeDefs }