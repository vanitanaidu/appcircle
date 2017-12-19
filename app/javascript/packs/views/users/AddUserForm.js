import React, { Component } from 'react'

class AddUserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      about_me: "",
      past_jobs: "",
      interests: "",
      fav_movies: "",
      fav_food: "",
      friend_id: "",
      age: "",
      state: "",
      city: "",
      languages: "",
      schools: ""

    }
  }

handleOnSubmit = (event) => {
  event.preventDefault()
  const userData = Object.assign({}, this.state)
  const request = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: userData
    })
  }
  fetch('/users', request)
  .then(response => response.json())
  .then(user => this.props.addUser(user))

}


handleOnChange = (event) => {
  const { name, value } = event.target //the above line of code is the same as:
  this.setState({                       // const name = event.target.name
      [name]: value,                    // const value = event.target.value
  })

}
    render() {
      return (
        <div>
          <h3 className="header"> Add New User </h3>
          <form className="new_video_form" onSubmit={this.handleOnSubmit}>

            <div>
              <div>
                <label htmlFor="name"> Name </label>
              </div>
                <input
                  type="text"
                  name="name"
                  onChange={this.handleOnChange}/>
            </div>

            <div>
              <div>
                <label htmlFor="about_me"> About Me </label>
              </div>
                <textarea
                  name="about_me"
                  onChange={this.handleOnChange} />
            </div>

            <div>
              <div>
                <label htmlFor="age"> Age </label>
              </div>
                <textarea
                  name="age"
                  onChange={this.handleOnChange} />
            </div>

            <div>
              <div>
                <label htmlFor="past_jobs"> Past Jobs </label>
              </div>
                <textarea
                  name="past_jobs"
                  onChange={this.handleOnChange} />
            </div>

            <div>
              <div>
                <label htmlFor="interests"> Interests </label>
              </div>
                <textarea
                  name="interests"
                  onChange={this.handleOnChange} />
            </div>

            <div>
              <div>
                <label htmlFor="schools"> Schools </label>
              </div>
                <textarea
                  name="schools"
                  onChange={this.handleOnChange} />
            </div>

            <div>
              <div>
                <label htmlFor="languages"> Languages </label>
              </div>
                <textarea
                  name="languages"
                  onChange={this.handleOnChange} />
            </div>

            <div>
              <div>
                <label htmlFor="fav_movies"> Favourite Movies </label>
              </div>
                <textarea
                  name="fav_movies"
                  onChange={this.handleOnChange} />
            </div>

            <div>
              <div>
                <label htmlFor="fav_food"> Favourite Food </label>
              </div>
                <textarea
                  name="fav_food"
                  onChange={this.handleOnChange} />
            </div>

            <div>
              <div>
                <label htmlFor="state"> State </label>
              </div>
                <textarea
                  name="state"
                  onChange={this.handleOnChange} />
            </div>

            <div>
              <div>
                <label htmlFor="city"> City </label>
              </div>
                <textarea
                  name="city"
                  onChange={this.handleOnChange} />
            </div>

              <button type="submit"> Upload Profile </button>
          </form>
        </div>
      )
    }
}

export default AddUserForm
