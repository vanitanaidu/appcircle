import React, { Component } from 'react';
//
// import UserDetails from './UserDetails';
import Users from './index';



class AddUserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profile_pics: "",
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
      schools: "",

    }
    this.state = this.initialState
  }

  // handlePhotoChange = (e) => {
  //   this.setState({
  //     profilepics: [...this.state.profilepics, e.target.value]
  //   })
  // }


  handleOnChange = (event) => {
    const { name, value } = event.target //the above line of code is the same as:
    this.setState({                       // const name = event.target.name
        [name]: value,                    // const value = event.target.value
    })
  }

handleOnSubmit = (event) => {
  event.preventDefault()
  this.props.addUser(this.state)


  // this.props.store.dispatch(addUserDetail(this.state)) // addUserDetail here is the action and this.state is state. Dispatch is called on the state and action to persist changees in the state
//   const userData = Object.assign({}, this.state)
//   //  debugger
//   const request = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       user: userData
//     })
//   }
//
//   fetch('/MyProfilePage', request)
//   .then(response => response.json())
//   .then(user => this.props.addUser(user))
//
 }


    render() {

      return (
        <div>
          <h3 className="header"> Add New User </h3>
          <form className="new_video_form" onSubmit={(event) => this.handleOnSubmit(event)}>

            <div>
              <div>
                <label htmlFor="name"> Name </label>
              </div>
                <input
                  type="text"
                  name="name"
                  onChange={(event) => this.handleOnChange(event)} />
            </div>
            /* if you want to call `onChange={this.handleOnChange}``, you have bind it to `this` at the top. Else the syntax would be .. onChange={(event) => this.handleOnChange(event)} */

            <div>
              <div>
                <label htmlFor="about_me"> About Me </label>
              </div>
                <textarea
                  name="about_me"
                  onChange={(event) => this.handleOnChange(event)} />
            </div>

            <div>
              <div>
                <label htmlFor="age"> Age </label>
              </div>
                <textarea
                  name="age"
                  onChange={(event) => this.handleOnChange(event)} />
            </div>

            <div>
              <div>
                <label htmlFor="past_jobs"> Past Jobs </label>
              </div>
                <textarea
                  name="past_jobs"
                  onChange={(event) => this.handleOnChange(event)} />
            </div>

            <div>
              <div>
                <label htmlFor="interests"> Interests </label>
              </div>
                <textarea
                  name="interests"
                  onChange={(event) => this.handleOnChange(event)} />
            </div>

            <div>
              <div>
                <label htmlFor="schools"> Schools </label>
              </div>
                <textarea
                  name="schools"
                  onChange={(event) => this.handleOnChange(event)} />
            </div>

            <div>
              <div>
                <label htmlFor="languages"> Languages </label>
              </div>
                <textarea
                  name="languages"
                  onChange={(event) => this.handleOnChange(event)} />
            </div>

            <div>
              <div>
                <label htmlFor="fav_movies"> Favourite Movies </label>
              </div>
                <textarea
                  name="fav_movies"
                  onChange={(event) => this.handleOnChange(event)} />
            </div>

            <div>
              <div>
                <label htmlFor="fav_food"> Favourite Food </label>
              </div>
                <textarea
                  name="fav_food"
                  onChange={(event) => this.handleOnChange(event)} />
            </div>

            <div>
              <div>
                <label htmlFor="state"> State </label>
              </div>
                <textarea
                  name="state"
                  onChange={(event) => this.handleOnChange(event)} />
            </div>

            <div>
              <div>
                <label htmlFor="city"> City </label>
              </div>
                <textarea
                  name="city"
                  onChange={(event) => this.handleOnChange(event)} />
            </div>

            <div>
                <input
                    name="profile_pics"
                    type="file"
                    multiple={true}
                    accept="image/*"
                    id="profile_pics"
                    onChange={(event) => this.handleOnChange(event)} />
                    className="form-control"
                  />
                </div>
              <button type="submit"> Save My Profile </button>
          </form>
        </div>
      )
    }

}


export default AddUserForm;
