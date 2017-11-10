import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import Root from '../root/Root'

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
                        <Root
                        />
                    )}
                />
            </div>
        )
    }
}

export default App;
