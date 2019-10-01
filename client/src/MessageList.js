import React, { Component } from 'react';
import './MessageList.css';
import MessageItem from './MessageItem';

class MessageList extends Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);
    }

    render() {
        const { messages } = this.props;

        messages.sort(function(a, b) {
            //the list will be ordered in descending date order (most recent first)
            return new Date(b.submission_date) - new Date(a.submission_date);
        });

        const $messages = messages.map(message => (
            <MessageItem
                key={message._id}
                {...message}
                handleDelete={this.props.handleDelete}
            />
        ));

        return (
            <section className="MessageList">
                <h1>Message Board</h1>
                <ul>{$messages}</ul>
            </section>
        );
    }
}

export default MessageList;
=======

    constructor(props) {
        super(props);
    
    }

    render() {
        const {
            messages
        } = this.props;

        messages.sort(function(a,b){
            //the list will be ordered in descending date order (most recent first)
            return new Date(b.submission_date) - new Date(a.submission_date);
          });

        const $messages = messages.map((message) => <MessageItem key={message._id} {...message} />);

        return (
          <section className="MessageList">
            <h1>Message Board</h1>
             <ul>
                {$messages}
            </ul>
          </section>
        )
    }
}

export default MessageList;
>>>>>>> 63c0391deca7612840eb09d59288de8dd4c85ab8
