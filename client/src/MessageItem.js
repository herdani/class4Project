import React from 'react';
import moment from 'moment';
import './MessageItem.css';
import { Link } from 'react-router-dom';

export default ({ id, submission_date, license_plate, body, onEditClick }) => {
  var timePosted = moment(submission_date).format("DD/MM/YYYY - HH:mm");
  const handleEditClick = (event) => {
    event.preventDefault();
    onEditClick(id);
  };
  return (
    <li className="MessageItem">

      <span>Time: {timePosted} -  </span>
      <span>To license: {license_plate} : </span>
      <span onClick={(event) => handleEditClick}>   {body},{id}  </span>
      <Link className="btn" to={`/api/message/${id}`}>Edit</Link>



    </li>
  )
}
