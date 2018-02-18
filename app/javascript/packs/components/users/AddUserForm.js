import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addUser } from '../../actions/add_user_action'


class AddUserForm extends Component {

  handleOnChange = (event) => {
    const { name, value } = event.target //the above line of code is the same as:
    this.setState({                       // const name = event.target.name
      [name]: value,                    // const value = event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
      this.props.addUser(this.state, () => {
        this.props.history.push('/')
      })
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
                onChange={(event) => this.handleOnChange(event)} />

          </div>

          <div className="form-group">
              <label htmlFor="age"> Age </label>
              <input
                className="form-control"
                name="age"
                onChange={(event) => this.handleOnChange(event)} />
          </div>

          <div className="form-group">
              <label htmlFor="state"> State </label>
              <input
                className="form-control"
                name="state"
                onChange={(event) => this.handleOnChange(event)} />
          </div>

          <div className="form-group">
              <label htmlFor="city"> City </label>
              <input
                className="form-control"
                name="city"
                onChange={(event) => this.handleOnChange(event)} />
          </div>

          <div className="form-group">
              <label htmlFor="about_me"> About Me </label>
              <textarea
                className="form-control"
                name="about_me"
                onChange={(event) => this.handleOnChange(event)} />
          </div>

          <div className="form-group">
              <label htmlFor="past_jobs"> Past Jobs </label>
              <textarea
                className="form-control"
                name="past_jobs"
                onChange={(event) => this.handleOnChange(event)} />
          </div>

          <div className="form-group">
              <label htmlFor="interests"> Interests </label>
              <textarea
                className="form-control"
                name="interests"
                onChange={(event) => this.handleOnChange(event)} />
          </div>

          <div className="form-group">
              <label htmlFor="schools"> Schools </label>
              <textarea
                className="form-control"
                name="schools"
                onChange={(event) => this.handleOnChange(event)} />
          </div>

          <div className="form-group">
              <label htmlFor="languages"> Languages </label>
              <textarea
                className="form-control"
                name="languages"
                onChange={(event) => this.handleOnChange(event)} />
          </div>

          <div className="form-group">
              <label htmlFor="fav_movies"> Favourite Movies </label>
              <textarea
                className="form-control"
                name="fav_movies"
                onChange={(event) => this.handleOnChange(event)} />
          </div>

          <div className="form-group">
              <label htmlFor="fav_food"> Favourite Food </label>
              <textarea
                className="form-control"
                name="fav_food"
                onChange={(event) => this.handleOnChange(event)} />
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
