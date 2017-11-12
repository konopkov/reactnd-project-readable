import React, {Component} from 'react'
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
                    exact path={`/:category/:id`}
                    render={({match}) => (
                        <PostPage id={match.params.id}/>
                    )}
                />
                <Route
                    exact path={`/create/${ApiPaths.PAGE_NEW_POST}/post`}
                    render={({match}) => (
                        <PostPage id={ApiPaths.PAGE_NEW_POST}/>
                    )}
                />
                <Route
                    exact path={`/:category`}
                    render={({match}) => (
                        <RootPage category={match.params.category}/>
                    )}
                />

            </div>
        )
    }
}

export default App;
