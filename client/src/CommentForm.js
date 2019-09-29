import React, {Component} from 'react';
import api from './apiClient';
import './CommentForm.css';

class CommentForm extends Component {
    render() {
        return(
            <form className="CommentForm">
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


export default CommentForm;
