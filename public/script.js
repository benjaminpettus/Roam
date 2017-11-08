document.addEventListener("DOMContentLoaded", function(event) {
console.log('scripting in the browser')



const ELEMENTS = {
  editProfileBtn: () => document.getElementById('edit-profile-button'),
  editProfileName: () => document.getElementById('edit-username'),
  editProfileCity: () => document.getElementById('edit-city')
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
  }

}

UI.addAllEventListeners()
});
