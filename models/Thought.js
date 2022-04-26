const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //Getter method to format the timestamp on query
        },
        user: {
            type: String,
            required: true
        }
    }
)


//Here I create the Reaction Schema. It does not have it's own because it only exists inside of thought

const reactionSchema = new Schema (
    {
        
    }
)

module.exports = Thought