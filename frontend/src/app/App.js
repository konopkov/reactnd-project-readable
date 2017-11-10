import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import Root from '../root/Root'
import Post from '../post/Post'

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
                        <Root/>
                    )}
                />
                <Route
                    path='/posts/:id'
                    render={({ match }) => (
                        <Post id={match.params.id}/>
                    )}
                />
            </div>
        )
    }
}

export default App;
