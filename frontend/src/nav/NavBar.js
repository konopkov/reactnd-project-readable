import React, {Component} from 'react';
import {connect} from 'react-redux'

import CategoriesList from '../category/CategoriesList';
import PostsList from '../post/PostsList';
import {fetchPosts, fetchCategories, sortPosts, SortingMethods} from "../root/actions";


class Root extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        return (

            <div className="main-navbar">
                <div className="main-navbar__section main-navbar__section_left">
                    <a href="/" className="logo">
                        Readable
                    </a>
                    <CategoriesList
                        categories={this.props.categories}
                    />

                </div>

                <div className="main-navbar__section main-navbar__section_right">
                    <a href='/posts/new' className="btn btn_x-large btn_navbar_new-post">New post</a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)
