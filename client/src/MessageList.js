import React, { Component } from 'react';
import MessageForm from './MessageForm';

/* import './MessageList.css'; */ //will be enabled when css is made


class MessageList extends Component {

    constructor(props) {
        super(props);
        this.state ={
            messages: [],
        }
    }

    async componentDidMount() {
    const messages = await MessageForm.addMessage();
    this.setState({
        messages
    });
    }
}