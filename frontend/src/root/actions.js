import * as PostsAPIUtil from '../utils/api';


export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const SORT_POSTS = 'SORT_POSTS';
export const ADD_POST = 'ADD_POST';
export const VOTE_POST = 'VOTE_POST';

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

export const votePost = vote => ({
    type: VOTE_POST,
    vote
});

export const sortPosts = sortMethod => ({
   type: SORT_POSTS,
    sortMethod
});

export const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
});

export const fetchPosts = () => dispatch => (
    PostsAPIUtil.fetchPosts()
        .then(posts => dispatch(receivePosts(posts)))
);

export const fetchPost = (id) => dispatch => (
    PostsAPIUtil.fetchPost(id)
        .then(post => dispatch(receivePost(post)))
);

export const fetchCategories = () => dispatch => (
    PostsAPIUtil.fetchCategories()
        .then(categories => dispatch(receiveCategories(categories)))
);

export const fetchVote = (id, vote) => dispatch => (
    PostsAPIUtil.fetchVote(id, vote)
        .then(() => dispatch(votePost(vote)))
);