import React from 'react'
import {Link} from 'react-router-dom';


const PostsList = ({posts}) => {
    if (posts.length === 0) {
        return <p>Your search has 0 results.</p>
    }

    return (
        <div className='posts-list'>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <div className='post'>
                            <h3 className='post-title'>
                                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                            </h3>
                            <h4 className='post-category'>
                                <Link to={`/category/${post.category}`}>{post.category}</Link>
                            </h4>
                            <h4 className='post-author'>
                                {post.author}
                            </h4>
                            <div className='post-body'>
                                {post.body}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default PostsList
