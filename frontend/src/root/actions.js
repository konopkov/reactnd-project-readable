import * as PostsAPIUtil from '../utils/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const SORT_POSTS = 'SORT_POSTS';
export const SORT_COMMENTS = 'SORT_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const VOTE_POST = 'VOTE_POST';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const DELETE_POST = 'DELETE_POST';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const SortingMethods = {
    VOTE_SCORE: 'VOTE_SCORE',
    TIMESTAMP: 'TIMESTAMP'
};

export const VoteVariants = {
    VOTE_UP: 'upVote',
    VOTE_DOWN: 'downVote'
};

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const votePost = (id, vote) => ({
    type: VOTE_POST,
    id,
    vote
});

export const voteComment = (id, vote) => ({
    type: VOTE_COMMENT,
    id,
    vote
});

export const addComment = (comment) => ({
   type: ADD_COMMENT,
   comment
});

export const sortPosts = sortMethod => ({
   type: SORT_POSTS,
    sortMethod
});

export const sortComments = sortMethod => ({
    type: SORT_COMMENTS,
    sortMethod
});

export const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
});

export const deletePost = (id) => ({
    type: DELETE_POST,
    id
});

export const deleteComment = (id) => ({
    type: DELETE_COMMENT,
    id
});

export const fetchPosts = () => dispatch => (
    PostsAPIUtil.fetchPosts()
        .then(posts => dispatch(receivePosts(posts)))
);

export const fetchComments = (id) => dispatch => (
    PostsAPIUtil.fetchComments(id)
        .then(comments => dispatch(receiveComments(comments)))
);

export const fetchPost = (id) => dispatch => (
    PostsAPIUtil.fetchPost(id)
        .then(post => dispatch(receivePost(post)))
);

export const fetchCategories = () => dispatch => (
    PostsAPIUtil.fetchCategories()
        .then(categories => dispatch(receiveCategories(categories)))
);

export const fetchPostVote = (id, vote) => dispatch => (
    PostsAPIUtil.fetchPostVote(id, vote)
        .then(() => dispatch(votePost(id, vote)))
);

export const fetchCommentVote = (id, vote) => dispatch => (
    PostsAPIUtil.fetchCommentVote(id, vote)
        .then(() => dispatch(voteComment(id, vote)))
);

export const fetchNewComment = (comment) => dispatch => (
    PostsAPIUtil.fetchNewComment(comment)
        .then((comment) => dispatch(addComment(comment)))
);

export const fetchNewPost = (post) => dispatch => (
    PostsAPIUtil.fetchNewPost(post)
        .then((post) => dispatch(receivePost(post)))
);

export const fetchDeletePost = (id) => dispatch => (
    PostsAPIUtil.fetchDeletePost(id)
        .then(() => dispatch(deletePost(id)))
);

export const fetchDeleteComment = (id) => dispatch => (
    PostsAPIUtil.fetchDeleteComment(id)
        .then(() => dispatch(deleteComment(id)))
);

export const fetchUpdatePost = (post) => dispatch => (
    PostsAPIUtil.fetchUpdatePost(post)
        .then((post) => dispatch(receivePost(post)))
);

export const fetchUpdateComment = (comment) => dispatch => (
    PostsAPIUtil.fetchUpdateComment(comment)
        .then(() => PostsAPIUtil.fetchComment(comment.id))
        .then((comment) => dispatch(receiveComment(comment)))
);