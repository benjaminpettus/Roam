const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const path = require('path')
const routes = require('./routes')
const passport = require('./auth/passport')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/bulma', express.static('node_modules/bulma/css'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(passport.initialize())

app.use(routes)


app.listen(port, () => {
  console.log("app is running on " + port)
})
