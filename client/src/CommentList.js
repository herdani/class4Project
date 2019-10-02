import React, { Component } from 'react';
import './Comment.css';
import CommentItem from './CommentItem';

class CommentList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            comments
        } = this.props;

        comments.sort(function(a,b){
            return new Date(b.submission_date) - new Date(a.submission_date);
          });

        const commentsComponent = comments.map((comment) => <CommentItem key={comment.id} {...comment} />);

        return (
          <section className="CommentList">
            <h1>Comments</h1>
             <ul>
                {commentsComponent}
            </ul>
          </section>
        )
    }
}

export default CommentList;
