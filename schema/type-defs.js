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

    ###### INPUTS ######
    input NewBoxerInfo {
        name: String!
        record: String!
        nationality: String!
        active: Boolean!
    }

    input UpdateBoxerInfo {
        id: ID!
        newName: String!
        newRecord: String!
        newNationality: String
        newActivity: Boolean!
    }

    ###### REQUESTS ######
    type Query {
        boxers: [Boxer!]!
        boxer(id: ID!): Boxer!
    }

    type Mutation {
        createBoxer(input: NewBoxerInfo!): Boxer
        deleteBoxer(id: ID!): Boxer
        updateBoxer(input: UpdateBoxerInfo): Boxer
    }    
`

module.exports = { typeDefs }