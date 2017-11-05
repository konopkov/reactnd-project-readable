import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import Root from '../root/Root'

import './App.css'

import {categories, posts} from '../fake-data'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: categories,
            posts: posts
        }
    }

    render() {
        const {categories, posts} = this.state;
        return (
            <div className="app">

                <Route
                    exact path='/'
                    render={() => (
                        <Root
                            categories={categories}
                            posts={posts}
                        />
                    )}
                />
            </div>
        )
    }
}

export default App;
