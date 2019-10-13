import React from 'react';
import moment from 'moment';
import './Comment.css';
export default ({body, email, submission_date}) => {
    var timePosted = moment(submission_date).format("DD/MM/YYYY - HH:mm");

    return (
      <li className="CommentItem">
        <p>From: {email}</p>
        <p>Message: {body}</p>
        <p>{timePosted}</p>
      </li>
    )
}
