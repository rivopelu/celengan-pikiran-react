import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Register, Login, MainApp} from '../../pages'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainApp/>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes