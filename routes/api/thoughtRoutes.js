const router = require("express").Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require("../../controllers/thoughtcontroller")

// /api/thoughts
router.route("/").get(getThoughts)

// /api/thoughts/:userId
router.route("/:userId").post(createThought)

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reaction").post(createReaction)

// api/thoughts/reation/:reactionId
router.route("/:thoughtId/reaction/:reactionId").delete(deleteReaction)

module.exports = router;