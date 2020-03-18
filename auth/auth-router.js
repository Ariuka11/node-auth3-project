const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/register', async (req, res, next) => {
    try {
        
    } catch(err) {
        next(err)
    }
})

router.post('/login', async (req, res, next) => {
    try {

    } catch(err) {
        next(err)
    }
})

module.exports = router