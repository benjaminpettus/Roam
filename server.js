const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')
require('dotenv').config()
const router = require('./routes')
const passport = require('./auth/passport')
const session = require('express-session')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/bulma', express.static('node_modules/bulma/css'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(session({
  key: 'user_sid',
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    expires: 500000
  }
}))

app.use(passport.initialize())
app.use(passport.session())
//
// app.use(( request, response, next ) => {
//   if(!( request.cookies && request.cookies.user_sid )){
//     response.clearCookie('user_sid')
//   }
//   next()
// })


app.use(router)

app.use(( request, response ) => {
  response.status(404).render('not-found')
})

app.listen(port, () => {
  console.log("app is running on " + port)
})
