import React from 'react';
import moment from 'moment';

export default ({ _id, submission_date, license_plate, body}) => {

    var display = moment(submission_date).format("DD/MM/YYYY - HH:mm");

    return (
        <li className="MessageRow">
            <span>Time: {display} -  </span>
            <span>To license: {license_plate} : </span>
            <span>   {body}  </span>
        </li>
    )
}

