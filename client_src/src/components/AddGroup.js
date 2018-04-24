import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class AddGroup extends Component {

  addGroup(newGroup) {
    // console.log(newGroup)
    axios.request({
      method: `post`,
      url: `http://localhost:3000/api/groups`,
      data: newGroup
    }).then(response => {
      this.props.history.push('/')
    }).catch(err => console.log(err))
  }

  onSubmit(e) {
    console.log(`submitted ${this.refs.name.value} ${this.refs.city.value} ${this.refs.address.value}`)
    const newGroup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    }
    this.addGroup(newGroup)
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Link to="/"> Back to Groups </Link>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
              <input type="text" name="name" ref="name" placeholder="name" />
          </div>
          <div className="input-field">
              <input type="text" name="city" ref="city" placeholder="city" />
          </div>
          <div className="input-field">
              <input type="text" name="address" ref="address" placeholder="address" />
          </div>
          <input type="submit" value="Save" />
        </form>
      </div>
    )
  }
}

export default AddGroup