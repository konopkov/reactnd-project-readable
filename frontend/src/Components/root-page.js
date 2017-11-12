import React, {Component} from 'react'
import {connect} from 'react-redux'

import NavBar from './nav-bar'
import PostsList from './items-list'
import PostsSortingPanel from './sorting-panel'
import {
    fetchPosts,
    sortPosts,
    fetchPostVote,
    fetchDeletePost,
    fetchUpdatePost,
    SortingMethods,
    VoteVariants
} from "../Actions/actions"


class Root extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    orderPosts() {

        let posts = [];
        if (this.props.category) {
            posts = this.props.posts.filter((post) => post.category === this.props.category)
        } else {
            posts = this.props.posts
        }


        switch (this.props.sortingOrder) {
            case SortingMethods.VOTE_SCORE:
                return posts.sort((post1, post2) => {
                    return post2.voteScore - post1.voteScore
                });
            case SortingMethods.TIMESTAMP:
                return posts.sort((post1, post2) => {
                    return post2.timestamp - post1.timestamp
                });
            default:
                return posts
        }
    }

    render() {
        return (
            <div className='layout'>
                <NavBar/>
                <PostsSortingPanel
                    sortingOrder={this.props.sortingOrder}
                    onSortingVote={this.props.sortPostsByVoteScore}
                    onSortingTimestamp={this.props.sortPostsByTimestamp}
                />
                <PostsList
                    items={this.orderPosts()}
                    onVoteUp={this.props.postVoteUp}
                    onVoteDown={this.props.postVoteDown}
                    onEdit={this.props.postEdit}
                    onDelete={this.props.postDelete}
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
        postVoteUp: (id) => dispatch(fetchPostVote(id, VoteVariants.VOTE_UP)),
        postVoteDown: (id) => dispatch(fetchPostVote(id, VoteVariants.VOTE_DOWN)),
        postEdit: (post) => dispatch(fetchUpdatePost(post)),
        postDelete: (id) => dispatch(fetchDeletePost(id)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)
