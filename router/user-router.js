const express = require("express")
const Users = require('./user-model')

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        res.json(await Users.find())
    } catch(err){
        next(err)
    }
})

module.exports = router