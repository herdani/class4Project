import React from 'react';
import moment from 'moment';
import ShareButton from './ShareButton'
import './MessageItem.css';

export default ({ id, submission_date, license_plate, body, handleDelete, changing }) => {
    var timePosted = moment(submission_date).format('DD/MM/YYYY - HH:mm');

         return (
            <li className="MessageItem">
            <span>Time: {timePosted} - </span>
            <span>To license: {license_plate} : </span>
            <span> {body} </span>
            <button disabled={changing ? true:false} onClick={() => handleDelete(id)}>X</button>
            <ShareButton></ShareButton>
        </li>

         );
        

    };

