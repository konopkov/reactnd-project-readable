import React from 'react'
import PostBody from './PostBody'


const PostsList = ({posts, onVoteUp, onVoteDown, onEdit, onDelete}) => {

    if (posts.length === 0) {
        return <p>No posts</p>
    }

    return (
        <div className='posts_list'>
            <ul className='content-list content-list_posts'>
                {posts.map((post) => (
                    <li className='content-list__item content-list__item_post' key={post.id}>
                        <PostBody
                            key={post.id}
                            post={post}
                            onVoteUp={onVoteUp}
                            onVoteDown={onVoteDown}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default PostsList
