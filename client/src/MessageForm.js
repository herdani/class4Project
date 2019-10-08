import React, {Component} from 'react';
import apiClient from './apiClient';
import './MessageForm.css';

class MessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            submitted: false
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const messageData = new FormData(event.target);
        await apiClient.addMessage({
            license_plate: messageData.get('license'),
            body: messageData.get('body')
        });
        console.log("submitted");
        this.props.refreshList();
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="MessageForm">
                <div>
                    <label htmlFor="license">License Plate</label>
                    <input id="license" name="license" type="text" />
                </div>
                <div>
                    <label htmlFor="body">Message</label>
                    <textarea id="body" name="body" type="text"/>
                </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        )
    }
};


export default MessageForm;