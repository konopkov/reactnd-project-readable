import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import RootPage from './root-page'
import PostPage from './post-page'


import {ApiPaths} from '../Utils/api'


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
                    exact path={`/${ApiPaths.API_POSTS}/:id`}
                    render={({ match }) => (
                        <PostPage id={match.params.id}/>
                    )}
                />
                <Route
                    exact path={`/${ApiPaths.PAGE_NEW_POST}`}
                    render={({ match }) => (
                        <PostPage id={ApiPaths.PAGE_NEW_POST}/>
                    )}
                />
                <Route
                    exact path={`/${ApiPaths.PAGE_CATEGORY}/:id`}
                    render={({ match }) => (
                        <RootPage category={match.params.id}/>
                    )}
                />

            </div>
        )
    }
}

export default App;
