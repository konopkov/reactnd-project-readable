import {combineReducers} from 'redux'
import {RECEIVE_POSTS, RECEIVE_CATEGORIES, SORT_POSTS, SortingMethods} from './actions'


const posts = (state = {posts: [], sortingOrder: SortingMethods.VOTE_SCORE}, action) => {

    switch (action.type) {
        case RECEIVE_POSTS:

            return {
                ...state, sortingOrder: SortingMethods.VOTE_SCORE, posts: action.posts
            };

        case SORT_POSTS:

            return {...state, sortingOrder: action.sortMethod};

        default:

            return state
    }
};

const categories = (state = {categories: []}, action) => {

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
