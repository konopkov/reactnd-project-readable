import React from 'react'

const ItemHeader = ({item}) => {

    return (
        <header className='post__meta'>
            <div className='user-info__nickname'>{item.author}</div>
            <div className='post__time'>
                {`${new Date(item.timestamp).toLocaleDateString('en-US')} ${new Date(item.timestamp).toLocaleTimeString('en-US')}`}
            </div>
        </header>
    )
};

export default ItemHeader
