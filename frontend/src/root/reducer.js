import {combineReducers} from 'redux'
import {
    RECEIVE_POSTS,
    RECEIVE_POST,
    RECEIVE_CATEGORIES,
    SORT_POSTS,
    SortingMethods,
    VOTE_POST,
    VoteVariants
} from './actions'


const InitialState = {
    posts: [],
    post: {},
    sortingOrder: SortingMethods.VOTE_SCORE
};

const posts = (state = InitialState, action) => {

    switch (action.type) {
        case RECEIVE_POSTS:

            return {
                ...state, sortingOrder: SortingMethods.VOTE_SCORE, posts: action.posts
            };

        case RECEIVE_POST:

            return {
                ...state, sortingOrder: SortingMethods.VOTE_SCORE, post: action.post
            };

        case VOTE_POST:

            return {
                ...state,
                post: {
                    ...state.post,
                    voteScore: action.vote === VoteVariants.VOTE_UP ? state.post.voteScore + 1 : state.post.voteScore - 1
                }
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
