import React, {Component} from 'react';
import {connect} from 'react-redux'

import NavBar from '../nav/NavBar';
import PostsList from '../post/PostsList';
import {fetchPosts, sortPosts, fetchVote, SortingMethods, VoteVariants} from "./actions";


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
                    onVoteUp={this.props.voteUp}
                    onVoteDown={this.props.voteDown}
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
        voteUp: (id) => dispatch(fetchVote(id, VoteVariants.VOTE_UP)),
        voteDown: (id) => dispatch(fetchVote(id, VoteVariants.VOTE_DOWN))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)
