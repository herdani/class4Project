import React, {Component} from 'react';
import api from './apiClient';
import UploadPhoto from './UploadPhoto';
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
        await api.addMessage({
            license_plate: messageData.get('license'),
            body: messageData.get('body')
        });

        this.props.refresher();
    };
    handleImageChange = async (event) => {
      event.preventDefault();
      console.log("handle Image");
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
                <UploadPhoto handleImageChange = {this.handleImageChange} imageFile = {"./platenumber.png"}/>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        )
    }
};


export default MessageForm;
