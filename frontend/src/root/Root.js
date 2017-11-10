import React, {Component} from 'react';
import {connect} from 'react-redux'

import CategoriesList from '../category/CategoriesList';
import PostsList from '../post/PostsList';
import {fetchPosts, fetchCategories} from "./actions";

class Root extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchCategories();
    }

    render() {
        return (
            <div className='layout'>
                <CategoriesList
                    categories={this.props.categories}
                />
                <PostsList
                    posts={this.props.posts}
                />
            </div>
        )
    }
}

function mapStateToProps ({ posts, categories }) {

    return {
        posts: posts.posts,
        categories: categories.categories
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchPosts: (data) => dispatch(fetchPosts()),
        fetchCategories: (data) => dispatch(fetchCategories())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)
