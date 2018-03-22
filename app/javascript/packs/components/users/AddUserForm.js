import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { addUser } from '../../actions/add_user_action'


class AddUserForm extends Component {
  state = {
    nameError: "",
    ageError: "",
    stateError: "",
    cityError: "",
    interestsError: "",
  }

  handleOnChange = (event) => {
    const { name, value } = event.target //the above line of code is the same as:
      this.setState({                       // const name = event.target.name
        [name]: value,                    // const value = event.target.value
      })
  }

  validate = () => {
    let isError = false
    const numbers = /^[0-9]+$/;
    const errors = {
      nameError: "",
      ageError: "",
      stateError: "",
      cityError: "",
      interestsError: "",
    }

    if(!this.state.name) {
      isError = true
      errors.nameError = 'name is required'
    }

    if(!this.state.age) {
      isError = true
      errors.ageError = 'age is required'
    } else {
        if(!this.state.age.match(numbers)) {
          isError = true
          errors.ageError = 'please enter a number'
        }
      }

    if(!this.state.city) {
      isError = true
      errors.cityError = 'city is required'
    }

    if(!this.state.state) {
      isError = true
      errors.stateError = 'state is required'
    }

    if(!this.state.interests) {
      isError = true
      errors.interestsError = 'interest is required'
    }

    this.setState({
      ...this.state,
      ...errors
    })
    return isError
  }


  handleOnSubmit = (event) => {
    event.preventDefault()
    const err = this.validate()
    if(!err) {
     this.props.addUser(this.state, () => {
        this.props.history.push('/')
      })
    }
  }

  render() {

    return (
      <div >
        <form onSubmit={this.handleOnSubmit}>

          <div className="form-group">
              <label htmlFor="name"> Name </label>
              <input
                className="form-control"
                type="text"
                name="name"
                ref="name"
                onChange={(event) => this.handleOnChange(event)}
              />
              {this.state.nameError ? <div className="alert alert-danger">{this.state.nameError}</div> : null}
          </div>

          <div className="form-group">
              <label htmlFor="age"> Age </label>
              <input
                className="form-control"
                name="age"
                ref="age"
                onChange={(event) => this.handleOnChange(event)}
               />
              {this.state.ageError ? <div className="alert alert-danger">{this.state.ageError}</div> : null}
          </div>

          <div className="form-group">
              <label htmlFor="state"> State </label>
              <input
                className="form-control"
                name="state"
                ref="state"
                onChange={(event) => this.handleOnChange(event)}
              />
              {this.state.stateError ? <div className="alert alert-danger">{this.state.stateError}</div> : null}
          </div>

          <div className="form-group">
              <label htmlFor="city"> City </label>
              <input
                className="form-control"
                name="city"
                ref="city"
                onChange={(event) => this.handleOnChange(event)}
               />
               {this.state.cityError ? <div className="alert alert-danger">{this.state.cityError}</div> : null}

          </div>

          <div className="form-group">
              <label htmlFor="about_me"> About Me </label>
              <textarea
                className="form-control"
                name="about_me"
                ref="about_me"
                onChange={(event) => this.handleOnChange(event)}
              />
          </div>

          <div className="form-group">
              <label htmlFor="past_jobs"> Past Jobs </label>
              <textarea
                className="form-control"
                name="past_jobs"
                ref="past_jobs"
                onChange={(event) => this.handleOnChange(event)}
               />
          </div>

          <div className="form-group">
              <label htmlFor="interests"> Interests </label>
              <textarea
                className="form-control"
                name="interests"
                ref="interests"
                onChange={(event) => this.handleOnChange(event)}
               />
              {this.state.interestsError ? <div className="alert alert-danger">{this.state.interestsError}</div> : null}
          </div>

          <div className="form-group">
              <label htmlFor="schools"> Schools </label>
              <textarea
                className="form-control"
                name="schools"
                ref="schools"
                onChange={(event) => this.handleOnChange(event)}
               />
          </div>

          <div className="form-group">
              <label htmlFor="languages"> Languages </label>
              <textarea
                className="form-control"
                name="languages"
                ref="languages"
                onChange={(event) => this.handleOnChange(event)}
               />
          </div>

          <div className="form-group">
              <label htmlFor="fav_movies"> Favourite Movies </label>
              <textarea
                className="form-control"
                name="fav_movies"
                ref="fav_movies"
                onChange={(event) => this.handleOnChange(event)}
              />
          </div>

          <div className="form-group">
              <label htmlFor="fav_food"> Favourite Food </label>
              <textarea
                className="form-control"
                name="fav_food"
                ref="fav_food"
                onChange={(event) => this.handleOnChange(event)}
              />
          </div>
            <button className="save-user-button float-right " type="submit"> Save My Profile </button>

        </form>
      </div>
      )
    }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({addUser: addUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(AddUserForm);



// have an action for the form. The action is gonna be in charge of adding users to the redux state.
// After that, we send our action to the reducer.Then we will use mapStateToProps and mapDispatchToProps
// to access the results from the reducer
