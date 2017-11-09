document.addEventListener("DOMContentLoaded", function(event) {
console.log('scripting in the browser')



const ELEMENTS = {
  editProfileBtn: () => document.getElementById('edit-profile-button'),
  editProfileName: () => document.getElementById('edit-username'),
  editProfileCity: () => document.getElementById('edit-city'),
  addPostBtn: () => document.getElementById('add-post-button'),
  addPostTitle: () => document.getElementById('add-title'),
  addPostContent: () => document.getElementById('add-content')
}


const ACTIONS = {
  userUpdate: (userId, username, city) => {

    const data = {
      "username": `${username}`,
      "city": `${city}`
    }

    fetch(`/user/${userId}/edit-user`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(HELPERS.checkStatus)
    .catch( error => console.error )
  },

  addPost: (title, content, userId, city) => {
    //flesh out the fetch request
    console.log(title, content, userId, city)
  }
}

const HELPERS = {
  checkStatus: (response) => {
    if (response.status >= 200 && response.status < 300 ) {
      return response
    } else {
      let error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
}

const UI = {

  refresh: () => {
    //refresh dom
  },
  addAllEventListeners: () => {
    //SAVE BUTTON ON EDIT-PROFILE PAGE
    if(ELEMENTS.editProfileBtn()) {
      return ELEMENTS.editProfileBtn().addEventListener('click', (event) => {
         const { userid } = event.target.dataset
         const cityName = ELEMENTS.editProfileCity().value
         const userName = ELEMENTS.editProfileName().value
        ACTIONS.userUpdate( userid ,userName, cityName )
        event.preventDefault()
        window.location = `/user/${userid}`
      })
    }

    if(ELEMENTS.addPostBtn()) {
      return ELEMENTS.addPostBtn().addEventListener('click', (event) => {
        const title = ELEMENTS.addPostTitle().value
        const content = ELEMENTS.addPostContent().value
        const { city, userid } = event.target.dataset
        if( title == '' || content == '' ) {
          alert('You must enter a title and content!!!')
        }
        //create fetch request
        ACTIONS.addPost(title, content, userid ,city )

      })
    }



  }

}

UI.addAllEventListeners()
});
