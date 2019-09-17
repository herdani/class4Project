import React, { Component } from 'react';
import Message from './Message';
import Api from './api';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
    }

    async componentDidMount() {
        this.refreshMessages();
    }

    async refreshMessages() {
        const messages = await Api.getMessages();
        this.setState({
            messages,
        });
    }

    handleDelete = async id => {
        await Api.deleteMessages({ id: id });
    };

    render() {
        const { messages } = this.state;
        const $messages = messages.map(message => (
            <Message
                key={message.id}
                {...message}
                handleDelete={this.handleDelete}
            />
        ));

        return <ul className="list-group">{$messages}</ul>;
    }
}
export default Messages;
