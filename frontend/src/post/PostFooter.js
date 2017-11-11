import React, {Component} from 'react';

import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down'
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'
import FaCommentO from 'react-icons/lib/fa/comment-o'


class PostFooter extends Component {

    constructor(props) {
        super(props);

        this.onVoteUp = this.props.onVoteUp.bind(this);
        this.onVoteDown = this.props.onVoteDown.bind(this);
    }

    render() {

        const post = this.props.post;

        return (

            <ul className='post-stats'>
                <li className='post-stats__item post-stats__item_voting-panel'>
                    <div className="voting-panel">
                        <button onClick={() => {this.onVoteUp(post.id)}} type="button" className="btn voting-panel__button">
                            <FaThumbsOUp size={15}/>
                        </button>
                        <span className='voting-panel__counter'>{post.voteScore}</span>
                        <button onClick={() => {this.onVoteDown(post.id)}} type="button" className="btn voting-panel__button">
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
        )
    }
}

export default PostFooter