import React, {Component} from 'react'
import {uuidv4} from '../utils/uuid'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            nameValue: '',
            categoryValue: '',
            textAreaValue: ''
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSumbitPost = this.props.onSumbitPost.bind(this)
    }

    onNameChange(event) {
        this.setState({nameValue: event.target.value});
    }

    onTitleChange(event) {
        this.setState({titleValue: event.target.value});
    }

    onCategoryChange(event) {
        this.setState({categoryValue: event.target.value});
    }

    onTextAreaChange(event) {
        this.setState({textAreaValue: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        const post = {
            id: uuidv4(),
            timestamp: Date.now(),
            title: this.state.titleValue,
            body: this.state.textAreaValue,
            author: this.state.nameValue,
            category: this.state.categoryValue
        };
        this.onSumbitPost(post)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <ul className='content-list'>
                    <li>
                        <label htmlFor='name'>Name:</label>
                    </li>
                    <li>
                        <input type='text' id='name' value={this.state.nameValue} onChange={this.onNameChange}/>
                    </li>
                    <li>
                        <label htmlFor='title'>Title:</label>
                    </li>
                    <li>
                        <input type='text' id='title' value={this.state.titleValue} onChange={this.onTitleChange}/>
                    </li>
                    <li>
                        <label htmlFor='category'>Category:</label>
                    </li>
                    <li>
                        <input type='text' id='category' value={this.state.categoryValue} onChange={this.onCategoryChange}/>
                    </li>
                    <li>
                        <label htmlFor='post'>Post:</label>
                    </li>
                    <li>
                        <textarea rows='10' cols='50' id='post' placeholder='Your new post. Here.' value={this.state.textAreaValue}
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

export default PostForm