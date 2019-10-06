import React from 'react';
import moment from 'moment';
import ShareButton from './ShareButton'
import './MessageItem.css';

export default ({ id, submission_date, license_plate, body, handleDelete }) => {
    var timePosted = moment(submission_date).format('DD/MM/YYYY - HH:mm');
<<<<<<< HEAD
        

    
=======
>>>>>>> ff7064e713a999216bc78b260d6a6b9a5ae26239

    return (
        <li className="MessageItem">
            <span>Time: {timePosted} - </span>
            <span>To license: {license_plate} : </span>
            <span> {body} </span>
<<<<<<< HEAD
            <button onClick={()=>handleDelete(id)}>X</button>
            <ShareButton></ShareButton>
           
           
=======
            <button onClick={() => handleDelete(id)}>X</button>
>>>>>>> ff7064e713a999216bc78b260d6a6b9a5ae26239
        </li>
    );
};
