import React, { Component } from 'react';
import MessageForm from './MessageForm';
import ApiClient from './apiClient';

/* import './MessageList.css'; */ //will be enabled when css is made


class MessageList extends Component {

    constructor(props) {
        super(props);
        this.state ={
            messages: [],
        }
    }

    async componentDidMount() {
    const messages = await ApiClient.getMessages();
    this.setState({
        messages
    });
    }
};

render() {
    const {
        messages
    } = this.state;

    const $messages = messages.map((message) => <TodoItem key={todo._id} {...todo} />);

    return (
        <section className="MessageList">
            <ul>
                {$messages}
            </ul>
        </section>
    )
}
}

export default MessageList;