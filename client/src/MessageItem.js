import React from 'react';
import moment from 'moment';
import './MessageItem.css';

<<<<<<< HEAD
export default ({ id, submission_date, license_plate, body, handleDelete }) => {
    var timePosted = moment(submission_date).format('DD/MM/YYYY - HH:mm');

    return (
        <li className="MessageItem">
            <span>Time: {timePosted} - </span>
            <span>To license: {license_plate} : </span>
            <span> {body} </span>
            <button onClick={() => handleDelete(id)}>X</button>
        </li>
    );
};
=======
export default ({ _id, submission_date, license_plate, body}) => {
    var timePosted = moment(submission_date).format("DD/MM/YYYY - HH:mm");
    return (
      <li className="MessageItem">
        <span>Time: {timePosted} -  </span>
        <span>To license: {license_plate} : </span>
        <span>   {body}  </span>
      </li>
    )
}
>>>>>>> 63c0391deca7612840eb09d59288de8dd4c85ab8
