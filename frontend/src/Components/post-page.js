import React, {Component} from 'react'
import {connect} from 'react-redux'

import Post from './item'
import PostForm from './post-form'
import NavBar from './nav-bar'
import CommentsList from './items-list'
import CommentsSortingPanel from './sorting-panel'
import CommentForm from './comment-form'

import {ApiPaths} from '../Utils/api'

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
    fetchUpdatePost,
    fetchUpdateComment,
    clearPosts,
    clearComments,
    VoteVariants,
    SortingMethods
} from '../Actions/actions'


class PostPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.id !== ApiPaths.PAGE_NEW_POST) {
            this.props.fetchPost(this.props.id);
            this.props.fetchComments(this.props.id);
        } else {
            this.props.clearPosts();
            this.props.clearComments();
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

        const {
            id, post, sortingOrder,
            postVoteUp, postVoteDown, postEdit, postDelete, fetchNewPost,
            sortCommentsByVoteScore, sortCommentsByTimestamp,
            commentVoteUp, commentVoteDown, commentEdit, commentDelete, fetchNewComment
        } = this.props;

        if (id === ApiPaths.PAGE_NEW_POST && (!post || Object.keys(post).length === 0)) {

            return (
                <div className='layout'>
                    <NavBar/>
                    <PostForm
                        onSumbitPost={fetchNewPost}
                    />
                </div>
            )
        } else if (!post || Object.keys(post).length === 0) {

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
                <Post
                    item={post}
                    onVoteUp={postVoteUp}
                    onVoteDown={postVoteDown}
                    onEdit={postEdit}
                    onDelete={postDelete}
                />
                <h3>Comments ({post.commentCount})</h3>
                <CommentForm
                    parentId={post.id}
                    onSumbitComment={fetchNewComment}
                />
                <CommentsSortingPanel
                    sortingOrder={sortingOrder}
                    onSortingVote={sortCommentsByVoteScore}
                    onSortingTimestamp={sortCommentsByTimestamp}
                />
                <CommentsList
                    items={this.orderComments()}
                    onVoteUp={commentVoteUp}
                    onVoteDown={commentVoteDown}
                    onEdit={commentEdit}
                    onDelete={commentDelete}
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
        clearPosts: () => dispatch(clearPosts()),
        fetchComments: (id) => dispatch(fetchComments(id)),
        clearComments: () => dispatch(clearComments()),
        postVoteUp: (id) => dispatch(fetchPostVote(id, VoteVariants.VOTE_UP)),
        postVoteDown: (id) => dispatch(fetchPostVote(id, VoteVariants.VOTE_DOWN)),
        commentVoteUp: (id) => dispatch(fetchCommentVote(id, VoteVariants.VOTE_UP)),
        commentVoteDown: (id) => dispatch(fetchCommentVote(id, VoteVariants.VOTE_DOWN)),
        sortCommentsByVoteScore: () => dispatch(sortComments(SortingMethods.VOTE_SCORE)),
        sortCommentsByTimestamp: () => dispatch(sortComments(SortingMethods.TIMESTAMP)),
        fetchNewComment: (comment) => dispatch(fetchNewComment(comment)),
        fetchNewPost: (post) => dispatch(fetchNewPost(post)),
        postEdit: (post) => dispatch(fetchUpdatePost(post)),
        postDelete: (id) => dispatch(fetchDeletePost(id)),
        commentEdit: (comment) => dispatch(fetchUpdateComment(comment)),
        commentDelete: (id) => dispatch(fetchDeleteComment(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage)
