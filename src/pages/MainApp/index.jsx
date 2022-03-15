import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../../components/molekul/header/header'

import CreateBlog from '../create-blog/CreateBlog'
import DetailBlog from '../detailBlog/detailBlog'
import Home from '../Home'


const MainApp = () => {
    return (

        <div>
          <h1>jang</h1>
            {/* CONTENT */}
            <Router>
                <Switch>
                    <Route path="/" >
                        <Home />
                    </Route>
                    <Route path="/create-blog">
                        <CreateBlog />
                    </Route>
                    <Route path="/detail-blog">
                        <DetailBlog />
                    </Route>
                </Switch>
            </Router>
            <h1>footer</h1>
        </div>
    )
}

export default MainApp