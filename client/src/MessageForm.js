import React, {Component} from 'react';
import api from './apiClient';
import UploadPhoto from './UploadPhoto';
import './MessageForm.css';
const axios = require('axios');

class MessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            submitted: false,
            imgFile: null,
            imgFilePreview: null,
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const messageData = new FormData(event.target);
        if(this.state.imgFile){
          messageData .append(
             'imgFile',
             this.state.imgFile,
             this.state.imgFile.name
           );
        }

        await axios.post('http://localhost:8080/api/message/add', messageData);
        //we are using axios now, and this not longer needed
        //await api.addMessage({
            //license_plate: messageData.get('license'),
            //body: messageData.get('body')
        //});

        this.props.refresher();
    };

    handleImageChange = async (event) => {
      event.preventDefault();
      this.setState({
     imgFilePreview: URL.createObjectURL(event.target.files[0]),
     imgFile:(event.target.files[0])
   })
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="MessageForm">
                <div>
                    <label htmlFor="license">License Plate</label>
                    <input id="license" name="license_plate" type="text" />
                </div>
                <div>
                    <label htmlFor="body">Message</label>
                    <textarea id="body" name="body" type="text"/>
                </div>
                <UploadPhoto handleImageChange = {this.handleImageChange} imageFile = {this.state.imgFilePreview}/>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        )
    }
};


export default MessageForm;
