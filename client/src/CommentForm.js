import React, {Component} from 'react';
import './Comment.css';
import api from './apiClient';
import {CommentButton} from './views/CommentButton';

class CommentForm extends Component {
  constructor(props){
      super(props);

      this.state = {
          commented: false
      }
  }
  handleClickComment = () => {
    this.setState({commented: true});
  }
  handleClickCancelComment = () => {
    this.setState({commented: false});
  }
  handleCommentPost = async(event) => {
    event.preventDefault();
      console.log("comment");
      const data = new FormData(event.target);
      await api.addComment({
          body: data.get('body'),
          email: data.get('email'),
          message_id: this.props.messageId
      });
      this.props.refresher();
      console.log(this.props.refresher);
    };

    render() {
          if(this.state.commented === false) {
            return(
              <CommentButton onClick = {this.handleClickComment}/>
            );
          } else {
            return(
              <form onSubmit={this.handleCommentPost} className="CommentForm">
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" />
                </div>
                <div>
                  <label htmlFor="body">Comment</label>
                  <textarea id="body" name="body" type="text"/>
                </div>
                <input type="submit" value="Post Comment"/>
                <button onClick = {this.handleClickCancelComment}>Cancel</button>
              </form>
            );
          }
    }
};


export default CommentForm;
