import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import api from './apiClient';
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
        console.log('clicked');

        const messageData = new FormData(event.target);
        await api.addMessage({
            license_plate: messageData.get('license'),
            body: messageData.get('body')
        });

        this.setState({
            submitted: true
        });

    };

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="MessageForm">
            {this.state.submitted ? <Redirect to="/"/> : null}
                <div>
                    <label htmlFor="license">License Plate</label>
                    <input id="license" name="license" type="text" />
                </div>
             <br/>
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
