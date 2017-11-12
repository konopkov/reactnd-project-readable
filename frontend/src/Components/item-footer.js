import React, {Component} from 'react'

import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down'
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'
import FaCommentO from 'react-icons/lib/fa/comment-o'


class ItemFooter extends Component {

    constructor(props) {
        super(props);

        this.onVoteUp = this.props.onVoteUp.bind(this);
        this.onVoteDown = this.props.onVoteDown.bind(this);
        this.onEdit = this.props.onEdit.bind(this);
        this.onDelete = this.props.onDelete.bind(this);
    }

    render() {

        const item = this.props.item;

        return (
            <footer className='post__footer'>
                <ul className='post-stats'>
                    <li className='post-stats__item post-stats__item_voting-panel'>
                        <div className="voting-panel">
                            <button onClick={() => {
                                this.onVoteUp(item.id)
                            }}
                                    type="button"
                                    className="btn voting-panel__button"
                            >
                                <FaThumbsOUp size={15}/>
                            </button>
                            <span className='voting-panel__counter'>{item.voteScore}</span>
                            <button onClick={() => {
                                this.onVoteDown(item.id)
                            }}
                                    type="button"
                                    className="btn voting-panel__button"
                            >
                                <FaThumbsODown size={15}/>
                            </button>
                            <span className='post-stats__item post-stats__item_comments'>
                            <FaCommentO sixe={15}/>
                        </span>
                            <span className='post-stats__comments-count'>{item.commentCount}</span>
                        </div>
                    </li>
                    <li>
                        <button onClick={() => {
                            this.onEdit(item.id)
                        }}
                                type="button"
                                className="btn btn_x-large btn_navbar_new-post"
                        >
                            Edit
                        </button>
                    </li>
                    <li>
                        <button onClick={() => {
                            this.onDelete(item.id)
                        }}
                                type="button"
                                className="btn btn_x-large btn_navbar_new-post"
                        >
                            Delete
                        </button>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default ItemFooter
