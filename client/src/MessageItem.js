import React from 'react';
import moment from 'moment';
import './MessageItem.css';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
export default ({ id, submission_date, license_plate, body, comments}) => {
    var timePosted = moment(submission_date).format("DD/MM/YYYY - HH:mm");

    return (
      <li className="MessageItem">
        <span>Time: {timePosted}</span>
        <span>To license: {license_plate}</span>
        <span>   {body}  </span>
        <CommentForm messageId = {id} />
        <CommentList comments = {comments}/>
      </li>
    )
}
