import React, {Component} from 'react'
import axios from 'axios'
import GroupItem from './SingleItem'

class Group extends Component{
  constructor(){
    super();
    this.state = {
      groups: []
    }
  }

  componentWillMount(){
    this.getGroups()
  }

  getGroups(){
    axios.get('http://localhost:3000/api/groups')
      .then(response => {
        // console.log(response.data)
        this.setState({groups: response.data}, () => {
          // console.log(this.state)
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const groupItems = this.state.groups.map((group, i) => {
      return (
        <GroupItem key={group.id} item={group} />
      )
    })
    return (
      <div>
        <h1> Groups </h1>
        <ul>
          {groupItems}
        </ul>
      </div>
    )
  }
}

export default Group