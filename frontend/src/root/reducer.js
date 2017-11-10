import {combineReducers} from 'redux'
import {RECEIVE_POSTS, RECEIVE_CATEGORIES} from './actions'

const posts = (state = {posts:[]}, action) => {

    switch (action.type) {
        case RECEIVE_POSTS:
            return {...state, posts: action.posts};
        default:
            return state
    }
};

const categories = (state = {categories:[]}, action) => {

    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return {...state, categories: action.categories.categories};
        default:
            return state
    }
};

export default combineReducers({
        posts,
        categories
    }
);
