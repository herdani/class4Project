import React from 'react';
import moment from 'moment';
import './MessageItem.css';
import Rating from 'react-rating';
//import RatingForm from './RatingForm';
import { Link } from 'react-router-dom';

export default ({ id, submission_date, license_plate, body, handleDelete, ratings }) => {
    var timePosted = moment(submission_date).format('DD/MM/YYYY - HH:mm');
    console.log(ratings);
    const message = ratings.map(message => message.body);
    console.log(message);


    const averageRating = ratings.reduce((acc, rating) => (acc + rating.rate), 0);
    console.log(Math.round(averageRating / ratings.length));
    const averageRounded = averageRating / ratings.length;
    let ratingNumber;
    if (averageRounded) {
        ratingNumber = <span>{averageRounded}  </span>;
    }


    return (
        <div> <li className="MessageItem">
            <span>Time: {timePosted} - </span>
            <span>To license: {license_plate} : </span>
            <span> {body} </span>
            <button onClick={() => handleDelete(id)}>X</button>
            <br />
            <Link className="btn" to={`/api/message/${id}`}>RATING</Link>
            <br />

            <Rating placeholderRating={averageRounded} fractions={5} />
            {ratingNumber}
            {/* <span>{message}  </span> */}
        </li>

        </div>

    );
};
