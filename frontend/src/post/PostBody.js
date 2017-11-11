import React from 'react'
import {Link} from 'react-router-dom';

import PostFooter from './PostFooter'


const PostBody = ({post, onVoteUp, onVoteDown}) => {

    return (
        <article className='post'>
            <header className='post__meta'>
                <div className='user-info__nickname'>{post.author}</div>
                <div className='post__time'>
                    {`${new Date(post.timestamp).toLocaleDateString('en-US')} ${new Date(post.timestamp).toLocaleTimeString('en-US')}`}
                    </div>
            </header>
            <h3 className='post__title'>
                <Link className='post__title_link' to={`/posts/${post.id}`}>{post.title}</Link>
            </h3>
            <h4 className='post__category'>
                <Link className='post__category_link'
                      to={`/category/${post.category}`}>{post.category}
                </Link>
            </h4>
            <div className='post__body'>
                {post.body}
            </div>
            <footer className='post__footer'>
                <PostFooter
                    post={post}
                    onVoteUp={onVoteUp}
                    onVoteDown={onVoteDown}
                />
            </footer>
        </article>
    )
};

export default PostBody
