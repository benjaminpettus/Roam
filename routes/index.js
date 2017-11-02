const express = require('express')
const router = express.Router()
const user = require('./user')
const preAuth = require('./pre-auth')

router.use('/', preAuth)
router.use('/user', user)








module.exports = router
