import React, {Component} from 'react';
<<<<<<< HEAD
import ApiClient from './ApiClient';
=======
import api from './apiClient';
>>>>>>> 63c0391deca7612840eb09d59288de8dd4c85ab8
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
<<<<<<< HEAD
        await ApiClient.addMessage({
=======
        await api.addMessage({
>>>>>>> 63c0391deca7612840eb09d59288de8dd4c85ab8
            license_plate: messageData.get('license'),
            body: messageData.get('body')
        });
        
        this.props.refresher();
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