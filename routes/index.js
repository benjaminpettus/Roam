const express = require('express')
const router = express.Router()
const user = require('./user')
const preAuth = require('./pre-auth')
const post = require('./post')

router.use('/', preAuth)
router.use('/user', user)
router.use('/post', post)
// router.use('/city', city)








module.exports = router
