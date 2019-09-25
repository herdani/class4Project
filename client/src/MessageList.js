import React, { Component } from 'react';
import api from './apiClient';
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
    const messages = await api.getMessages();
    this.setState({
        messages
        })
    }


    render() {
        const {
            messages
        } = this.state;

        messages.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.submission_date) - new Date(a.submission_date);
          });
          
        const $messages = messages.map((message) => <MessageRow key={message._id} {...message} />);

        return (
            <section className="MessageList">
               {/*  <p>{messages}</p> */}
                 <ul>
                    {$messages}
                </ul> 
            </section>
        )
    }
}

export default MessageList;