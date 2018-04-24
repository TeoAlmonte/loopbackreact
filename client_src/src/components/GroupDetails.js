import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class GroupDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      details: ''
    }
  }

  componentWillMount() {
    this.getSingleDetails()
  }

  getSingleDetails() {
    let groupId = this.props.match.params.id
    axios.get(`http://localhost:3000/api/groups/${groupId}`)
    .then(response => {
      // console.log(response.data)
      this.setState({details: response.data}, () => {
        // console.log(this.state)
      })
    })
    .catch(err => console.log(err))
  }

  onDelete() {
    let groupId = this.props.match.params.id
    axios.delete(`http://localhost:3000/api/groups/${groupId}`)
      .then(response => {
        this.props.history.push('/')
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Link to="/">Go Back </Link>
        <h1>{this.state.details.name}</h1>
        <p>{this.state.details.address}</p>
        <p>{this.state.details.city}</p>
        <small><Link to={`/groups/edit/${this.state.details.id}`}>Edit</Link></small>
        <button onClick={this.onDelete.bind(this)}> Delete </button>
      </div>
    )
  }
}

export default GroupDetails