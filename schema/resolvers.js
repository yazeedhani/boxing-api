// Require Boxer mongoose model
const Boxer = require('./../app/models/boxer')

const resolvers = {
    Query: {
        boxers: (parent, args, context) => {
            return Boxer.find()
        }
    }
}

module.exports = { resolvers }