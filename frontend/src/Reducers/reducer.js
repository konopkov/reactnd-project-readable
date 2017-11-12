import {combineReducers} from 'redux'
import {
    RECEIVE_POSTS,
    RECEIVE_POST,
    CLEAR_POSTS,
    UPDATE_POST,
    RECEIVE_CATEGORIES,
    RECEIVE_COMMENTS,
    RECEIVE_COMMENT,
    SORT_POSTS,
    SORT_COMMENTS,
    ADD_COMMENT,
    DELETE_POST,
    DELETE_COMMENT,
    SortingMethods,
    VOTE_POST,
    VoteVariants, VOTE_COMMENT
} from '../Actions/actions'


const InitialPostsState = {
    posts: [],
    sortingOrder: SortingMethods.VOTE_SCORE
};

const posts = (state = InitialPostsState, action) => {

    switch (action.type) {
        case RECEIVE_POSTS:

            return {
                ...state, posts: action.posts
            };

        case RECEIVE_POST:

            return {
                ...state, posts: [action.post]
            };

        case CLEAR_POSTS:

            return {
                ...state, posts: []
            };

        case UPDATE_POST:

            const posts = [];
            for (const post of state.posts) {
                post.id === action.post.id
                    ? posts.push(action.post)
                    : posts.push(post)

            }

            return {...state, posts: posts};

        case VOTE_POST:

            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === action.id) {
                        const newVoteScore = action.vote === VoteVariants.VOTE_UP ? post.voteScore + 1 : post.voteScore - 1;
                        return {...post, voteScore: newVoteScore}
                    } else {
                        return {...post}
                    }
                })
            };

        case SORT_POSTS:

            return {...state, sortingOrder: action.sortMethod};

        case DELETE_POST:

            return {...state, posts: state.posts.filter(post => post.id !== action.id)};

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

const InitialCommentsState = {
    comments: [],
    sortingOrder: SortingMethods.VOTE_SCORE
};

const comments = (state = InitialCommentsState, action) => {

    switch (action.type) {
        case RECEIVE_COMMENTS:

            return {...state, comments: action.comments};

        case RECEIVE_COMMENT:

            const comments = [];
            for (const comment of state.comments) {
                comment.id === action.comment.id
                    ? comments.push(action.comment)
                    : comments.push(comment)

            }

            return {...state, comments: comments};

        case SORT_COMMENTS:

            return {...state, sortingOrder: action.sortMethod};

        case ADD_COMMENT:

            return {...state, comments: [...state.comments, {...action.comment, voteScore: 0}]};

        case VOTE_COMMENT:

            return {
                ...state,
                comments: state.comments.map((comment) => {
                    if (comment.id === action.id) {
                        const newVoteScore = action.vote === VoteVariants.VOTE_UP ? comment.voteScore + 1 : comment.voteScore - 1;
                        return {...comment, voteScore: newVoteScore}
                    } else {
                        return {...comment}
                    }
                })
            };

        case DELETE_COMMENT:

            return {...state, comments: state.comments.filter(comment => comment.id !== action.id)};

        default:
            return state
    }
};

export default combineReducers({
        posts,
        categories,
        comments
    }
);
