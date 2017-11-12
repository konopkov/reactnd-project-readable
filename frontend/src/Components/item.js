import React, {Component} from 'react'
import {Link} from 'react-router-dom';

import ItemFooter from './item-footer'
import ItemHeader from './item-header'
import Editor from './editor'

class Item extends Component {
    state = {
        editorOpen: false
    };

    openEditor = () => {
        this.setState(() => ({
            editorOpen: true,
        }))
    };
    closeEditor = () => {
        this.setState(() => ({
            editorOpen: false,
        }))
    };

    render() {

        const {editorOpen} = this.state;
        const {item, onVoteUp, onVoteDown, onEdit, onDelete} = this.props;

        return (
            <article className='post'>
                <ItemHeader
                    item={item}
                />
                <h3 className='post__title'>
                    <Link className='post__title_link' to={`/posts/${item.id}`}>{item.title}</Link>
                </h3>
                <h4 className='post__category'>
                    <Link className='post__category_link'
                          to={`/category/${item.category}`}>{item.category}
                    </Link>
                </h4>
                {!editorOpen && <div className='post__body'>
                    {item.body}
                </div>}
                {editorOpen && <Editor
                    item={item}
                    onSumbitUpdate={onEdit}
                    onCancelUpdate={this.closeEditor}
                />}

                <ItemFooter
                    item={item}
                    onVoteUp={onVoteUp}
                    onVoteDown={onVoteDown}
                    onEdit={this.openEditor}
                    onDelete={onDelete}
                />
            </article>
        )
    }
}

export default Item
