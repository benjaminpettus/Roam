const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'views')))

app.set('view engine', 'ejs')

app.get('/', (request, response) => {
  response.render('index')
})

app.listen(port, () => {
  console.log("app is running on " + port)
})
