import React from 'react';
import './Comment.css';
import CommentItem from './CommentItem';

const CommentList = props => {
  const {comments} = props;
  comments.sort(function(a,b){
    return new Date(b.submission_date) - new Date(a.submission_date);
  });
  const commentsComponent = comments.map((comment) => <CommentItem key={comment.id} {...comment} />);

  if(comments.length === 0){
    return (
      <section className="CommentList">
        <h1>No Comments Yet</h1>
      </section>
    )
  } else {
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
