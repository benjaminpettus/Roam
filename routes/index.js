const express = require('express')
const router = express.Router()
const user = require('../db/user')
const preAuth = require('./pre-auth')

router.use('/', preAuth)









module.exports = router
