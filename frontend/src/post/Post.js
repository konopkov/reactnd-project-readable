import React, {Component} from 'react'
import PostBody from './PostBody'
import NavBar from '../nav/NavBar'

import {connect} from 'react-redux'
import {fetchPost, fetchVote, VoteVariants} from '../root/actions'


class Post extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.id);
    }

    render() {

        if (!this.props.post) {
            return <p>Not found</p>
        }
        return (
            <div className='layout'>
                <NavBar/>
                <PostBody
                    post={this.props.post}
                    onVoteUp={this.props.voteUp}
                    onVoteDown={this.props.voteDown}
                >
                </PostBody>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.posts.posts[0]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: (id) => dispatch(fetchPost(id)),
        voteUp: (id) => dispatch(fetchVote(id, VoteVariants.VOTE_UP)),
        voteDown: (id) => dispatch(fetchVote(id, VoteVariants.VOTE_DOWN))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post)
