import React from 'react';
import moment from 'moment';
import './MessageItem.css';

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
