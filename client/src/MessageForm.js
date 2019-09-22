import React, {Component} from 'react';
const baseUrl = 'http://localhost:8080';


class MessageForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            body: "",
            license_plate: ""
        };
      }
    addMessage = async (data) => {
/*         return fetch(
            "/message/add", {
                method: "POST",
                headers: {
                "content-type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(response => response.json());
        }; */

        const response  = await fetch(`${baseUrl}/api/message/add`, {
        method: 'POST',
        headers: {"content-type": "application/json"},
        mode: 'cors',
        body: JSON.stringify(data)
        })
        console.log(response.body);
        return response.json();
    };

    
    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('clicked');
        this.addMessage({
            body: this.state.body,
            license_plate: this.state.license_plate
        });

    };

    render() {
        return(
            <form onSubmit={this.handleSubmit} >
            License: <input type="text" name="License" defaultValue={this.state.license_plate}/><br/><br/>
            Message: <textarea type="text" name="Body" defaultValue={this.state.body}/><br/>
            <input type="submit" value="Submit"/>
            </form>
        )
    }
};


export default MessageForm;