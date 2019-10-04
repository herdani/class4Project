import React, { Component } from 'react';
import './MessageList.css';
import MessageItem from './MessageItem';
import { Redirect } from 'react-router-dom';

class MessageList extends Component {

  constructor(props) {
    super(props);
    // 

  }
  onEditClick = async (id, data) => {
    console.log(id);

    this.setState({
      ...this.props,
      editingMessageId: id
    });
  }
  // onEditClick = (id) => {
  //   console.log(id);

  //   const editingMessageId = id;
  //   this.setState({ editingMessageId });
  // }


  render() {
    const {
      messages
    } = this.props;

    messages.sort(function (a, b) {
      //the list will be ordered in descending date order (most recent first)
      return new Date(b.submission_date) - new Date(a.submission_date);
    });

    const $messages = messages.map((message) => <MessageItem key={message._id} {...message} onEditClick={this.onEditClick} />);
    if (this.props.messages.editingMessageId) {
      return <Redirect to={`/api/message/:${this.props.messages.editingMessageId}`} />
    };

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
