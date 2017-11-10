const SERVER_URL = 'http://localhost:3001';
const ApiPaths = {
    API_POSTS: 'posts',
    API_CATEGORIES: 'categories',
    API_COMMENTS: 'comments'
};
const API_HEADERS = { headers: { 'Authorization': 'app' }};

export const fetchPosts = () => fetch(`${SERVER_URL}/${ApiPaths.API_POSTS}`, API_HEADERS)
    .then((res) => res.json());

export const fetchPost = (id) => fetch(`${SERVER_URL}/${ApiPaths.API_POSTS}/${id}`, API_HEADERS)
    .then((res) => res.json());

export const fetchCategories = () => fetch(`${SERVER_URL}/${ApiPaths.API_CATEGORIES}`, API_HEADERS)
    .then((res) => res.json());
