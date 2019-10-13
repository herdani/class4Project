import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import api from './apiClient';
import './RatingForm.css';
import { Link } from 'react-router-dom';

class RatingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const messageData = new FormData(event.target);
        const messageId = this.props.match.params.id;
        console.log(messageId);

        await api.addRate({
            rate: messageData.get('rate'),
            message_id: messageId,
            body: messageData.get('body')
        });
        this.setState({
            submitted: true
        }

        );

        this.props.refresher();
    };

    render() {

        return (
            <form onSubmit={this.handleSubmit} className="RatingForm">
                <Link className="btn" to={`/api`}>Back</Link>
                <h1>Rating a Message</h1>
                <div>
                    <label htmlFor="license">Rating</label>
                    <input id="rate" name="rate" type="number" />
                </div>
                <div>
                    <label htmlFor="body">Message</label>
                    <textarea id="body" name="body" type="text" />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
                {this.state.submitted && <Redirect to="/api" />}
            </form>
        )
    }
};


export default RatingForm;