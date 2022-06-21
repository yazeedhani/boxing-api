// Require Boxer mongoose model
const Boxer = require('./../app/models/boxer')

const resolvers = {
    Query: {
        boxers: (parent, args, context) => {
            let allBoxers
            Boxer.find()
                .then( boxers => {
                    console.log('BOXERS: ', boxers)
                    allBoxers = boxers
                    // return boxers.map( boxer => boxer.toObject())
                })
                // .then( boxers => {return boxers.toJSON()})
                .catch( console.error )
            console.log('BOXERS: ', allBoxers)
            return allBoxers
        }
    }
}

module.exports = { resolvers }