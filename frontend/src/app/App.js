import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import RootPage from '../root/RootPage'
import PostPage from '../post/PostPage'

import './App.css'


class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">

                <Route
                    exact path='/'
                    render={() => (
                        <RootPage/>
                    )}
                />
                <Route
                    path='/posts/:id'
                    render={({ match }) => (
                        <PostPage id={match.params.id}/>
                    )}
                />
                <Route
                    path='/category/:id'
                    render={({ match }) => (
                        <RootPage category={match.params.id}/>
                    )}
                />

            </div>
        )
    }
}

export default App;
