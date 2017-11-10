import React from 'react'
import {Link} from 'react-router-dom';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down'
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'
import FaCommentO from 'react-icons/lib/fa/comment-o'


const PostBody = ({post}) => {

    return (
        <article className='post'>
            <header className='post__meta'>
                <div className='user-info__nickname'>{post.author}</div>
                <div className='post__time'>{new Date(post.timestamp).toDateString()}</div>
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
                <ul className='post-stats'>
                    <li className='post-stats__item post-stats__item_voting-panel'>
                        <div className="voting-panel">
                            <button type="button" className="btn voting-panel__button">
                                <FaThumbsOUp size={15}/>
                            </button>
                            <span className='voting-panel__counter'>{post.voteScore}</span>
                            <button type="button" className="btn voting-panel__button">
                                <FaThumbsODown size={15}/>
                            </button>
                            <span className='post-stats__item post-stats__item_comments'>
                                                <FaCommentO sixe={15}>
                                                </FaCommentO>
                                            </span>
                            <span className='post-stats__comments-count'>{post.commentCount}</span>
                        </div>
                    </li>
                </ul>
            </footer>
        </article>
    )
};

export default PostBody
