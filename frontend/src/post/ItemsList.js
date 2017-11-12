import React from 'react'
import Item from './Item'


const ItemsList = ({items, onVoteUp, onVoteDown, onEdit, onDelete}) => {

    if (items.length === 0) {
        return <p>No items</p>
    }

    return (
        <div className='posts_list'>
            <ul className='content-list content-list_posts'>
                {items.map((item) => (
                    <li className='content-list__item content-list__item_post' key={item.id}>
                        <Item
                            key={item.id}
                            item={item}
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

export default ItemsList
