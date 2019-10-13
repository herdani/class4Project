import React from 'react';
import moment from 'moment';
import './MessageItem.css';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const MessageItem = props => {
  const { id, submission_date, license_plate, body, handleDelete, refresher, comments} = props;
  var timePosted = moment(submission_date).format("DD/MM/YYYY - HH:mm");
  return (
    <li className="MessageItem">
      <span>Time: {timePosted}</span>
      <span>To license: {license_plate}</span>
      <span>   {body}  </span>
      <CommentForm refresher = {refresher} messageId = {id} />
      <button onClick={() => handleDelete(id)}>Delete Message</button>
      <CommentList  comments = {comments}/>
    </li>
  );
}


export default MessageItem
