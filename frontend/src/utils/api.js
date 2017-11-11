const SERVER_URL = 'http://localhost:3001';
const ApiPaths = {
    API_POSTS: 'posts',
    API_CATEGORIES: 'categories',
    API_COMMENTS: 'comments'
};
const API_HEADERS_GET = { headers: { 'Authorization': 'app' }};
const API_HEADERS_POST = { headers: { 'Authorization': 'app', 'Content-Type': 'application/json' }};
const voteRequest = (vote) => {
    return {headers: API_HEADERS_POST.headers, method: 'POST', body: JSON.stringify({
        option: vote
    })}
};
const newCommentRequest = (comment) => {
    return {headers: API_HEADERS_POST.headers, method: 'POST', body: JSON.stringify({
        id: comment.id,
        timestamp: comment.timestamp,
        body: comment.body,
        author: comment.author,
        parentId: comment.parentId
    })}
};
const newPostRequest = (post) => {
    return {headers: API_HEADERS_POST.headers, method: 'POST', body: JSON.stringify({
        id: post.id,
        timestamp: post.timestamp,
        title: post.title,
        category: post.category,
        body: post.body,
        author: post.author,
    })}
};

export const fetchPosts = () => fetch(`${SERVER_URL}/${ApiPaths.API_POSTS}`, API_HEADERS_GET)
    .then((res) => res.json());

export const fetchPost = (id) => fetch(`${SERVER_URL}/${ApiPaths.API_POSTS}/${id}`, API_HEADERS_GET)
    .then((res) => res.json())
    .then((post) => {
        if (!post.error) {
            return post
        } else {
            return {}
        }
    });

export const fetchCategories = () => fetch(`${SERVER_URL}/${ApiPaths.API_CATEGORIES}`, API_HEADERS_GET)
    .then((res) => res.json());

export const fetchComments = (id) => fetch(`${SERVER_URL}/${ApiPaths.API_POSTS}/${id}/comments`, API_HEADERS_GET)
    .then((res) => res.json());

export const fetchPostVote = (id, vote) => fetch(`${SERVER_URL}/${ApiPaths.API_POSTS}/${id}`, voteRequest(vote));

export const fetchCommentVote = (id, vote) => fetch(`${SERVER_URL}/${ApiPaths.API_COMMENTS}/${id}`, voteRequest(vote));

export const fetchNewComment = (comment) => fetch(`${SERVER_URL}/${ApiPaths.API_COMMENTS}`, newCommentRequest(comment))
    .then((res) => res.json());

export const fetchNewPost = (post) => fetch(`${SERVER_URL}/${ApiPaths.API_POSTS}`, newPostRequest(post))
    .then((res) => res.json());
