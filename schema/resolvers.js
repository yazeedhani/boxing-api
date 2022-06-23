// Require Boxer mongoose model
const Boxer = require('./../app/models/boxer')

const resolvers = {
    Query: {
        boxers: async (parent, args, context) => {
            console.log('ALL BOXERS FETCHED.')
            return await Boxer.find()
        },

        boxer: async (parent, args, context) => {
            const id = args.id
            console.log('ONE BOXER FETCHED.')
            return await Boxer.findById(id)
        }
    },

    Mutation: {
        createBoxer: async (parent, args, context) => {
            console.log('BOXER CREATED.')
            return await Boxer.create(args.input)
        },

        deleteBoxer: async (parent, args, context) => {
            console.log('BOXER DELETED.')
            return await Boxer.findByIdAndDelete(args.id)
        },

        updateBoxer: async (parent, args, context) => {
            console.log('BOXER UPDATED.')
            console.log('ARGS.INPUT: ', args.input)
            return await (Boxer.findById(args.input.id)
                            .then( boxer => {
                                boxer.name = args.input.newName
                                boxer.record = args.input.newRecord
                                boxer.active = args.input.newActivity
                                boxer.nationality = args.input.newNationality
                                return boxer.save()
                            })
            )
        }
    }
}

module.exports = { resolvers }