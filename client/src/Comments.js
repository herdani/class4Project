import React from 'react';
import moment from 'moment';


function Comments ({body, submission_date, commenter}) {

    var timePosted = moment(submission_date).format('DD/MM/YYYY - HH:mm');
    
    return(
        <li className="MessageItem">
            <div >
                <img ></img>
                <h6>{commenter}</h6>
            </div>
            <span>Time: {timePosted} - </span>
            <span>{body}</span>
        </li>

    );
};

export default Comments;