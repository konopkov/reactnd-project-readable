import React, {Component} from 'react'


class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue: props.item.title,
            textAreaValue: props.item.body
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSumbitUpdate = this.props.onSumbitUpdate.bind(this);
        this.onCancelUpdate = this.props.onCancelUpdate.bind(this)
    }

    onTitleChange(event) {
        this.setState({titleValue: event.target.value});
    }

    onTextAreaChange(event) {
        this.setState({textAreaValue: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        const post = {
            id: this.props.item.id,
            timestamp: Date.now(),
            title: this.state.titleValue,
            body: this.state.textAreaValue
        };
        this.onSumbitUpdate(post);
        this.onCancelUpdate()
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <ul className='content-list'>
                    <li>
                        <label htmlFor='title'>Title:</label>
                    </li>
                    <li>
                        <input type='text' id='title' value={this.state.titleValue} onChange={this.onTitleChange}/>
                    </li>
                    <li>
                        <label htmlFor='post'>Post:</label>
                    </li>
                    <li>
                        <textarea rows='10' cols='50' id='post' placeholder='Your new post. Here.'
                                  value={this.state.textAreaValue}
                                  onChange={this.onTextAreaChange}/>
                    </li>
                    <li>
                        <input className='btn btn_x-large btn_comment_submit' type='submit' value='Submit'/>
                    </li>
                    <li>
                        <input onClick={this.onCancelUpdate} className='btn btn_x-large btn_comment_submit' type='reset'
                               value='Cancel'/>
                    </li>
                </ul>
            </form>
        );
    }
}

export default Editor
