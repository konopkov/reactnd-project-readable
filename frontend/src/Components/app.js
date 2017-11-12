import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import RootPage from './root-page'
import PostPage from './post-page'


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
