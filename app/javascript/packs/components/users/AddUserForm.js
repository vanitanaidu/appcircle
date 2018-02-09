import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addUser } from '../../actions/add_user_action'


class AddUserForm extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleOnChange = (event) => {
    const { name, value } = event.target //the above line of code is the same as:
    this.setState({                       // const name = event.target.name
        [name]: value,                    // const value = event.target.value
    })
  }

handleOnSubmit = (event) => {
  event.preventDefault()
      this.props.addUser(this.state)
      .then(() => {
        this.context.router.push('/')
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

function mapStateToProps(state) {
  return { addUser: state.users.users } // the last user in state.
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addUser: addUser}, dispatch)
}

 export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);



// have an action for the form. The action is gonna be in charge of adding users to the redux state.
// After that, we send our action to the reducer.Then we will use mapStateToProps and mapDispatchToProps
// to access the results from the reducer
