import React, {Component} from 'react'
import PostBody from './PostBody'
import NavBar from '../nav/NavBar';

import {connect} from 'react-redux'
import {fetchPost} from '../root/actions'


class Post extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.id);
    }

    render() {
        return (
            <div className='layout'>
                <NavBar/>
                <PostBody post={this.props.post}>
                </PostBody>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.posts.post
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: (id) => dispatch(fetchPost(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post)
