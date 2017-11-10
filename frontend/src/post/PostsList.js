import React from 'react'
import Post from './Post'


const PostsList = ({posts}) => {
    if (posts.length === 0) {
        return <p>No posts</p>
    }

    return (
        <div className='posts_list'>
            <ul className='content-list content-list_posts'>
                {posts.map((post) => (
                    <Post key={post.id} post={post}/>
                ))}
            </ul>
        </div>
    )
};

export default PostsList
