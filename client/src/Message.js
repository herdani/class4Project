import React from 'react';

export default ({ id, body, submission_date, license_plate }) => {
    return (
        <div>
            <li href="#" className="list-group-item list-group-item-action ">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-2 text-justify">{license_plate}</h5>
                    <small>{submission_date}</small>
                </div>
                <p className="mb-1">{body}</p>
            </li>
        </div>
    );
};
