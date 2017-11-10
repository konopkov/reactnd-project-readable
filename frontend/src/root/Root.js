import React, {Component} from 'react';
import {connect} from 'react-redux'

import CategoriesList from '../category/CategoriesList';
import PostsList from '../post/PostsList';
import {fetchPosts, fetchCategories, sortPosts, SortingMethods} from "./actions";


class Root extends Component {

    constructor(props) {
        super(props);
        // this.orderPosts = this.orderPosts.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchCategories();
    }

    orderPosts() {
        console.log('ordering');
        switch (this.props.sortingOrder) {
            case SortingMethods.VOTE_SCORE:
                return this.props.posts.sort((post1, post2) => {
                    return post2.voteScore - post1.voteScore
                });
            case SortingMethods.TIMESTAMP:
                return this.props.posts.sort((post1, post2) => {
                    return post2.timestamp - post1.timestamp
                });
            default:
                return this.props.posts
        }
    }

    render() {
        return (
            <div className='layout'>
                <CategoriesList
                    categories={this.props.categories}
                />
                <ul className='sorting-panel'>
                    <button className={`btn sorting-panel__button ${this.props.sortingOrder === SortingMethods.VOTE_SCORE ? 'sorting-panel__button_active' : ''} `}
                            onClick={this.props.sortPostsByVoteScore}>
                        By Votes
                    </button>
                    <button className={`btn sorting-panel__button ${this.props.sortingOrder === SortingMethods.TIMESTAMP ? 'sorting-panel__button_active' : ''} `}
                            onClick={this.props.sortPostsByTimestamp}>
                        By Time
                    </button>
                </ul>
                <PostsList
                    posts={this.orderPosts()}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        categories: state.categories.categories,
        sortingOrder: state.posts.sortingOrder
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        sortPostsByVoteScore: (e) => dispatch(sortPosts(SortingMethods.VOTE_SCORE)),
        sortPostsByTimestamp: (e) => dispatch(sortPosts(SortingMethods.TIMESTAMP)),
        fetchCategories: () => dispatch(fetchCategories())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)
