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
    sortingOrder: SortingMethods.VOTE_SCORE
};

const posts = (state = InitialState, action) => {

    switch (action.type) {
        case RECEIVE_POSTS:

            return {
                ...state, posts: action.posts
            };

        case RECEIVE_POST:

            return {
                ...state, posts: [action.post]
            };

        case VOTE_POST:

            return {
                ...state,
                posts: state.posts.map((post) => {
                   if (post.id === action.id) {
                       const newVoteScore = action.vote === VoteVariants.VOTE_UP  ? post.voteScore + 1 : post.voteScore - 1;
                       return {...post, voteScore: newVoteScore}
                   } else {
                       return {...post}
                   }
                })
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
