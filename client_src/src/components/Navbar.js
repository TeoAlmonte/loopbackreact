import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component{
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>Menu</li>
            <li><Link to="/">Groups</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>More</li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar