const router = require("express").Router();
const {
    getUsers,
    getOneUser,
    createUser,
    updateUserById,
    removeUserById,
    addFriendById,
    deleteFriendById
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser)

// /api/users/:userId
router.route("/:userId").get(getOneUser).put(updateUserById).delete(removeUserById)

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriendById).delete(deleteFriendById)

module.exports = router;

