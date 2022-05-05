const { User, Thought } = require("../models");
const { ObjectId } = require("mongoose").Types;

async function getUsers (req, res){
    try {
       const getAll = await User.find()
       return res.json(getAll) 
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

//Get one user by it's _id
async function getOneUser (req, res){
    try {
        const getOne = await User.findById(req.params.userId)
        return res.json(getOne)
    } catch (error) {
        console.log(error)
        return res.status(404).json(error)
    }
}

//Create a new user
async function createUser (req, res){
    try {
        const create = await User.create(req.body)
        return res.json(create)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

//Update a User
async function updateUserById (req, res){
    try {
        const updateUser = await User.updateOne(
            { _id: req.params.userId},
            req.body,
            { runValidators: true, new: true }
        )
        return res.json(updateUser)
    } catch (error) {
        console.log(error)
        return res.status(404).json(error)
    }
}

//Remove one user by their _id
async function removeUserById (req, res){
    try {
        const deleteUser = await User.deleteOne({_id: req.params.userId})
        return res.json(deleteUser)
    } catch (error) {
        console.log(error)
        return res.status(404).json(error)
    }
}

// Friends Section

//Add friend to Friend List
async function addFriendById (req, res){
    try {
        const newFriend = await User.findByIdAndUpdate(
            {_id: req.params.userId},
            {$addToSet: { friends: req.params.friendId}},
            { new: true}
        )
        return res.json(newFriend)
    } catch (error) {
        console.log(error)
        return res.status(404).json(error)
    }
}

// Remove a friend from friend list
async function deleteFriendById (req, res){
    try {
        const deleteFriend = await User.findByIdAndUpdate(
            {_id: req.params.userId},
            {$pull: { friends: req.params.friendId}},
            { new: true}        
        )
        return res.json(deleteFriend)
    } catch (error) {
        console.log(error)
        return res.status(404).json(error)
    }
}

module.exports = {
    getUsers,
    getOneUser,
    createUser,
    updateUserById,
    removeUserById,
    addFriendById,
    deleteFriendById
}