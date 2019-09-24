import React, { Component } from 'react';
import ApiClient from './apiClient';
import MessageRow from './MessageRow';

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


    render() {
        const {
            messages
        } = this.state;

        const $messages = messages.map((message) => <MessageRow key={message._id} {...message} />);

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