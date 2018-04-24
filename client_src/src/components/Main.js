import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Group from './Group'
import About from './About'
import GroupDetails from './GroupDetails';
import AddGroup from './AddGroup'
import EditGroup from './EditGroup'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Group} />
      <Route exact path='/about' component={About} />
      <Route exact path='/groups/add' component={AddGroup} />
      <Route exact path='/groups/edit/:id' component={EditGroup} />
      <Route exact path='/groups/:id' component={GroupDetails} />
    </Switch>
  </main>
)

export default Main