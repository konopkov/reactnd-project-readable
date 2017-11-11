import React, {Component} from 'react'
import PostBody from './PostBody'
import NavBar from '../nav/NavBar'
import PostsList from '../post/PostsList'
import SortingPanel from '../root/SortingPanel'
import CommentForm from './CommentForm';

import {connect} from 'react-redux'
import {
    fetchPost, fetchPostVote, fetchCommentVote, fetchComments, sortComments, fetchComment, VoteVariants, SortingMethods
} from '../root/actions'


class Post extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.id);
        this.props.fetchComments(this.props.id);
    }

    orderComments() {

        const comments = this.props.comments;

        switch (this.props.sortingOrder) {
            case SortingMethods.VOTE_SCORE:
                return comments.sort((comments1, comments2) => {
                    return comments2.voteScore - comments1.voteScore
                });
            case SortingMethods.TIMESTAMP:
                return comments.sort((comments1, comments2) => {
                    return comments2.timestamp - comments1.timestamp
                });
            default:
                return comments
        }
    }

    render() {

        if (!this.props.post) {
            return <p>Not found</p>
        }
        return (
            <div className='layout'>
                <NavBar/>
                <PostBody
                    post={this.props.post}
                    onVoteUp={this.props.postVoteUp}
                    onVoteDown={this.props.postVoteDown}
                >
                </PostBody>
                <SortingPanel
                    sortingOrder={this.props.sortingOrder}
                    onSortingVote={this.props.sortCommentsByVoteScore}
                    onSortingTimestamp={this.props.sortCommentsByTimestamp}
                />
                <h3>Comments ({this.props.post.commentCount})</h3>
                <CommentForm
                    post={this.props.post}
                    onSumbitComment={this.props.fetchComment}
                />
                <PostsList
                    posts={this.orderComments()}
                    onVoteUp={this.props.commentVoteUp}
                    onVoteDown={this.props.commentVoteDown}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.posts.posts[0],
        comments: state.comments.comments,
        sortingOrder: state.comments.sortingOrder
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: (id) => dispatch(fetchPost(id)),
        fetchComments: (id) => dispatch(fetchComments(id)),
        postVoteUp: (id) => dispatch(fetchPostVote(id, VoteVariants.VOTE_UP)),
        postVoteDown: (id) => dispatch(fetchPostVote(id, VoteVariants.VOTE_DOWN)),
        commentVoteUp: (id) => dispatch(fetchCommentVote(id, VoteVariants.VOTE_UP)),
        commentVoteDown: (id) => dispatch(fetchCommentVote(id, VoteVariants.VOTE_DOWN)),
        sortCommentsByVoteScore: () => dispatch(sortComments(SortingMethods.VOTE_SCORE)),
        sortCommentsByTimestamp: () => dispatch(sortComments(SortingMethods.TIMESTAMP)),
        fetchComment: (comment) => dispatch(fetchComment(comment))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post)
