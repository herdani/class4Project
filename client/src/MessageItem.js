import React from 'react';
import moment from 'moment';
import './MessageItem.css';

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
