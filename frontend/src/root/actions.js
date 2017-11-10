import * as PostsAPIUtil from '../utils/api';


export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const SORT_POSTS = "SORT_POSTS";
export const ADD_POST = 'ADD_POST';

export const SortingMethods = {
    VOTE_SCORE: 'VOTE_SCORE',
    TIMESTAMP: 'TIMESTAMP'
};

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
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

export const fetchCategories = () => dispatch => (
    PostsAPIUtil.fetchCategories()
        .then(categories => dispatch(receiveCategories(categories)))
);
