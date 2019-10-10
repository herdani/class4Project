import React, { Component } from 'react';
import apiClient from './apiClient';

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            submitted: false
        }
        console.log(props);
    }

    handleSubmit = async (event) => {
        console.log(this.props);
        event.preventDefault();
        const messageData = new FormData(event.target);
        await apiClient.addComment({
            body: messageData.get('body'),
            post_id: this.props.post_id,
        });
        console.log(this.props.post_id);
        // this.props.refreshList();
        this.props.refreshList();

    };

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="MessageForm">
                <div>
                    <textarea id="body" name="body" type="text"/>
                </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        )
    }
};

export default CommentForm;
