import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class EditGroup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      city: '',
      address: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    this.getSingleDetails()
  }

  getSingleDetails() {
    let groupId = this.props.match.params.id
    axios.get(`http://localhost:3000/api/groups/${groupId}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        name: response.data.name,
        city: response.data.city,
        address: response.data.address
      }, () => {
        console.log(this.state)
      })
    })
    .catch(err => console.log(err))
  }

  editGroup(newGroup){
    axios.request({
      method: `put`,
      url: `http://localhost:3000/api/groups/${this.state.id}`,
      data: newGroup
    }).then(response => {
      this.props.history.push('/')
    }).catch(err => console.log(err))
  }

  onSubmit(e) {
    const newGroup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    }
    this.editGroup(newGroup)
    e.preventDefault();
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <Link to="/"> Back to Groups </Link>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
              <input type="text" name="name" ref="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
              <input type="text" name="city" ref="city" placeholder="city" value={this.state.city} onChange={this.handleChange}/>
          </div>
          <div className="input-field">
              <input type="text" name="address" ref="address" placeholder="address" value={this.state.address} onChange={this.handleChange}/>
          </div>
          <input type="submit" value="Save" />
        </form>
      </div>
    )
  }
}

export default EditGroup