import React, {Component} from 'react'
import {connect} from 'react-redux'

import PostBody from './PostBody'
import PostForm from './PostForm'
import NavBar from '../nav/NavBar'
import PostsList from '../post/PostsList'
import SortingPanel from '../root/SortingPanel'
import CommentForm from './CommentForm';

import {
    fetchPost,
    fetchPostVote,
    fetchCommentVote,
    fetchComments,
    sortComments,
    fetchNewComment,
    fetchNewPost,
    fetchDeleteComment,
    fetchDeletePost,
    VoteVariants,
    SortingMethods
} from '../root/actions'


class Post extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.id !== 'new') {
            this.props.fetchPost(this.props.id);
            this.props.fetchComments(this.props.id);
        }
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

        if (this.props.id === 'new' && (!this.props.post || Object.keys(this.props.post).length === 0)) {

            return (
                <div className='layout'>
                    <NavBar/>
                    <PostForm
                        onSumbitPost={this.props.fetchNewPost}
                    />
                </div>
            )
        } else if (!this.props.post || Object.keys(this.props.post).length === 0) {

            return (
                <div className='layout'>
                    <NavBar/>
                    Post not found
                </div>
            )
        }

        return (
            <div className='layout'>
                <NavBar/>
                <PostBody
                    post={this.props.post}
                    onVoteUp={this.props.postVoteUp}
                    onVoteDown={this.props.postVoteDown}
                    onEdit={this.props.postEdit}
                    onDelete={this.props.postDelete}
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
                    onSumbitComment={this.props.fetchNewComment}
                />
                <PostsList
                    posts={this.orderComments()}
                    onVoteUp={this.props.commentVoteUp}
                    onVoteDown={this.props.commentVoteDown}
                    onEdit={this.props.commentEdit}
                    onDelete={this.props.commentDelete}
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
        fetchNewComment: (comment) => dispatch(fetchNewComment(comment)),
        fetchNewPost: (post) => dispatch(fetchNewPost(post)),
        postEdit: (id) => alert(id),
        postDelete: (id) => dispatch(fetchDeletePost(id)),
        commentEdit: (id) => alert(id),
        commentDelete: (id) => dispatch(fetchDeleteComment(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post)
