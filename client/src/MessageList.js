import React, { Component } from 'react';
import ApiClient from './apiClient';
import './MessageList.css';
import MessageRow from './MessageRow';
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
        })
    }


    render() {
        const {
            messages
        } = this.state;

        messages.sort(function(a,b){
            //the list will be ordered in descending date order (most recent first)
            return new Date(b.submission_date) - new Date(a.submission_date);
          });

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
