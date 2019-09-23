import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import api from './apiClient';


class MessageForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            submitted: false
        }
      }
/*     handleLicense = async (event) => {
        event.preventDefault();
        console.log('License Added');
        this.addMessage({
            body: this.state.body,
            license_plate: this.state.license_plate
        });
    }

    handleMessage = async (event) => {

    } */

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

/*     async componentDidMount() {
        const message = await this.addMessage();
        this.setState({
            message
        });
    } */

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="MessageForm">

                {/* this.state.submitted ? <Redirect to="/"/> : null */}
                <div>
                    <label htmlFor="license">Enter License Plate</label>
                    <input id="license" name="license" type="text" />
                </div>
             <br/>
                <div>
                    <label htmlFor="body">Enter Message</label>
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
