import React, { Component } from 'react';
import Api from './api';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            license_plate: '',
            body: '',
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { license_plate, body } = this.state;
        await Api.addMessage({ license_plate: license_plate, body: body });
        console.log(license_plate, body);
    };

    handleChange = async event => {
        event.preventDefault();

        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="container mb-2">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">License Plate</label>
                    <input
                        type="text"
                        className="form-control"
                        name="license_plate"
                        placeholder="1 BE 987"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Your Message</label>
                    <input
                        type="text"
                        className="form-control"
                        name="body"
                        placeholder="Type Your Message"
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        );
    }
}

export default MessageForm;
