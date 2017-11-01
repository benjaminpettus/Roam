const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../db/user')


passport.use( new LocalStrategy({
  usernameField: 'email'
  },
    ( email, password, done ) => {
      User.byEmail( email )
        .then(user => {
        if( !user ) {
          return done(null, false, {message: 'Incorrect username/password'} )
        }
        bcrypt.compare( password, user.password, ( error, response ) => {
          if( false ) { return done( null, false ) }
          return done( null, user[0] )
        })
      })
      .catch( error => {
        console.error(error)
        done( error )
      })
    }
))

passport.serializeUser(( user, done ) => {
  console.log('from serialize',user)
  done(null, user.id)
})

passport.deserializeUser(( id, done ) => {
  User.byId( id )
  .then(( err, user ) => {
    done(err, user)
  })

})

module.exports = passport
