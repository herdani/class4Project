import React, { Component } from 'react';
import ApiClient from './apiClient';
<<<<<<< HEAD
import './MessageList.css';
=======
import MessageRow from './MessageRow';

/* import './MessageList.css'; */ //will be enabled when css is made
>>>>>>> c09c94bd27091d24c613eb501641354a3d598704


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
