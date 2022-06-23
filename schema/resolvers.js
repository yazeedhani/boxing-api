// Require Boxer mongoose model
const Boxer = require('./../app/models/boxer')

const validateName = (name) => {

    if(name === '')
    {
        console.log('NAME IS EMPTY.')
        return false
    }
    else if(name === ' ')
    {
        console.log('NAME IS ONLY A SPACE CHARACTER')
        return false
    }
    else if(/[0-9]/g.test(name))
    {
        console.log('NAME CONTAINS NUMBERS.')
        return false
    }

    return true
}

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
            console.log('BOXER CREATED: ', args.input)

            let validName = validateName(args.input.name)

            if(validName)
            {
                return await Boxer.create(args.input)
            }
            else
            {
                console.log('NAME NOT VALID.')
            }
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

module.exports = { resolvers, validateName }