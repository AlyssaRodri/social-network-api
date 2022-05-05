const { User, Thought } = require("../models")

//I used the mini project from the no sql unit for help

module.exports = {

    //Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err))
    },

    //Get one thought by it's _id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select("-__v")
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "There are no thoughts with that ID" })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    //Create a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            })
    },

    //Update a thought by it's _id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.courseId },
            { $set: req.body },
        )
    },

    //Delete a thought by it's _id
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId})
            .then((thought) =>
            !thought
                ? res.status(404).json({ message: "There are no thoughts with that ID" })
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // Reactions Section

    //Create a reaction
    createReaction(req, res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true })
            .then((thought) => 
                !thought
                    ? res.status(404).json({ message: "There are no thoughts with that ID"})
                    : res.json(thought)   
            ) .catch((err) => res.status(500).json(err))
    },

    //Delete a reaction
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions:{reactionId: req.params.reactionId } } },
            { new: true })
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: "There are no thoughts by that ID"})
            : res.json(thought)   
        ) .catch((err) => res.status(500).json(err))
    }

}