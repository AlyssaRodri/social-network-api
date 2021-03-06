const { Schema, model, Types, ObjectId } = require('mongoose');

//Here I create the Reaction Schema. It does not have it's own because it only exists inside of thought

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId()

        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,

        }
    },
    {
        toJSON:{
            getters: true
        }
    }
)

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
        },    
        username: {
            type: String,
            required: true,
        },    
        reactions: [reactionSchema]
    },    
    {
        toJSON: {
          getters: true,  
          virtuals: true
        }  
    }    
)    

thoughtSchema
    .virtual("reactionCount")
    .get( function (){
        return this.reactions.length
    })    

    

const Thought = model("thought", thoughtSchema);


module.exports = Thought