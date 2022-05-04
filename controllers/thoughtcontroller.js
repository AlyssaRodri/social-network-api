const { User, Thought } = require("../models")

module.exports = {
    //Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(throughts))
            .catch((err) => res.status(500).json(err))
    },
    //Get one thought by it's _id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select("-__v")
            .then((thought) => 
                !thought
                ? res.status(404).json({ message: "There are no thoughts with that ID"})
                : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    //Create a new though
        //(don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)
    
    //Update a thought by it's _id
    
    //Delete a thought by it's _id


}