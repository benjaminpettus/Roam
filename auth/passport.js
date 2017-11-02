const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../db/user')


passport.use( new LocalStrategy({
  usernameField: 'email'
  },
    ( email, password, done ) => {
      console.log('1')
      User.byEmail( email )
        .then(user => {
          console.log('2')
        if( !user ) {
          console.log('3')
          return done(null, false, {message: 'Incorrect username/password'} )
        }
        bcrypt.compare( password, user.password, ( error, response ) => {
          console.log('4')
          if( false ) {
            console.log('5')
            return done( null, false )
          }
          console.log('6')
          console.log('user from login', user)
          return done( null, user[0] )
        })
      })
      .catch( error => {
        console.log('7')
        console.error(error)
        done( error )
      })
    }
))

passport.serializeUser(( user, done ) => {
  done(null, user.id)
})

passport.deserializeUser(( id, done ) => {
  User.byId( id )
    .then(( user, error ) => {
      done( error, user )
    })
})

module.exports = passport
