import React, {Component} from 'react'
import {connect} from 'react-redux'

import Post from './Item'
import PostForm from './PostForm'
import Editor from './Editor'
import NavBar from '../nav/NavBar'
import CommentsList from './ItemsList'
import CommentsSortingPanel from '../root/SortingPanel'
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
    fetchUpdatePost,
    fetchUpdateComment,
    VoteVariants,
    SortingMethods
} from '../root/actions'


class PostPage extends Component {
    state = {
        editorOpen: false
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.id !== 'new') {
            this.props.fetchPost(this.props.id);
            this.props.fetchComments(this.props.id);
        }
    }

    openEditor = () => {
        this.setState(() => ({
            editorOpen: true,
        }))
    };
    closeEditor = () => {
        this.setState(() => ({
            editorOpen: false,
        }))
    };

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

        const {editorOpen} = this.state;
        const {
            id, post, sortingOrder,
            postVoteUp, postVoteDown, postEdit, postDelete, fetchNewPost,
            sortCommentsByVoteScore, sortCommentsByTimestamp,
            commentVoteUp, commentVoteDown, commentEdit, commentDelete, fetchNewComment
        } = this.props;

        if (id === 'new' && (!post || Object.keys(post).length === 0)) {

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
                {!editorOpen && <Post
                    item={post}
                    onVoteUp={postVoteUp}
                    onVoteDown={postVoteDown}
                    onEdit={this.openEditor}
                    onDelete={postDelete}
                />}

                {editorOpen && <Editor
                    item={post}
                    onSumbitUpdate={postEdit}
                    onCancelUpdate={this.closeEditor}
                />}

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
        fetchComments: (id) => dispatch(fetchComments(id)),
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
        commentEdit: (id) => alert(id),
        commentDelete: (id) => dispatch(fetchDeleteComment(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage)
