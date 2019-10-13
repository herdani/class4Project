import React from 'react';
import moment from 'moment';
import './MessageItem.css';
import ShareMessage from './ShareMessage';

export default ({ id, submission_date, license_plate, body, handleDelete }) => {
    var timePosted = moment(submission_date).format('DD/MM/YYYY - HH:mm');

    return (
        <li className="MessageItem">
            <span>Time: {timePosted} - </span>
            <span>To license: {license_plate} : </span>
            <span> {body} </span>
            <button onClick={() => handleDelete(id)}>X</button>
            <ShareMessage
                id={id}
                license_plate={license_plate}
                body={body}
                submission_date={submission_date}
            />
        </li>
    );
};
