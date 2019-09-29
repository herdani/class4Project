import React, { Component } from 'react';
import Api from './Api';
import MessageItem from './MessageItem';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    async componentDidMount() {
      this.refreshMessages();
    }

    async refreshMessages() {
        const messages = await Api.getMessages();
       
            this.setState({
                messages,
            });
            console.log(messages);
    
        }
     
    _onDelete = async (_id) => {
     await Api.deleteMessage({id:_id});

        // const filterdMessages =this.state.messages.filter((message) => {
        //     return message.id !== id
        // });
        // this.setState({
        //     messages
        // });   
          
        this.refreshMessages();
        // console.log(filterdMessages);

    }   

    render() {
        const {
            messages
        } = this.state;
    
        
        return (
           
            <section className="messages">
                <ul>
                {
            messages.map(message => (
              <MessageItem
                onDelete={this._onDelete}
                key={message.id}
                {...message}
              />
            ))
          }
        </ul>
            </section>
        )
    }
}

export default Message;