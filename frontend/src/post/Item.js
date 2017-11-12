import React from 'react'
import {Link} from 'react-router-dom';

import ItemFooter from './ItemFooter'


const Item = ({item, onVoteUp, onVoteDown, onEdit, onDelete}) => {

    return (
        <article className='post'>
            <header className='post__meta'>
                <div className='user-info__nickname'>{item.author}</div>
                <div className='post__time'>
                    {`${new Date(item.timestamp).toLocaleDateString('en-US')} ${new Date(item.timestamp).toLocaleTimeString('en-US')}`}
                </div>
            </header>
            <h3 className='post__title'>
                <Link className='post__title_link' to={`/posts/${item.id}`}>{item.title}</Link>
            </h3>
            <h4 className='post__category'>
                <Link className='post__category_link'
                      to={`/category/${item.category}`}>{item.category}
                </Link>
            </h4>
            <div className='post__body'>
                {item.body}
            </div>
            <ItemFooter
                item={item}
                onVoteUp={onVoteUp}
                onVoteDown={onVoteDown}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        </article>
    )
};

export default Item
