import React, {Component} from 'react';
import './CommentForm.css';
import api from './apiClient';
import {CommentButton} from './views/CommentButton';

class CommentForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          commented: false
      }
  }

handleClickComment = async(event) => {
  event.preventDefault();
    console.log("comment");
  }
    render() {
        return(
            <form  className="CommentForm">
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />
              </div>
              <div>
                  <label htmlFor="body">Comment</label>
                  <textarea id="body" name="body" type="text"/>
                </div>
              <CommentButton onClick = {this.handleClickComment}/>
            </form>
        )
    }
};


export default CommentForm;
