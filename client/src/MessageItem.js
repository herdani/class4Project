import React from 'react';
import moment from 'moment';
import './MessageItem.css';
import { Link } from 'react-router-dom';

export default ({ id, submission_date, license_plate, body }) => {
  var timePosted = moment(submission_date).format("DD/MM/YYYY - HH:mm");

  return (
    <li className="MessageItem">

      <span>Time: {timePosted} -  </span>
      <span>To license: {license_plate} : </span>
      <span>   {body},{id}  </span>
      <Link className="btn" to={`/api/message/${id}`}>Edit</Link>

    </li>
  )
}
