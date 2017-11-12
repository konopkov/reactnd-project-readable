import React, {Component} from 'react'
import {uuidv4} from '../Utils/uuid'

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            textAreaValue: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSumbitComment = this.props.onSumbitComment.bind(this)
    }

    onInputChange(event) {
        this.setState({inputValue: event.target.value});
    }

    onTextAreaChange(event) {
        this.setState({textAreaValue: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        const comment = {
            id: uuidv4(),
            timestamp: Date.now(),
            body: this.state.textAreaValue,
            author: this.state.inputValue,
            parentId: this.props.parentId
        };
        this.onSumbitComment(comment)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <ul className='content-list'>
                    <li>
                        <label htmlFor='name'>Name:</label>
                    </li>
                    <li>
                        <input type='text' id='name' value={this.state.inputValue} onChange={this.onInputChange}/>
                    </li>
                    <li>
                        <label htmlFor='comment'>Comment:</label>
                    </li>
                    <li>
                        <textarea rows='10' cols='50' id='comment' placeholder='Say something nice...' value={this.state.textAreaValue}
                                  onChange={this.onTextAreaChange}/>
                    </li>
                    <li>
                        <input className='btn btn_x-large btn_comment_submit' type='submit' value='Submit'/>
                    </li>
                </ul>
            </form>
        );
    }
}

export default CommentForm